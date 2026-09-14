#!/usr/bin/env python3
"""Split the steel-mirror pages into one image per article number.

CandelX pages 53/54/55 print every mirror on a single sheet, each with its own
printed dimensions and a position caption. On the site that arrived as one
combined picture, so a customer could not tell the mirrors apart.

Segmentation: drop the full-width rule, find ink regions, treat tall ones as
drawings, merge a drawing that got split in two, then pull each caption and
dimension label into the drawing above it. Four fixed images — the per-image
settings below were checked by eye, not guessed.

Run:  python3 scripts/split-mirror-diagrams.py
Out:  site/public/catalogue/img/mirrors/<key>-<n>.png  + mirror-crops.json
"""
from PIL import Image
import numpy as np, json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# NOT site/public — build-catalogue.mjs does rmSync on site/public/catalogue/img
# every run and would delete these. It copies this folder in instead.
OUT  = os.path.join(ROOT, "catalogue/mirror-img")

SRC = {
 "p72":  dict(f="site/public/catalogue/img/p72/p72-orthodontics-ss-mirrors-set-of-7-vectorrender-2437x4261.png",
              want=7, drop_last=True),   # last region is a 150-degree angle diagram, not a mirror
 "p73a": dict(f="site/public/catalogue/img/p73/p73-intraoral-photo-mirrors-vectorrender-3120x2188.png",
              want=5, drop_last=False),
 "p73b": dict(f="site/public/catalogue/img/p73/p73-photography-mirrors-with-handle-vectorrender-2133x1852.png",
              want=4, drop_last=False),
 "p74":  dict(f="site/public/catalogue/img/p74/p74-glass-two-sided-orthodontic-mirror-vectorrender-2775x4198.png",
              want=8, drop_last=False),
}
PAD = 26

def flat(p):
    im = Image.open(p).convert("RGBA")
    bg = Image.new("RGB", im.size, "white"); bg.paste(im, mask=im.split()[-1]); return bg

def bands(mask, gap):
    out=[]; s=None; run=0
    for i,v in enumerate(mask):
        if v:
            if s is None: s=i
            run=0
        else:
            if s is not None:
                run+=1
                if run>=gap: out.append((s,i-run)); s=None; run=0
    if s is not None: out.append((s,len(mask)-1))
    return out

oX = lambda a,b: min(a[2],b[2])-max(a[0],b[0])
oY = lambda a,b: min(a[3],b[3])-max(a[1],b[1])

os.makedirs(OUT, exist_ok=True)
manifest, ok = {}, True
for k,cfg in SRC.items():
    img = flat(os.path.join(ROOT, cfg["f"]))
    a = np.array(img.convert("L")); H,W = a.shape
    ink = a < 245
    ink[(ink.sum(axis=1)/W) > 0.55, :] = False          # the teal rule under the drawings

    regs=[]
    for (r0,r1) in bands(ink.any(axis=1), 30):
        strip = ink[r0:r1+1]
        if strip.sum() < 150: continue
        for (c0,c1) in bands(strip.any(axis=0), 40):
            sub = strip[:, c0:c1+1]
            if sub.sum() < 150: continue
            rr = np.where(sub.any(axis=1))[0]
            regs.append([int(c0), int(r0+rr[0]), int(c1), int(r0+rr[-1])])

    tall = max(r[3]-r[1] for r in regs)
    big   = [r for r in regs if (r[3]-r[1]) > tall*0.2]
    small = [r for r in regs if r not in big]

    # one drawing split in two: any vertical overlap and a small horizontal gap
    m=True
    while m:
        m=False
        for i in range(len(big)):
            for j in range(i+1, len(big)):
                A,B = big[i], big[j]
                if oY(A,B) > 0 and -oX(A,B) < W*0.06:
                    big[i] = [min(A[0],B[0]), min(A[1],B[1]), max(A[2],B[2]), max(A[3],B[3])]
                    big.pop(j); m=True; break
            if m: break

    cells = [r[:] for r in big]
    for s in small:                                       # caption / dimension text
        best, bd = None, None
        for i,c in enumerate(cells):
            if oX(s,c) <= 0: continue
            d = s[1]-c[3]
            if d < -0.5*(c[3]-c[1]): continue
            d = abs(d)
            if bd is None or d < bd: bd, best = d, i
        if best is not None and bd < max(H*0.02, 0.30*(cells[best][3]-cells[best][1])):
            c = cells[best]
            cells[best] = [min(c[0],s[0]), min(c[1],s[1]), max(c[2],s[2]), max(c[3],s[3])]

    cells.sort(key=lambda c: (round(((c[1]+c[3])/2)/(H*0.10)), c[0]))
    if cfg["drop_last"]: cells = cells[:-1]

    status = "OK" if len(cells)==cfg["want"] else f"WRONG (want {cfg['want']})"
    if len(cells)!=cfg["want"]: ok=False
    print(f"{k}: {len(cells)} mirrors  {status}")

    files=[]
    for i,(x0,y0,x1,y1) in enumerate(cells, 1):
        box = (max(0,x0-PAD), max(0,y0-PAD), min(W,x1+PAD), min(H,y1+PAD))
        name = f"{k}-{i}.png"
        img.crop(box).save(os.path.join(OUT, name), "PNG", optimize=True)
        files.append(f"/catalogue/img/mirrors/{name}")
    manifest[k]=files

json.dump(manifest, open(os.path.join(ROOT,"catalogue/mirror-crops.json"),"w"), indent=1)
print("\nwrote", sum(len(v) for v in manifest.values()), "crops ->", os.path.relpath(OUT, ROOT))
sys.exit(0 if ok else 1)

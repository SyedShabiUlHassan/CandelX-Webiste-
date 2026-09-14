import numpy as np, os
from PIL import Image
import matte2 as M

FADE = 150   # px at the bottom over which the reflection is ramped to nothing

def finish(img):
    rgba, al = M.matte(img)
    H, W = al.shape
    # The reflection is real, but the frame edge chops it off as a hard grey band.
    # Ramp alpha to zero over the last FADE rows so it dies out naturally.
    ramp = np.ones(H, np.float32)
    ramp[H-FADE:] = np.linspace(1, 0, FADE) ** 1.4
    al = al * ramp[:, None]
    rgba[:, :, 3] = (al * 255).astype(np.uint8)
    return rgba, al

def edge_extend(rgb, al, iters=4):
    """JPEG blurs across the matte edge, so flat-filling the transparent area
    would bleed that fill colour into the product's rim. Smear the edge colour
    outward first, then fill the rest — the bleed is then same-coloured."""
    out = rgb.astype(np.float32).copy()
    known = al > 0.02
    for _ in range(iters):
        k = known.astype(np.float32)
        acc = np.zeros_like(out); cnt = np.zeros_like(k)
        for dy, dx in ((1,0),(-1,0),(0,1),(0,-1)):
            acc += np.roll(np.roll(out * k[:,:,None], dy, 0), dx, 1)
            cnt += np.roll(np.roll(k, dy, 0), dx, 1)
        grow = (cnt > 0) & (~known)
        with np.errstate(invalid='ignore'):
            filled = acc / np.clip(cnt, 1, None)[:,:,None]
        out[grow] = filled[grow]
        known = known | grow
    out[~known] = 240.0
    return np.clip(out, 0, 255).astype(np.uint8)

if __name__ == '__main__':
    D = '/Users/Hassan/Documents/Website/site/public/hero-explode/'
    probes = {'BL':(1160,1280,0,120),'BR':(1160,1280,600,720),'bottom':(1272,1280,0,720)}
    tot = {'png':0,'packed':0,'src':0}
    for fn in ['f000','f072','f143']:
        rgba, al = finish(Image.open(D+fn+'.jpg'))
        H,W = al.shape
        Image.fromarray(rgba).save(fn+'_a.png')
        rgbx = edge_extend(rgba[:,:,:3], al)
        packed = np.zeros((H*2, W, 3), np.uint8)
        packed[:H] = rgbx
        packed[H:] = (al*255).astype(np.uint8)[:,:,None]
        Image.fromarray(packed).save(fn+'_packed.jpg', quality=82, subsampling=0)
        comp = (rgba[:,:,:3].astype(np.float32)*al[:,:,None] + 255*(1-al[:,:,None]))
        Image.fromarray(comp.astype(np.uint8)).save(fn+'_onwhite3.jpg', quality=92)
        g = np.asarray(Image.open(fn+'_onwhite3.jpg').convert('L')).astype(np.float32)
        res = {k: round(float(g[y0:y1,x0:x1].mean()),1) for k,(y0,y1,x0,x1) in probes.items()}
        p_png = os.path.getsize(fn+'_a.png'); p_pk = os.path.getsize(fn+'_packed.jpg'); p_src = os.path.getsize(D+fn+'.jpg')
        tot['png']+=p_png; tot['packed']+=p_pk; tot['src']+=p_src
        print(f"{fn}: png {p_png/1024:6.0f}K  packed-jpg {p_pk/1024:6.0f}K  (src jpg {p_src/1024:.0f}K)  empty-on-white {res}")
    n=3
    print(f"\nper-frame avg -> png {tot['png']/n/1024:.0f}K | packed {tot['packed']/n/1024:.0f}K | src {tot['src']/n/1024:.0f}K")
    for label,cnt in (('144',144),('72',72)):
        print(f"  x{label} frames: png {tot['png']/n*cnt/1048576:5.1f} MB | packed {tot['packed']/n*cnt/1048576:5.1f} MB | current {tot['src']/n*cnt/1048576:5.1f} MB")

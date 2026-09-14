import numpy as np, sys
sys.path.insert(0,'/private/tmp/claude-502/-Users-Hassan-Documents-Website/e6c1c83e-9cfa-416f-859b-752841bc3dbb/scratchpad')
from lab import *

S_LO, S_HI = 0.16, 0.32     # soft edge on saturation
H_LO, H_HI = 60.0, 78.0     # soft edge on how far the hue may stray from warm

def smooth(t): t=np.clip(t,0,1); return t*t*(3-2*t)

def lid_weight(rgb):
    """Soft 0..1 weight for 'this is the coloured lid'. Soft on both edges so the
    rim where the lid meets white fades instead of showing a hard outline."""
    s,h = hsv_sat_hue(rgb)
    dh = np.minimum(np.abs(h-25.0), 360-np.abs(h-25.0))     # distance from warm-red
    return smooth((s-S_LO)/(S_HI-S_LO)) * (1-smooth((dh-H_LO)/(H_HI-H_LO)))

def dilate(mask, r=2):
    out = mask.copy()
    for _ in range(r):
        acc = out.copy()
        for dy, dx in ((1,0),(-1,0),(0,1),(0,-1)):
            acc = np.maximum(acc, np.roll(np.roll(out, dy, 0), dx, 1))
        out = acc
    return out

def lid_weight_full(rgb):
    """lid_weight misses the anti-aliased rim, where the lid blends into white and
    the saturation drops below the floor — leaving a faint warm outline around a
    teal lid. Inside a small halo around the lid, accept much weaker saturation."""
    w = lid_weight(rgb)
    s, h = hsv_sat_hue(rgb)
    dh = np.minimum(np.abs(h-25.0), 360-np.abs(h-25.0))
    near = dilate(w > 0.5, 3)
    rim = near * smooth((s-0.03)/(0.14-0.03)) * (1-smooth((dh-H_LO)/(H_HI-H_LO)))
    return np.maximum(w, rim)

def recolour(rgb, target_hex, keep_lightness=0.0):
    """Rotate the lid's hue to the target and match its chroma/lightness, while
    leaving L's structure — every highlight, shadow and perforation — intact.
    keep_lightness 0 = fully adopt the target's lightness, 1 = keep the original's."""
    w = lid_weight_full(rgb)
    lab = rgb2lab(rgb)
    L, A, B = lab[...,0], lab[...,1], lab[...,2]
    C = np.sqrt(A*A + B*B)

    t = rgb2lab(np.array([[[int(target_hex[i:i+2],16) for i in (1,3,5)]]], float))[0,0]
    tC = np.sqrt(t[1]**2 + t[2]**2)
    tH = np.arctan2(t[2], t[1])

    m = w > 0.004
    if not m.any(): return rgb.copy()
    meanL, meanC = L[m].mean(), C[m].mean()

    # rebuild chroma along the target hue, scaled so the lid's colour intensity matches
    scale = tC / max(meanC, 1e-6)
    nA = np.cos(tH) * C * scale
    nB = np.sin(tH) * C * scale
    nL = L + (t[0] - meanL) * (1.0 - keep_lightness)

    out = np.stack([np.where(m, nL, L), np.where(m, nA, A), np.where(m, nB, B)], -1)
    out = lab2rgb(out)
    w3 = w[..., None]
    return np.clip(rgb*(1-w3) + out*w3, 0, 255)

import numpy as np
from PIL import Image
from collections import deque

MARGIN = 26
LO, HI = 4.0, 20.0
DEG    = 3          # polynomial degree for the per-row background fit

def rough_plate(L):
    """Pass 1 — per-row margin medians, ramped. No vertical smoothing: the
    horizon is a real step and smoothing across it invents a wrong background."""
    H, W = L.shape
    lm = np.median(L[:, :MARGIN], axis=1)
    rm = np.median(L[:, -MARGIN:], axis=1)
    t = np.linspace(0, 1, W)[None, :]
    return lm[:, None] * (1 - t) + rm[:, None] * t

def fit_plate(L, bg_mask):
    """Pass 2 — per row, fit a low-order polynomial in x through the pixels that
    pass 1 says are background. Captures the lens vignette and the floor's
    lateral falloff, which a straight left-to-right ramp cannot."""
    H, W = L.shape
    xs = np.linspace(-1, 1, W)
    V  = np.vander(xs, DEG + 1)                 # W x (DEG+1)
    out = np.empty((H, W), np.float32)
    prev = None
    for y in range(H):
        m = bg_mask[y]
        if m.sum() >= 40:
            coef, *_ = np.linalg.lstsq(V[m], L[y][m], rcond=None)
            row = V @ coef
            prev = coef
        elif prev is not None:
            row = V @ prev                       # row fully covered — reuse last good fit
        else:
            row = np.full(W, np.median(L[y]))
        out[y] = row
    return out

def clear_border_haze(alpha, thresh=0.25):
    """Anything reachable from the frame edge through sub-threshold alpha is
    background residue, not product. Flood from the border and zero it.
    Islands (the floor reflection) are never reached, so they survive."""
    H, W = alpha.shape
    weak = alpha < thresh
    seen = np.zeros((H, W), bool)
    dq = deque()
    for x in range(W):
        for y in (0, H - 1):
            if weak[y, x] and not seen[y, x]: seen[y, x] = True; dq.append((y, x))
    for y in range(H):
        for x in (0, W - 1):
            if weak[y, x] and not seen[y, x]: seen[y, x] = True; dq.append((y, x))
    while dq:
        y, x = dq.popleft()
        for dy, dx in ((1,0),(-1,0),(0,1),(0,-1)):
            ny, nx = y+dy, x+dx
            if 0 <= ny < H and 0 <= nx < W and weak[ny, nx] and not seen[ny, nx]:
                seen[ny, nx] = True; dq.append((ny, nx))
    a = alpha.copy(); a[seen] = 0.0
    return a

def matte(img):
    a = np.asarray(img.convert('RGB')).astype(np.float32)
    L = a.mean(2)

    B0 = rough_plate(L)
    bg_mask = (B0 - L) < 3.0                    # pixels pass 1 calls background
    B  = fit_plate(L, bg_mask)

    resid = np.clip(B - L, 0, None)
    t = np.clip((resid - LO) / (HI - LO), 0, 1)
    alpha = (t * t * (3 - 2 * t)).astype(np.float32)
    alpha = clear_border_haze(alpha)

    B3 = np.repeat(B[:, :, None], 3, axis=2)
    with np.errstate(invalid='ignore', divide='ignore'):
        F = (a - (1 - alpha[:, :, None]) * B3) / np.clip(alpha[:, :, None], 1e-3, None)
    F = np.where(alpha[:, :, None] > 0.01, F, a)
    F = np.clip(F, 0, 255)
    return np.dstack([F, alpha * 255]).astype(np.uint8), alpha

if __name__ == '__main__':
    D = '/Users/Hassan/Documents/Website/site/public/hero-explode/'
    # corners that must end up fully empty in every frame
    probes = {'TL':(0,120,0,120),'TR':(0,120,600,720),'ML':(400,560,0,90),'BL':(1160,1280,0,120),'BR':(1160,1280,600,720)}
    for fn in ['f000','f072','f143']:
        rgba, al = matte(Image.open(D+fn+'.jpg'))
        Image.fromarray(rgba).save(fn+'_cut2.png')
        comp = (rgba[:,:,:3].astype(np.float32)*al[:,:,None] + 255*(1-al[:,:,None]))
        Image.fromarray(comp.astype(np.uint8)).save(fn+'_onwhite2.jpg', quality=90)
        worst = {k: round(float(al[y0:y1,x0:x1].max()),3) for k,(y0,y1,x0,x1) in probes.items()}
        print(f"{fn}: opaque {100*(al>0.98).mean():5.1f}%  soft {100*((al>0.02)&(al<0.98)).mean():4.1f}%  max-alpha-in-empty {worst}")

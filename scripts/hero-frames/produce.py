import numpy as np, os, sys, time
from PIL import Image
import matte3 as M3

SRC = '/Users/Hassan/Documents/Website/site/public/hero-explode/'
OUT = '/Users/Hassan/Documents/Website/site/public/'
Y0, Y1, X0, X1 = 191, 1276, 48, 654      # union bbox across the sequence
W = 560
LEVELS = 32

for d in ('hero-orig', 'hero-white', 'hero-cut'):
    os.makedirs(OUT + d, exist_ok=True)

def fit(arr, mode='RGB'):
    im = Image.fromarray(arr) if arr.ndim == 3 else Image.fromarray(arr, 'L')
    h = int(round(im.height * W / im.width))
    return np.asarray(im.resize((W, h), Image.LANCZOS))

t0 = time.time()
for i in range(144):
    fn = f'f{i:03d}.jpg'
    src = Image.open(SRC + fn)

    # 1. original pixels, same crop/size as the others so the comparison is fair
    o = np.asarray(src.convert('RGB'))[Y0:Y1+1, X0:X1+1]
    Image.fromarray(fit(o)).save(f'{OUT}hero-orig/o{i:03d}.jpg', quality=80,
                                 subsampling=2, optimize=True)

    rgba, al = M3.finish(src)

    # 2. the cut, laid onto pure white — background matches the page, nothing else changes
    comp = rgba[:, :, :3].astype(np.float32) * al[:, :, None] + 255 * (1 - al[:, :, None])
    cw = comp[Y0:Y1+1, X0:X1+1].astype(np.uint8)
    Image.fromarray(fit(cw)).save(f'{OUT}hero-white/w{i:03d}.jpg', quality=80,
                                  subsampling=2, optimize=True)

    # 3. the cut, kept transparent: colour JPEG + a mask PNG carrying real alpha
    rgbx = M3.edge_extend(rgba[:, :, :3], al)[Y0:Y1+1, X0:X1+1]
    a    = (al[Y0:Y1+1, X0:X1+1] * 255).astype(np.uint8)
    rgbs = fit(rgbx)
    as_  = fit(a)
    step = 256 // LEVELS
    as_  = (np.round(as_ / step) * step).clip(0, 255).astype(np.uint8)
    Image.fromarray(rgbs).save(f'{OUT}hero-cut/c{i:03d}.jpg', quality=80,
                               subsampling=2, optimize=True)
    mask = np.dstack([np.zeros(as_.shape + (3,), np.uint8), as_])
    Image.fromarray(mask).save(f'{OUT}hero-cut/a{i:03d}.png', optimize=True)

    if i % 12 == 0 or i == 143:
        el = time.time() - t0
        print(f'{i+1}/144  {el:5.1f}s elapsed  eta {el/(i+1)*(144-i-1):5.1f}s', flush=True)

def mb(d, pat):
    fs = [os.path.getsize(OUT+d+'/'+f) for f in os.listdir(OUT+d) if f.endswith(pat)]
    return sum(fs)/1048576, len(fs)

print()
for d, pat in (('hero-orig','.jpg'), ('hero-white','.jpg')):
    m, n = mb(d, pat); print(f'{d}: {n} files, {m:.1f} MB (144)  {m/2:.1f} MB (72)')
mj, nj = mb('hero-cut', '.jpg'); mp, npn = mb('hero-cut', '.png')
print(f'hero-cut: {nj} jpg + {npn} png, {mj+mp:.1f} MB (144)  {(mj+mp)/2:.1f} MB (72)')
im = Image.open(f'{OUT}hero-cut/c000.jpg'); print('frame size:', im.width, 'x', im.height, ' aspect', round(im.width/im.height,4))

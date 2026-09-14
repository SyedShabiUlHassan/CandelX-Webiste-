import numpy as np, os, sys, time
sys.path.insert(0,'/private/tmp/claude-502/-Users-Hassan-Documents-Website/e6c1c83e-9cfa-416f-859b-752841bc3dbb/scratchpad')
from PIL import Image
from recolour import recolour

P='/Users/Hassan/Documents/Website/site/public/'
SRC=P+'hero-white/'
COLOURS=[('hero-teal','#007ea7'),('hero-teal700','#006485'),('hero-navy','#003249')]

t0=time.time()
for name,hexv in COLOURS:
    os.makedirs(P+name, exist_ok=True)
    os.makedirs(P+name+'-webp', exist_ok=True)
    for i in range(144):
        src=np.asarray(Image.open(f'{SRC}w{i:03d}.jpg').convert('RGB')).astype(np.float64)
        im=Image.fromarray(recolour(src,hexv).astype(np.uint8))
        im.save(f'{P}{name}/w{i:03d}.jpg', quality=80, subsampling=2, optimize=True)
        im.save(f'{P}{name}-webp/w{i:03d}.webp', 'WEBP', quality=78, method=6)
    print(f'{name}: done  {time.time()-t0:.0f}s', flush=True)

def mb(d):
    fs=[os.path.getsize(P+d+'/'+f) for f in os.listdir(P+d)]
    return sum(fs)/1048576, len(fs)
print()
for d in ['hero-white','hero-white-webp']+[n for c in COLOURS for n in (c[0],c[0]+'-webp')]:
    m,n=mb(d); print(f'{d:22} {n:3} files  {m:5.1f} MB')

import numpy as np

M_RGB2XYZ = np.array([[0.4124564,0.3575761,0.1804375],
                      [0.2126729,0.7151522,0.0721750],
                      [0.0193339,0.1191920,0.9503041]])
M_XYZ2RGB = np.linalg.inv(M_RGB2XYZ)
WP = np.array([0.95047,1.0,1.08883])
EPS, KAP = 216/24389, 24389/27

def srgb_to_lin(c):
    c=c/255.0
    return np.where(c<=0.04045, c/12.92, ((c+0.055)/1.055)**2.4)

def lin_to_srgb(c):
    c=np.clip(c,0,1)
    return np.where(c<=0.0031308, c*12.92, 1.055*(c**(1/2.4))-0.055)*255.0

def rgb2lab(rgb):
    lin=srgb_to_lin(rgb.astype(np.float64))
    xyz=lin @ M_RGB2XYZ.T
    r=xyz/WP
    f=np.where(r>EPS, np.cbrt(r), (KAP*r+16)/116)
    L=116*f[...,1]-16
    a=500*(f[...,0]-f[...,1])
    b=200*(f[...,1]-f[...,2])
    return np.stack([L,a,b],axis=-1)

def lab2rgb(lab):
    L,a,b=lab[...,0],lab[...,1],lab[...,2]
    fy=(L+16)/116; fx=fy+a/500; fz=fy-b/200
    def inv(f):
        f3=f**3
        return np.where(f3>EPS, f3, (116*f-16)/KAP)
    xyz=np.stack([inv(fx),inv(fy),inv(fz)],axis=-1)*WP
    return lin_to_srgb(xyz @ M_XYZ2RGB.T)

def hsv_sat_hue(rgb):
    mx=rgb.max(-1); mn=rgb.min(-1); d=mx-mn
    s=np.where(mx>0, d/np.maximum(mx,1e-6), 0)
    r,g,b=rgb[...,0],rgb[...,1],rgb[...,2]
    h=np.zeros_like(mx)
    m=(d>1e-6)
    idx=(mx==r)&m; h[idx]=(60*((g-b)[idx]/d[idx])+360)%360
    idx=(mx==g)&m; h[idx]=60*((b-r)[idx]/d[idx])+120
    idx=(mx==b)&m; h[idx]=60*((r-g)[idx]/d[idx])+240
    return s,h

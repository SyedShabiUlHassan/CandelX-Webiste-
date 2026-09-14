#!/usr/bin/env python3
"""Convert the catalogue photography to WebP.

The hero frames were already WebP and tiny; the catalogue photos were still the
raw PNG and JPEG that came out of the PDF extraction — 19.3 MB of a 29 MB build
(audit 2026-09-14, H-09). At quality 82 they come down by about 70%.

WHERE THE FILES GO.  build-catalogue.mjs wipes site/public/catalogue/img on
every run, so a .webp written there would not survive. This script writes into
site/.image-cache/ instead, mirroring the same relative paths, and the generator
copies them back in after it has copied the originals.

    node   scripts/build-catalogue.mjs      # copies the masters into public/
    python3 scripts/optimise-images.py      # fills the cache
    node   scripts/build-catalogue.mjs      # now emits .webp paths

After that first pass the cache persists and one generator run is enough.
Replaced a master photo?  Re-run this with --force.

The PNG/JPEG masters are never touched or deleted.
"""
import argparse, sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow is required:  python3 -m pip install Pillow")

ROOT = Path(__file__).resolve().parent.parent
IMG = ROOT / "site/public/catalogue/img"
CACHE = ROOT / "site/.image-cache"
EXTS = {".png", ".jpg", ".jpeg"}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--quality", type=int, default=82)
    ap.add_argument("--force", action="store_true")
    a = ap.parse_args()

    if not IMG.is_dir():
        sys.exit(f"not found: {IMG}\nRun `node scripts/build-catalogue.mjs` first.")

    src_bytes = out_bytes = 0
    made = kept = skipped = failed = 0
    worst = []

    for p in sorted(IMG.rglob("*")):
        if p.suffix.lower() not in EXTS or not p.is_file():
            continue
        rel = p.relative_to(IMG)
        webp = (CACHE / rel).with_suffix(".webp")
        s = p.stat().st_size

        if webp.exists() and not a.force:
            kept += 1
            src_bytes += s
            out_bytes += webp.stat().st_size
            continue

        webp.parent.mkdir(parents=True, exist_ok=True)
        try:
            im = Image.open(p)
            # Keep alpha where it exists; the mesh cut-outs rely on it.
            im = im.convert("RGBA" if "A" in im.getbands() else "RGB")
            im.save(webp, "WEBP", quality=a.quality, method=6)
        except Exception as e:  # noqa: BLE001 — report and carry on
            print(f"  FAILED {rel}: {e}")
            failed += 1
            continue

        o = webp.stat().st_size
        # A WebP bigger than its source helps nobody — drop it, keep the original.
        if o >= s:
            webp.unlink()
            skipped += 1
            src_bytes += s
            out_bytes += s
            continue

        src_bytes += s
        out_bytes += o
        made += 1
        worst.append((s - o, rel))

    worst.sort(reverse=True)
    mb = lambda b: b / 1048576
    print(f"converted {made}   cached {kept}   left as-is {skipped}   failed {failed}")
    if src_bytes:
        print(f"{mb(src_bytes):.1f} MB  ->  {mb(out_bytes):.1f} MB"
              f"   saved {mb(src_bytes - out_bytes):.1f} MB"
              f"  ({(1 - out_bytes / src_bytes) * 100:.0f}%)")
    if worst:
        print("\nbiggest savings:")
        for saved, rel in worst[:6]:
            print(f"  {saved/1024:7.0f} KB   {rel}")
    print(f"\ncache: {CACHE}")
    print("Re-run `node scripts/build-catalogue.mjs` to point the site at these.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

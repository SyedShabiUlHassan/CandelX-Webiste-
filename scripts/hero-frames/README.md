# Hero explode frames — how `site/public/hero/` is made

Source video: `Videos/red lid scroll.mp4` (720x1280, 6.0s, 24fps, 144 frames).
Master stills: `assets-src/frames-720-master/` (kept out of `public/` so they never ship).

The Mac has no ffmpeg/Homebrew; frames come out of AVFoundation via Swift, and all the
image work is numpy + Pillow. Nothing else needs installing.

## Pipeline

1. `seq.swift` — pull 144 stills from the mp4.
   `swiftc -O seq.swift -o seq && ./seq "<video>" <outDir> 720 0.68`
   Indexes by requested timestamp, NOT callback order — the async generator returns
   frames out of order and completion-order indexing scrambles the sequence.

2. `matte2.py` / `matte3.py` — separate the tray from the studio background.
   The backdrop is neutral (saturation 0.0) and horizontally uniform to ~1 luma, so the
   background of each row is read off the untouched margins, refined with a per-row cubic
   fit (catches the vignette), then keyed softly and un-premultiplied against that known
   background so edges carry no halo. A border flood-fill clears haze; the last 150 rows
   ramp to nothing so the floor reflection dies out instead of being chopped by the frame.

3. `produce.py` — crops to the sequence-wide bbox (y191-1276, x48-654), resizes to 560px
   wide, and writes three sets: original, composited-on-white, and a true cut-out.
   Only the on-white set is still used. ~16 min for 144 frames.

4. `recolour.py` — red lid -> brand teal. Works in CIELAB: keeps each pixel's lightness
   (so every highlight, shadow and perforation survives) and only rotates hue/chroma to
   the target. The lid is the sole saturated object, so nothing else is touched — the
   steel stays exactly neutral. `lid_weight_full` also catches the anti-aliased rim,
   without which a faint red outline survives around a teal lid.
   Red measured L 48.2 / C 32.9; brand teal #007ea7 is L 49.1 / C 33.1 — near-identical,
   so the swap costs no lightness or saturation.

5. `produce_colours.py` — writes the recoloured sets (jpg + webp).

## Shipping

Only `site/public/hero/f000..f143.webp` ships: 144 frames, 3.3 MB, teal lid, pure-white
background. The page uses `mix-blend-mode: multiply` so that white reads as transparent —
the dot grid shows through the tray and its mesh with no alpha mask to download. That
depends on the background staying EXACTLY 255; WebP q78 preserves it (verified).
Because it relies on multiply, this sequence only works on a white/very light ground.

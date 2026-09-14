import Foundation
import AVFoundation
import AppKit

// argv: <video> <outDir> <maxWidth> <quality>
let url     = URL(fileURLWithPath: CommandLine.arguments[1])
let outDir  = CommandLine.arguments[2]
let maxW    = CGFloat(Double(CommandLine.arguments[3])!)
let quality = Double(CommandLine.arguments[4])!

let asset = AVURLAsset(url: url)
guard let track = asset.tracks(withMediaType: .video).first else { exit(1) }
let fps = Double(track.nominalFrameRate)
let dur = CMTimeGetSeconds(asset.duration)
let total = Int((dur * fps).rounded(.down))

let gen = AVAssetImageGenerator(asset: asset)
gen.appliesPreferredTrackTransform = true
gen.requestedTimeToleranceBefore = CMTime(value: 1, timescale: Int32(fps * 4))
gen.requestedTimeToleranceAfter  = CMTime(value: 1, timescale: Int32(fps * 4))
gen.maximumSize = CGSize(width: maxW, height: maxW * 10)

try? FileManager.default.createDirectory(atPath: outDir, withIntermediateDirectories: true)

var times: [NSValue] = []
for i in 0..<total {
  times.append(NSValue(time: CMTime(seconds: Double(i) / fps, preferredTimescale: 600)))
}

let sem = DispatchSemaphore(value: 0)
let lock = NSLock()
var written = 0, failed = 0, done = 0
var seen = Set<Int>()

gen.generateCGImagesAsynchronously(forTimes: times) { requestedTime, image, _, result, err in
  // Index from the REQUESTED timestamp, not callback order — callbacks arrive out of order.
  let idx = Int((CMTimeGetSeconds(requestedTime) * fps).rounded())

  if result == .succeeded, let cg = image {
    let rep = NSBitmapImageRep(cgImage: cg)
    if let data = rep.representation(using: .jpeg, properties: [.compressionFactor: quality]) {
      try? data.write(to: URL(fileURLWithPath: String(format: "%@/f%03d.jpg", outDir, idx)))
      lock.lock(); written += 1; seen.insert(idx); lock.unlock()
    }
  } else {
    lock.lock(); failed += 1; lock.unlock()
    FileHandle.standardError.write("fail \(idx): \(err?.localizedDescription ?? "?")\n".data(using: .utf8)!)
  }
  lock.lock(); done += 1; let d = done; lock.unlock()
  if d == times.count { sem.signal() }
}

sem.wait()
let missing = (0..<total).filter { !seen.contains($0) }
print("expected:", total, "written:", written, "failed:", failed, "unique:", seen.count)
print("missing:", missing)

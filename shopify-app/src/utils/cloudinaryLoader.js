// Serve Cloudinary images straight from Cloudinary's CDN, resized to the width
// Next asks for. Skips the extra hop through Next's own image optimizer.
//
// The /photsWork/ images are tall full-page store screenshots shown with
// object-top, so only their top 1.5x-width slice is kept. Everything else
// (logos, laptop/phone mockups) is just resized, never cropped.
export default function cloudinaryLoader({ src, width, quality }) {
  if (!src.includes('res.cloudinary.com') || !src.includes('/upload/')) return src;
  const q = quality ? Math.min(quality, 60) : 60;
  const resize = src.includes('/photsWork/')
    ? `c_lfill,g_north,w_${width},h_${Math.round(width * 1.5)}`
    : `c_limit,w_${width}`;
  return src.replace(/\/upload\/(?:[^/]*\/)?(?=v\d+\/)/, `/upload/f_auto,q_${q},${resize}/`);
}

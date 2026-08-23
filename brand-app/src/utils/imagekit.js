const IK_URL = import.meta.env.VITE_IMAGEKIT_URL || '';

/**
 * Resolves image URL using ImageKit CDN endpoint if available.
 * @param {string} path - Local path (e.g. '/team/adi.png') or full HTTP URL
 * @param {string} transform - Optional ImageKit transformation query (e.g. 'w-600,q-80')
 * @returns {string} Fully resolved image URL
 */
export const getIkUrl = (path, transform = '') => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  if (IK_URL) {
    const trParam = transform ? `?tr=${transform}` : '';
    const baseUrl = IK_URL.endsWith('/') ? IK_URL.slice(0, -1) : IK_URL;
    return `${baseUrl}/${cleanPath}${trParam}`;
  }
  return path.startsWith('/') ? path : `/${path}`;
};

// Canonical origin of the site. scalomatrix.com redirects to www, so www is canonical.
// Override with NEXT_PUBLIC_SITE_URL if the domain ever changes.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.scalomatrix.com').replace(/\/$/, '');

import { useEffect } from 'react';

/**
 * ScrollToTop component scrolls the viewport to the top (0, 0)
 * on initial mount or when specific triggers change.
 * Useful for SPA navigation or initial rendering.
 */
export default function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant', // instant scroll to top on mount
    });
  }, []);

  return null;
}

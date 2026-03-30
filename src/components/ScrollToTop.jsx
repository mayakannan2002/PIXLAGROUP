import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Force the browser to stop remembering scroll positions globally
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. The "Refresh" Snap
    // Using a timeout of 0 ensures the scroll happens AFTER the new page renders
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" // Use "instant" to mimic a real page refresh
      });
    }, 0);

    // 3. Extra safety for images/slow assets
    const handleLoad = () => window.scrollTo(0, 0);
    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('load', handleLoad);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
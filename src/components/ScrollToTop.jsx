import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Handle Route Changes (clicking tabs/links)
    window.scrollTo(0, 0);

    // 2. Handle Page Refresh
    // This forces the browser to forget the previous scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Extra safety for slow-loading content
    const handleLoad = () => window.scrollTo(0, 0);
    window.addEventListener('load', handleLoad);

    return () => window.removeEventListener('load', handleLoad);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
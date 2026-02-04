import { useState, useEffect } from "react";

interface ScrollPosition {
  scrollY: number;
  collapseProgress: number; // 0 = fully expanded, 1 = fully collapsed
  isCollapsed: boolean;
}

const COLLAPSE_THRESHOLD = 100; // Start collapsing after 100px scroll
const FULL_COLLAPSE_THRESHOLD = 300; // Fully collapsed at 300px scroll

export function useScrollPosition(): ScrollPosition {
  const [scrollY, setScrollY] = useState(0);
  const [collapseProgress, setCollapseProgress] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Calculate collapse progress (0 to 1)
      const progress = Math.min(
        Math.max((currentScrollY - COLLAPSE_THRESHOLD) / (FULL_COLLAPSE_THRESHOLD - COLLAPSE_THRESHOLD), 0),
        1
      );
      setCollapseProgress(progress);
      setIsCollapsed(progress > 0.5);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    // Initial calculation
    updateScrollPosition();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrollY, collapseProgress, isCollapsed };
}

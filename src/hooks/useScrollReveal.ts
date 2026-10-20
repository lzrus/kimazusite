import { useEffect } from 'react';

/**
 * Hook to automatically observe elements with [data-reveal] or .reveal-init
 * and apply .is-revealed when they enter the viewport.
 * Automatically recalculates when currentTab changes or DOM updates.
 */
export function useScrollReveal(dependencies: unknown[] = []) {
  useEffect(() => {
    // If browser doesn't support IntersectionObserver or user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal], .reveal-init');
    
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            
            // Extract custom delay if defined via data-reveal-delay
            const delay = target.getAttribute('data-reveal-delay');
            if (delay) {
              target.style.transitionDelay = `${delay}ms`;
            }

            target.classList.add('is-revealed');
            obs.unobserve(target); // Reveal once
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -60px 0px', // trigger slightly before it hits bottom of viewport
        threshold: 0.12,
      }
    );

    elements.forEach((el) => {
      // Check if already in viewport on mount (e.g. hero items)
      const rect = el.getBoundingClientRect();
      const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (inViewport && rect.top < window.innerHeight * 0.85) {
        const delay = el.getAttribute('data-reveal-delay');
        if (delay) {
          el.style.transitionDelay = `${delay}ms`;
        }
        el.classList.add('is-revealed');
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, dependencies);
}

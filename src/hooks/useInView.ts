import { useEffect, useMemo, useState, type RefObject } from "react";

type UseInViewOptions = {
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

export function useInView(
  target: RefObject<Element | null>,
  { rootMargin = "0px 0px -12% 0px", threshold = 0.12, once = true }: UseInViewOptions = {}
) {
  const [isInView, setIsInView] = useState(false);

  const observerOptions = useMemo(
    () => ({ root: null, rootMargin, threshold }),
    [rootMargin, threshold]
  );

  useEffect(() => {
    const el = target.current;
    if (!el) return;
    if (isInView && once) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      if (entry.isIntersecting) {
        setIsInView(true);
        if (once) observer.disconnect();
        return;
      }

      if (!once) setIsInView(false);
    }, observerOptions);

    observer.observe(el);
    return () => observer.disconnect();
  }, [observerOptions, once, target, isInView]);

  return isInView;
}



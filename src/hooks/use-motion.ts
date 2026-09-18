import { useCallback, useEffect, useRef, useState } from "react";

/** True when the visitor asked for reduced motion. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/** Counts from 0 to `to` once the element enters the viewport. */
export function useCountUp(to: number, duration = 1400, decimals = 0) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (reduced || typeof IntersectionObserver === "undefined") {
      setValue(to);
      return;
    }
    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(to * eased);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration, reduced]);

  return { ref, display: value.toFixed(decimals) };
}

/**
 * Auto-advancing horizontal rail. Scrolls one card at a time, pauses on
 * hover / touch / drag, and loops back to the start at the end.
 */
export function useAutoRail(count: number, interval = 3600) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();

  const scrollTo = useCallback((next: number) => {
    const node = ref.current;
    if (!node) return;
    const card = node.children[0] as HTMLElement | undefined;
    if (!card) return;
    const step = card.offsetWidth + 20;
    const target = Math.min(next, count - 1);
    node.scrollTo({ left: step * Math.max(0, target), behavior: "smooth" });
    setIndex(Math.max(0, target));
  }, [count]);

  // keep dots in sync with manual scrolling / dragging
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onScroll = () => {
      const card = node.children[0] as HTMLElement | undefined;
      if (!card) return;
      const step = card.offsetWidth + 20;
      setIndex(Math.round(node.scrollLeft / step));
    };
    node.addEventListener("scroll", onScroll, { passive: true });
    return () => node.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (reduced || paused || count < 2) return;
    const node = ref.current;
    if (!node) return;
    const id = window.setInterval(() => {
      const card = node.children[0] as HTMLElement | undefined;
      if (!card) return;
      const step = card.offsetWidth + 20;
      const atEnd = node.scrollLeft + node.clientWidth >= node.scrollWidth - 8;
      const next = atEnd ? 0 : Math.round(node.scrollLeft / step) + 1;
      node.scrollTo({ left: step * next, behavior: "smooth" });
      setIndex(next);
    }, interval);
    return () => window.clearInterval(id);
  }, [reduced, paused, count, interval]);

  const pauseHandlers = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocusCapture: () => setPaused(true),
    onBlurCapture: () => setPaused(false),
    onTouchStart: () => setPaused(true),
    onTouchEnd: () => setPaused(false),
  };

  return { ref, index, paused, scrollTo, pauseHandlers, next: () => scrollTo(index + 1), prev: () => scrollTo(index - 1) };
}

/** Subtle cursor-follow tilt for a framed element (desktop pointers only). */
export function useTilt(max = 6) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reduced) return;
    if (window.matchMedia && !window.matchMedia("(hover: hover)").matches) return;

    const onMove = (e: PointerEvent) => {
      const r = node.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      node.style.transform = `perspective(1000px) rotateY(${x * max}deg) rotateX(${-y * max}deg)`;
    };
    const reset = () => {
      node.style.transform = "perspective(1000px)";
    };
    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", reset);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", reset);
    };
  }, [max, reduced]);

  return ref;
}

/** Scroll-linked parallax offset in pixels for a background layer. */
export function useParallax(strength = 0.18) {
  const [offset, setOffset] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(window.scrollY * strength));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [strength, reduced]);

  return offset;
}

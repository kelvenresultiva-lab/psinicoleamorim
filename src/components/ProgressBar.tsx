"use client";

import { useEffect, useRef, useState } from "react";

const ANIMATION_DURATION_MS = 1400;

export default function ProgressBar({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const start = performance.now();
    let frameId: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / ANIMATION_DURATION_MS, 1);
      setDisplayValue(Math.round(progress * value));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [visible, value]);

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-serif text-lg font-semibold text-ink">{label}</span>
        <span className="font-heebo text-sm text-gold-bright">{displayValue}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-surface">
        <div
          className="h-full rounded-full bg-gold-bright transition-[width] duration-[1400ms] ease-out"
          style={{ width: `${visible ? value : 0}%` }}
        />
      </div>
    </div>
  );
}

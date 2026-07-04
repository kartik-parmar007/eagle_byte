"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  x = 0,
  duration = 0.7,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const ease = "cubic-bezier(0.22, 1, 0.36, 1)";
  return (
    <div
      ref={ref}
      data-reveal=""
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : `translate(${x}px, ${y}px)`,
        transition: `opacity ${duration}s ${ease} ${delay}s, transform ${duration}s ${ease} ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

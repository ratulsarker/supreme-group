"use client";

import { useEffect, useRef, useState } from "react";

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

function AnimatedNumber({ target, duration = 2000, prefix = "", suffix = "" }: {
  target: number; duration?: number; prefix?: string; suffix?: string;
}) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  const formatted = current.toLocaleString();

  return (
    <div ref={ref} style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: "2.2rem",
      fontWeight: 700,
      color: "#0A1628",
      lineHeight: 1,
    }}>
      {prefix}{formatted}{suffix}
    </div>
  );
}

const stats = [
  { target: 70, prefix: "$", suffix: "M+", label: "Annual Revenue" },
  { target: 2500, prefix: "", suffix: "+", label: "Skilled Workers" },
  { target: 60000, prefix: "", suffix: "+", label: "Daily Production" },
  { target: 16, prefix: "", suffix: "+", label: "Years on Market" },
];

export default function CountUpStats() {
  return (
    <section style={{ background: "#C9A84C", padding: "36px 0" }}>
      <div className="container">
        <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}>
          {stats.map((item, i) => (
            <div key={item.label} style={{
              textAlign: "center",
              padding: "8px 24px",
              borderRight: i < 3 ? "1px solid rgba(10,22,40,0.15)" : "none",
            }}>
              <AnimatedNumber target={item.target} prefix={item.prefix} suffix={item.suffix} />
              <div style={{
                fontSize: "0.68rem",
                color: "rgba(10,22,40,0.65)",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginTop: "6px",
              }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:600px){.stats-grid{grid-template-columns:repeat(2,1fr)!important;} .stats-grid > div{border-right:none!important; border-bottom:1px solid rgba(10,22,40,0.1); padding:16px!important;}}`}</style>
    </section>
  );
}

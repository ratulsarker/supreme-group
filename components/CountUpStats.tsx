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
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  const formatted = current.toLocaleString();

  return (
    <div ref={ref} style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#0A1628" }}>
      {prefix}{formatted}{suffix}
    </div>
  );
}

const stats = [
  { target: 70, prefix: "$", suffix: "M+", label: "ANNUAL REVENUE" },
  { target: 2500, prefix: "", suffix: "+", label: "SKILLED WORKERS" },
  { target: 60000, prefix: "", suffix: "+", label: "DAILY PRODUCTION" },
  { target: 16, prefix: "", suffix: "+", label: "YEARS ON MARKET" },
];

export default function CountUpStats() {
  return (
    <section style={{ background: "#C9A84C", padding: "28px 0" }}>
      <div className="container">
        <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {stats.map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <AnimatedNumber target={item.target} prefix={item.prefix} suffix={item.suffix} />
              <div style={{ fontSize: "0.7rem", color: "#0A1628", fontWeight: 700, letterSpacing: "2px", marginTop: "2px" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:600px){.stats-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </section>
  );
}

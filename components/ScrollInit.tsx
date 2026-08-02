"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Opt in to the hidden-until-revealed state only once JS is running, so a
    // script failure can never leave a page blank.
    document.documentElement.classList.add("js-reveal");

    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => observer.observe(el));

    // Safety net: anything still hidden after a moment (observer never fired,
    // element taller than the viewport, odd browser behaviour) is shown anyway.
    const failsafe = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("visible"));
    }, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
    // Re-run on every route change: the root layout does not remount during
    // client-side navigation, so a one-shot effect would only ever observe the
    // first page a visitor landed on, leaving later pages invisible.
  }, [pathname]);

  return null;
}

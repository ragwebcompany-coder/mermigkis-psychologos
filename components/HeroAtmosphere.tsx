"use client";

import { useEffect, useRef } from "react";

function prefersReduced() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Moonlight halo behind the hero. Drifts on its own and leans a little
 * towards the pointer, so the night sky feels alive rather than printed.
 */
export function HeroHalo() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced()) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let frame = 0;
    let tx = 0;
    let ty = 0;

    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 46;
      ty = (e.clientY / window.innerHeight - 0.5) * 30;
      if (!frame) {
        frame = requestAnimationFrame(() => {
          frame = 0;
          el.style.setProperty("--px", `${tx}px`);
          el.style.setProperty("--py", `${ty}px`);
        });
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/3 h-[620px] w-[620px] transition-transform duration-[900ms] ease-out sm:h-[820px] sm:w-[820px]"
      style={{
        transform:
          "translate(calc(-50% + var(--px, 0px)), calc(-33% + var(--py, 0px)))",
      }}
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(207,224,244,0.12)_0%,transparent_62%)] motion-safe:animate-[drift_15s_ease-in-out_infinite]" />
    </div>
  );
}

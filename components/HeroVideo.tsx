"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Night-sky loop behind the hero. Fades in only once it can actually play,
 * so the poster never flashes, and stays a still image for anyone who has
 * asked for reduced motion or is on a data-saving connection.
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [ready, setReady] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;

    if (reduced || conn?.saveData) {
      setStill(true);
      return;
    }

    const el = ref.current;
    if (!el) return;
    if (el.readyState >= 3) setReady(true);
    const onReady = () => setReady(true);
    el.addEventListener("canplay", onReady);
    void el.play().catch(() => setStill(true));
    return () => el.removeEventListener("canplay", onReady);
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {still ? (
        <img
          src="/video/night-sky-poster.jpg"
          alt=""
          className="h-full w-full scale-105 object-cover blur-[2px]"
          style={{ objectPosition: "75% 50%" }}
        />
      ) : (
        <video
          ref={ref}
          className={`h-full w-full scale-105 object-cover blur-[2px] transition-opacity duration-1000 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition: "75% 50%" }}
          poster="/video/night-sky-poster.jpg"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
        >
          <source src="/video/night-sky.webm" type="video/webm" />
          <source src="/video/night-sky.mp4" type="video/mp4" />
        </video>
      )}

      {/* Keep the palette ours and the type readable over the footage. */}
      <div className="absolute inset-0 bg-midnight-950/28" />
      <div className="nocturne absolute inset-0 opacity-45 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_45%,rgba(5,11,21,0.7)_0%,rgba(5,11,21,0.25)_55%,transparent_78%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-midnight-850" />
    </div>
  );
}

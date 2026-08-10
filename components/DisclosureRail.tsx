"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const TICKS = [
  { id: "setup", label: "Setup", pos: 0.12 },
  { id: "disclosure", label: "Disclosure", pos: 0.5 },
  { id: "aftermath", label: "Aftermath", pos: 0.88 },
] as const;

export default function DisclosureRail() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string | null>("setup");
  const [reduced, setReduced] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Traveling marker + progress bar, driven by scroll position.
  useEffect(() => {
    if (reduced) return;
    const compute = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setProgress(p);
      rafRef.current = null;
    };
    const onScroll = () => {
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(compute);
      }
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [reduced, pathname]);

  // Active tick, driven by IntersectionObserver over sentinels in <main>.
  useEffect(() => {
    if (reduced) return;
    const main = document.querySelector("main");
    if (!main) return;
    if (getComputedStyle(main).position === "static") {
      main.style.position = "relative";
    }
    const sentinels = TICKS.map((t) => {
      const el = document.createElement("div");
      el.dataset.tick = t.id;
      el.setAttribute("aria-hidden", "true");
      el.style.cssText =
        "position:absolute;left:0;width:1px;height:1px;pointer-events:none;";
      el.style.top = `${t.pos * 100}%`;
      main.appendChild(el);
      return el;
    });
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.tick ?? null;
            if (id) setActive(id);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    sentinels.forEach((s) => io.observe(s));
    return () => {
      io.disconnect();
      sentinels.forEach((s) => s.remove());
    };
  }, [reduced, pathname]);

  const bandTop = (pos: number) =>
    `calc(${pos} * (100vh - 16rem) + 8rem)`;

  return (
    <>
      <div className="rail" aria-hidden="true">
        <div className="rail__line" />
        {TICKS.map((t) => (
          <div
            key={t.id}
            className="rail__tick"
            data-active={!reduced && active === t.id}
            style={{ top: bandTop(t.pos) }}
          >
            <span className="rail__tick-label">{t.label}</span>
          </div>
        ))}
        {!reduced ? (
          <div className="rail__marker" style={{ top: bandTop(progress) }} />
        ) : null}
      </div>

      <div className="railbar" aria-hidden="true">
        <div
          className="railbar__fill"
          style={{ width: reduced ? "100%" : `${progress * 100}%` }}
        />
      </div>
    </>
  );
}

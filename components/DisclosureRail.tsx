"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Tick = { id: string; label: string; pos: number };

function slugify(text: string) {
  const slug = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "section";
}

function maxScroll() {
  return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
}

function headingTargetY(el: HTMLElement) {
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  return el.getBoundingClientRect().top + window.scrollY - margin;
}

function progressForY(y: number) {
  const max = maxScroll();
  if (max <= 0) return 0;
  return Math.min(1, Math.max(0, y / max));
}

function currentProgress() {
  return progressForY(window.scrollY);
}

function collectTicks(): Tick[] {
  const main = document.querySelector("main");
  if (!main) return [];
  const used = new Set<string>();
  return [...main.querySelectorAll("h2")].map((heading) => {
    const label = heading.textContent?.trim() ?? "";
    let id = heading.id || slugify(label);
    const base = id;
    let n = 2;
    while (used.has(id)) {
      id = `${base}-${n++}`;
    }
    used.add(id);
    heading.id = id;
    return { id, label, pos: progressForY(headingTargetY(heading)) };
  });
}

export default function DisclosureRail() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [ticks, setTicks] = useState<Tick[]>([]);
  const [active, setActive] = useState<string | null>(null);
  const [reduced, setReduced] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const measure = () => {
      const next = collectTicks();
      setTicks(next);
      setProgress(currentProgress());
    };
    measure();
    const main = document.querySelector("main");
    const ro = main ? new ResizeObserver(measure) : null;
    if (main && ro) ro.observe(main);
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, [pathname]);

  useEffect(() => {
    const compute = () => {
      const p = currentProgress();
      setProgress(p);
      if (ticks.length > 0) {
        let current = ticks[0];
        for (const tick of ticks) {
          if (p + 0.001 >= tick.pos) current = tick;
        }
        setActive(current.id);
      }
      rafRef.current = null;
    };
    const onScroll = () => {
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(compute);
      }
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [ticks, pathname]);

  const railY = (pos: number) =>
    `calc(${0.08 + pos * 0.84} * (100vh - 16rem) + 8rem)`;

  const jumpTo = (tick: Tick) => {
    const el = document.getElementById(tick.id);
    if (!el) return;
    setActive(tick.id);
    setProgress(tick.pos);
    el.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <>
      <nav className="rail" aria-label="On this page">
        <div className="rail__line" />
        {ticks.map((tick) => (
          <button
            key={tick.id}
            type="button"
            className="rail__tick"
            data-active={active === tick.id}
            style={{ top: railY(tick.pos) }}
            title={tick.label}
            onClick={() => jumpTo(tick)}
          >
            <span className="rail__tick-label">{tick.label}</span>
          </button>
        ))}
        {!reduced ? (
          <div className="rail__marker" style={{ top: railY(progress) }} />
        ) : null}
      </nav>

      <div className="railbar" aria-hidden="true">
        <div
          className="railbar__fill"
          style={{ width: reduced ? "100%" : `${progress * 100}%` }}
        />
      </div>
    </>
  );
}

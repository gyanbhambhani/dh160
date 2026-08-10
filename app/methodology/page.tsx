import type { Metadata } from "next";
import { methodology } from "@/content/methodology";

export const metadata: Metadata = {
  title: methodology.meta.title,
  description: methodology.meta.description,
};

export default function MethodologyPage() {
  return (
    <article>
      <header className="mb-10">
        <p className="eyebrow mb-4">{methodology.eyebrow}</p>
        <h1 className="font-display text-4xl sm:text-5xl">{methodology.title}</h1>
        <p className="measure mt-5" style={{ color: "var(--color-ash)" }}>
          {methodology.intro}
        </p>
      </header>

      <ol className="mt-8 space-y-8">
        {methodology.steps.map((step, i) => (
          <li key={step.title} className="measure flex gap-5">
            <span
              className="mono pt-1 text-sm tabular-nums"
              style={{ color: "var(--color-dusk)" }}
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="font-display text-xl">{step.title}</h2>
              <p className="mt-1">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <section
        className="measure mt-14 rounded-sm p-6"
        style={{ background: "var(--color-veil)" }}
      >
        <h2 className="eyebrow mb-3" style={{ color: "var(--color-dusk)" }}>
          {methodology.notDoing.heading}
        </h2>
        <p>{methodology.notDoing.body}</p>
      </section>
    </article>
  );
}

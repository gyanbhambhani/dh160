import type { Metadata } from "next";
import Link from "next/link";
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

      <section className="mt-16">
        <h2 className="font-display measure text-2xl sm:text-3xl">
          {methodology.distantToClose.heading}
        </h2>
        <div className="prose-body measure mt-3">
          <p>{methodology.distantToClose.body}</p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display measure text-2xl sm:text-3xl">
          {methodology.expected.heading}
        </h2>
        <p className="measure mt-3" style={{ color: "var(--color-ash)" }}>
          {methodology.expected.intro}{" "}
          <Link href="/findings">See Findings and Analysis</Link>.
        </p>
        <ul className="measure mt-5 space-y-4">
          {methodology.expected.items.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span
                className="mono pt-1 text-sm"
                style={{ color: "var(--color-signal)" }}
                aria-hidden="true"
              >
                E{i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-display measure text-2xl sm:text-3xl">
          {methodology.reflection.heading}
        </h2>
        <div className="prose-body measure mt-3">
          <p>{methodology.reflection.body}</p>
        </div>
        <p className="measure mt-3">
          <Link href="/reflection">Read the Critical Reflection</Link>.
        </p>
      </section>

      <section
        className="measure mt-16 rounded-sm p-6"
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

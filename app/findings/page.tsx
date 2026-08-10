import type { Metadata } from "next";
import { findings } from "@/content/findings";
import FigurePlaceholder from "@/components/FigurePlaceholder";

export const metadata: Metadata = {
  title: findings.meta.title,
  description: findings.meta.description,
};

export default function FindingsPage() {
  return (
    <article>
      <header className="mb-10">
        <p className="eyebrow mb-4">{findings.eyebrow}</p>
        <h1 className="font-display text-4xl sm:text-5xl">{findings.title}</h1>
      </header>

      <p
        className="mono mb-14 inline-block rounded-sm px-3 py-2 text-[0.7rem] uppercase"
        style={{
          background: "var(--color-veil)",
          color: "var(--color-signal)",
        }}
        role="status"
      >
        {findings.banner}
      </p>

      {findings.expectations.map((exp) => (
        <section key={exp.label} className="mt-14 first:mt-0">
          <p className="eyebrow mb-3">{exp.label}</p>
          <h2 className="font-display measure text-2xl sm:text-3xl">
            {exp.heading}
          </h2>
          <div className="prose-body measure mt-3">
            <p>{exp.body}</p>
          </div>
          <FigurePlaceholder caption={exp.figureCaption} />
        </section>
      ))}

      <section className="mt-16 border-t border-veil pt-10">
        <p className="measure" style={{ color: "var(--color-ash)" }}>
          {findings.closeReading}
        </p>
      </section>
    </article>
  );
}

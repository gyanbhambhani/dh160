import type { Metadata } from "next";
import { findings } from "@/content/findings";
import DataTable from "@/components/DataTable";
import Figure from "@/components/Figure";

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

      {findings.sections.map((section) => (
        <section key={section.heading} className="mt-16 first:mt-0">
          {section.eyebrow ? (
            <p className="eyebrow mb-3">{section.eyebrow}</p>
          ) : null}
          <h2 className="font-display measure text-2xl sm:text-3xl">
            {section.heading}
          </h2>
          <div className="prose-body measure mt-3">
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {section.table ? (
            <DataTable
              caption={section.table.caption}
              headers={section.table.headers}
              rows={section.table.rows}
            />
          ) : null}
          {section.figure ? (
            <Figure
              spec={section.figure}
              wide={section.figure.number === 6 || section.figure.number === 8}
            />
          ) : null}
        </section>
      ))}
    </article>
  );
}

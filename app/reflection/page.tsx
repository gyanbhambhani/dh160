import type { Metadata } from "next";
import { reflection } from "@/content/reflection";

export const metadata: Metadata = {
  title: reflection.meta.title,
  description: reflection.meta.description,
};

export default function ReflectionPage() {
  return (
    <article>
      <header className="mb-12">
        <p className="eyebrow mb-4">{reflection.eyebrow}</p>
        <h1 className="font-display text-4xl sm:text-5xl">{reflection.title}</h1>
      </header>

      {reflection.sections.map((section) => (
        <section key={section.heading} className="mt-14 first:mt-0">
          <h2 className="font-display measure text-2xl sm:text-3xl">
            {section.heading}
          </h2>
          <div className="prose-body measure mt-3">
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}

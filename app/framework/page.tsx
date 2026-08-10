import type { Metadata } from "next";
import { framework } from "@/content/framework";

export const metadata: Metadata = {
  title: framework.meta.title,
  description: framework.meta.description,
};

export default function FrameworkPage() {
  return (
    <article>
      <header className="mb-14">
        <p className="eyebrow mb-4">{framework.eyebrow}</p>
        <h1 className="font-display text-4xl sm:text-5xl">{framework.title}</h1>
      </header>

      {framework.subsections.map((section) => (
        <section key={section.heading} className="mt-12 first:mt-0">
          <h2 className="font-display mb-4 text-2xl sm:text-3xl measure">
            {section.heading}
          </h2>
          <div className="prose-body measure">
            {section.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}

import type { Metadata } from "next";
import { reflection } from "@/content/reflection";

export const metadata: Metadata = {
  title: reflection.meta.title,
  description: reflection.meta.description,
};

export default function ReflectionPage() {
  return (
    <article>
      <header className="mb-8">
        <p className="eyebrow mb-4">{reflection.eyebrow}</p>
        <h1 className="font-display text-4xl sm:text-5xl">{reflection.title}</h1>
      </header>

      <p className="measure italic" style={{ color: "var(--color-ash)" }}>
        {reflection.scopeNote}
      </p>

      <div className="prose-body measure mt-8">
        <p>{reflection.summary}</p>
      </div>
    </article>
  );
}

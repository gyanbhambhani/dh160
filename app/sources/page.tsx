import type { Metadata } from "next";
import { sources } from "@/content/sources";
import SourceList from "@/components/SourceList";

export const metadata: Metadata = {
  title: sources.meta.title,
  description: sources.meta.description,
};

export default function SourcesPage() {
  return (
    <article>
      <header className="mb-12">
        <p className="eyebrow mb-4">{sources.eyebrow}</p>
        <h1 className="font-display text-4xl sm:text-5xl">{sources.title}</h1>
      </header>

      <SourceList items={sources.items} />
    </article>
  );
}

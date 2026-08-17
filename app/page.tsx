import type { Metadata } from "next";
import Link from "next/link";
import { home } from "@/content/home";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: home.meta.title,
  description: home.meta.description,
};

export default function HomePage() {
  return (
    <article>
      <section className="mb-16">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl">
          {home.hero.title}
        </h1>
        <div className="mt-8">
          <PullQuote>{home.hero.quote}</PullQuote>
        </div>
      </section>

      <div className="prose-body measure">
        {home.essay.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {home.sections.map((section) => (
        <section key={section.heading} className="mt-14">
          <h2 className="font-display mb-4 text-2xl sm:text-3xl">
            {section.heading}
          </h2>
          <div className="prose-body measure">
            {section.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      ))}

      <nav aria-label="Sections" className="mt-20 border-t border-veil pt-10">
        <p className="eyebrow mb-6">Read on</p>
        <ul className="space-y-4">
          {home.cards.map((card) => (
            <li key={card.href} className="measure">
              <Link href={card.href} className="no-underline">
                <span
                  className="font-display text-xl"
                  style={{ color: "var(--color-dusk)" }}
                >
                  {card.label}
                </span>
              </Link>
              <span style={{ color: "var(--color-ash)" }}>: {card.desc}</span>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
}

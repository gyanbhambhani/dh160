import type { Metadata } from "next";
import Link from "next/link";
import { methodology } from "@/content/methodology";
import Figure from "@/components/Figure";

export const metadata: Metadata = {
  title: methodology.meta.title,
  description: methodology.meta.description,
};

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="measure mt-5"
      style={{
        borderLeft: "1px solid var(--color-dusk)",
        paddingLeft: "1rem",
      }}
    >
      <span className="eyebrow" style={{ color: "var(--color-dusk)" }}>
        Note
      </span>
      <p className="mt-1 text-[0.95rem]" style={{ color: "var(--color-ash)" }}>
        {children}
      </p>
    </div>
  );
}

export default function MethodologyPage() {
  return (
    <article>
      <header className="mb-12">
        <p className="eyebrow mb-4">{methodology.eyebrow}</p>
        <h1 className="font-display text-4xl sm:text-5xl">{methodology.title}</h1>
      </header>

      <section>
        <h2 className="font-display measure text-2xl sm:text-3xl">
          {methodology.corpus.heading}
        </h2>
        <div className="prose-body measure mt-3">
          {methodology.corpus.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <Figure spec={methodology.corpus.figure} />
      </section>

      <section className="mt-16">
        <h2 className="font-display measure text-2xl sm:text-3xl">
          {methodology.ethics.heading}
        </h2>
        <div className="prose-body measure mt-3">
          {methodology.ethics.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display measure text-2xl sm:text-3xl">
          {methodology.approach.heading}
        </h2>
        <div className="prose-body measure mt-3">
          <p>{methodology.approach.intro}</p>
        </div>

        <div className="mt-8 space-y-14">
          {methodology.approach.methods.map((method) => (
            <div key={method.name}>
              <h3 className="font-display measure text-xl">{method.name}</h3>
              <p className="measure mt-3">{method.body}</p>
              {method.note ? <Note>{method.note}</Note> : null}
              {method.figure ? <Figure spec={method.figure} /> : null}
            </div>
          ))}
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
          {methodology.neutrality.heading}
        </h2>
        <div className="prose-body measure mt-3">
          {methodology.neutrality.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <p className="measure mt-3">
          <Link href="/reflection">Read the Critical Reflection</Link>.
        </p>
      </section>
    </article>
  );
}

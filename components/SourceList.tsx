import type { Source } from "@/content/sources";

export default function SourceList({ items }: { items: readonly Source[] }) {
  return (
    <ul className="space-y-6">
      {items.map((s, i) => (
        <li
          key={i}
          className="max-w-[68ch]"
          style={{ paddingLeft: "1.6em", textIndent: "-1.6em" }}
        >
          <span>{s.authors}</span>
          {s.year ? <span> ({s.year}). </span> : <span> </span>}
          {s.title ? (
            <span style={s.placeholder ? { color: "var(--color-ash)" } : undefined}>
              {s.title}{" "}
            </span>
          ) : null}
          {s.italicTitle ? <em>{s.italicTitle} </em> : null}
          {s.detail ? <span>{s.detail} </span> : null}
          {s.href ? (
            <a href={s.href} target="_blank" rel="noopener noreferrer">
              {s.href}
            </a>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

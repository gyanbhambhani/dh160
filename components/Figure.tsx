import type { FigureSpec } from "@/content/figures";

export default function Figure({
  spec,
  wide = false,
}: {
  spec: FigureSpec;
  wide?: boolean;
}) {
  return (
    <figure className={`project-figure my-10 ${wide ? "project-figure--wide" : ""}`}>
      <img
        src={spec.src}
        alt={spec.alt}
        width={spec.width}
        height={spec.height}
      />
      <figcaption>
        <span className="eyebrow" style={{ color: "var(--color-signal)" }}>
          Figure {spec.number}
        </span>
        <p className="mt-2">{spec.caption}</p>
      </figcaption>
    </figure>
  );
}

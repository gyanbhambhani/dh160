export default function FigurePlaceholder({ caption }: { caption?: string }) {
  return (
    <figure className="my-8">
      <div
        className="flex min-h-52 items-center justify-center rounded-sm border border-dashed p-8"
        style={{
          background: "var(--color-veil)",
          borderColor: "color-mix(in srgb, var(--color-ash) 45%, transparent)",
        }}
        role="img"
        aria-label={caption ? `Figure placeholder: ${caption}` : "Figure placeholder"}
      >
        <span className="eyebrow" style={{ color: "var(--color-ash)" }}>
          Figure pending
        </span>
      </div>
      {caption ? (
        <figcaption
          className="mono mt-3 text-[0.7rem] uppercase"
          style={{ color: "var(--color-ash)" }}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

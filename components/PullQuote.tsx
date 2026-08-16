export default function PullQuote({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      {label ? <p className="eyebrow mb-6">{label}</p> : null}
      <blockquote className="font-display text-3xl sm:text-4xl md:text-5xl">
        {children}
      </blockquote>
    </div>
  );
}

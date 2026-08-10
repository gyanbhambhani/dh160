export default function PullQuote({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="eyebrow mb-6">{label}</p>
      <blockquote className="font-display text-3xl sm:text-4xl md:text-5xl">
        {children}
      </blockquote>
    </div>
  );
}

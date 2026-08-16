import Byline from "@/components/Byline";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-veil/70">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <Byline />
        <p
          className="mt-3 max-w-[68ch] text-sm"
          style={{ color: "var(--color-ash)" }}
        >
          Post text is paraphrased from public Reddit submissions. Usernames are
          not reproduced.
        </p>
      </div>
    </footer>
  );
}

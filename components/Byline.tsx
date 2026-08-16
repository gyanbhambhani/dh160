import { site } from "@/content/site";

export default function Byline() {
  const id = site.studentId ? ` · ${site.studentId}` : "";
  return (
    <p className="eyebrow">
      {site.author}
      {id} · {site.course} · {site.term}
    </p>
  );
}

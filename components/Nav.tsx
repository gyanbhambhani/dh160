"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

const routes = [
  { label: "Home", href: "/" },
  { label: "Theoretical Framework", href: "/framework" },
  { label: "Methodology", href: "/methodology" },
  { label: "Findings and Analysis", href: "/findings" },
  { label: "Critical Reflection", href: "/reflection" },
  { label: "Sources", href: "/sources" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-veil bg-paper/95">
      <div className="mx-auto flex max-w-5xl flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-5 pt-4 sm:px-8">
        <p className="font-display text-lg" style={{ color: "var(--color-ink)" }}>
          {site.author}
        </p>
        <p className="eyebrow">
          {site.studentId} · {site.course} · {site.term}
        </p>
      </div>
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-5 gap-y-2 px-5 pt-3 pb-4 sm:px-8"
      >
        {routes.map((route) => {
          const active = isActive(pathname, route.href);
          return (
            <Link
              key={route.href}
              href={route.href}
              aria-current={active ? "page" : undefined}
              className="mono text-[0.72rem] uppercase no-underline transition-colors"
              style={{
                color: active ? "var(--color-dusk)" : "var(--color-ash)",
                borderBottom: active
                  ? "1px solid var(--color-dusk)"
                  : "1px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {route.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

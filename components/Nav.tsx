"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-5 gap-y-2 px-5 py-4 sm:px-8"
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

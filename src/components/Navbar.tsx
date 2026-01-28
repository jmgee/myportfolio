"use client";

import Container from "./Container";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className="
        fixed top-0 z-50 w-full
        border-b border-white/10
        bg-zinc-950/80 backdrop-blur
        supports-[backdrop-filter]:bg-zinc-950/70
        pt-[env(safe-area-inset-top)]
      "
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/mxds.gif"
              alt="JmG logo"
              className="h-8 w-8 rounded-xl object-cover"
              loading="eager"
            />
            <span className="text-sm font-semibold tracking-wide">JmG</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "relative rounded-lg px-3 py-2 text-sm transition",
                    "text-zinc-300 hover:text-white hover:bg-white/5",
                    active ? "bg-white/10 text-white" : "",
                  ].join(" ")}
                >
                  {l.label}
                  <span
                    className={[
                      "absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full",
                      "bg-blue-400 transition-all duration-300",
                      active
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-50",
                    ].join(" ")}
                  />
                </Link>
              );
            })}
          </nav>
        </div>
      </Container>

      <div
        className="
          md:hidden
          overflow-x-auto
          scrollbar-none
          border-t border-white/10
          bg-zinc-950/90
        "
      >
        <div className="flex w-max min-w-full gap-1 px-3 py-2">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "relative shrink-0 rounded-xl px-4 py-2 text-sm font-medium",
                  "transition active:scale-95",
                  active
                    ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    : "bg-white/5 text-zinc-300",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
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
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-950/60 backdrop-blur">
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

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "relative rounded-lg px-3 py-2 text-sm transition-all duration-200",
                    "text-zinc-300 hover:text-white hover:bg-white/5",
                    "active:scale-95",
                    active ? "text-white bg-white/10" : "",
                  ].join(" ")}
                >
                  {l.label}
                  <span
                    className={[
                      "absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full",
                      "bg-blue-400 transition-all duration-300",
                      active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-50",
                    ].join(" ")}
                  />
                </Link>
              );
            })}
          </nav>

          <div />
        </div>
      </Container>
    </header>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", text: "Hjem" },
  { href: "/ventilasjon", text: "Ventilasjon" },
  { href: "/tomrer", text: "Tømrer" },
  { href: "/butikk", text: "Nettbutikk" },
  { href: "/faktura", text: "Faktura" },
  { href: "/om-oss", text: "Om oss" },
  { href: "/kontakt", text: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // lukk ved klikk utenfor og ESC
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (open && ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-black/40 backdrop-blur border-b border-white/10 text-white">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">
          Serviceleverandøren AS
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-1 rounded hover:bg-white/10 ${
                isActive(l.href) ? "bg-white/15 ring-1 ring-white/20" : ""
              }`}
            >
              {l.text}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Lukk meny" : "Åpne meny"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-lg border border-white/15 bg-black/40 p-2"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden px-4 pb-3" ref={ref}>
          <div className="rounded-xl border border-white/10 bg-slate-800/90 p-2 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`px-2 py-2 rounded hover:bg-white/10 ${
                  isActive(l.href) ? "bg-white/15 ring-1 ring-white/20" : ""
                }`}
              >
                {l.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

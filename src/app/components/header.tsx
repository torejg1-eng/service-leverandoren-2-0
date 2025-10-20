// === FIXED & CENTERED: src/app/components/header.tsx ===
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", text: "Hjem" },
  { href: "/ventilasjon", text: "Ventilasjon" },
  { href: "/tomrer", text: "Tømrer" },
  { href: "/butikk", text: "Nettbutikk" },
  { href: "/kontakt", text: "Kontakt" },
];

// 🎨 Justerbare verdier
const headerStyle = {
  bgColor: "rgba(15, 15, 15, 0.9)",
  textColor: "#ffffff",
  linkColor: "#e5e5e5",
  linkHover: "#00ffbb",
  borderColor: "rgba(255,255,255,0.15)",
  height: "90px",
  fontSize: "1rem",
  logoScale: 2.25, // ← Øk eller reduser for større/mindre firmanavn
  logoOffset: "-1px", // ← Løfter/senker firmanavnet litt
};

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--header-height", headerStyle.height);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 shadow-lg backdrop-blur-md transition-all"
      style={{
        backgroundColor: headerStyle.bgColor,
        color: headerStyle.textColor,
        borderBottom: `1px solid ${headerStyle.borderColor}`,
        height: headerStyle.height,
        fontSize: headerStyle.fontSize,
      }}
    >
      {/* Logo / Firmanavn */}
      <div
        className="font-bold tracking-wide select-none"
        style={{
          transform: `scale(${headerStyle.logoScale}) translateY(${headerStyle.logoOffset})`,
          transformOrigin: "left center",
          lineHeight: "1",
        }}
      >
<span style={{ color: "#4af0c4" }}>Service </span>
<span style={{ color: "#ffffff" }}>Leverandøren AS</span>
      </div>

      {/* Desktop-meny */}
      <nav className="hidden md:flex gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color:
                pathname === link.href
                  ? headerStyle.linkHover
                  : headerStyle.linkColor,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = headerStyle.linkHover)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color =
                pathname === link.href
                  ? headerStyle.linkHover
                  : headerStyle.linkColor)
            }
          >
            {link.text}
          </Link>
        ))}
      </nav>

      {/* Mobil-meny knapp */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 text-neutral-200"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobil-meny dropdown */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-neutral-900/95 border-t border-neutral-700 py-4 px-6 flex flex-col gap-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`${
                pathname === link.href ? "text-emerald-400 font-semibold" : "text-neutral-200"
              } hover:text-emerald-300`}
            >
              {link.text}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

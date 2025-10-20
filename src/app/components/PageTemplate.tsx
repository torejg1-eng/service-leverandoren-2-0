// === START FIXED: src/app/components/PageTemplate.tsx ===
"use client";
import React from "react";

interface PageTemplateProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
  buttonHref?: string; // ✅ lagt til støtte for lenke-knapp
  bgColor?: string;
  services?: { title: string; desc: string }[];
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
  buttonHref, // ✅ ny prop tas inn her
  bgColor = "bg-gray-700",
  services = [],
}) => {
  const isDark =
    bgColor.includes("gray") ||
    bgColor.includes("slate") ||
    bgColor.includes("neutral") ||
    bgColor.includes("black") ||
    bgColor.includes("zinc") ||
    bgColor.includes("stone");

  const titleColor = isDark
    ? "text-gray-100 drop-shadow-md"
    : "text-gray-900";
  const subtitleColor = isDark
    ? "text-gray-200 drop-shadow-sm"
    : "text-gray-700";

  const handleClick = () => {
    if (buttonHref) {
      window.location.href = buttonHref; // ✅ åpner lenke hvis oppgitt
    } else if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className={`${bgColor} py-20 text-center relative`}>
        {/* Gul linje under hero */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-amber-400" />
        <h1 className={`text-4xl font-bold ${titleColor}`}>{title}</h1>
        <p className={`mt-2 text-lg ${subtitleColor}`}>{subtitle}</p>
        <button
          onClick={handleClick}
          className="mt-6 bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-5 rounded shadow-md transition transform hover:scale-105"
        >
          {buttonText}
        </button>
      </section>

      {/* SERVICES */}
      {services.length > 0 && (
        <section className="bg-gray-50 py-12 border-t-4 border-amber-400">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Våre tjenester
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition"
              >
                <h3 className="font-bold text-gray-800 text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default PageTemplate;
// === END FIXED: src/app/components/PageTemplate.tsx ===

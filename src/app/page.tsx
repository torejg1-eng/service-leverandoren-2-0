 "use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// ===== START TextConfig interface =====
interface TextConfig {
  // Posisjon og transformasjon
  top: number;
  left: number;
  rotate: number;
  scale: number;
  houseScale: number;
  gap: number;

  // Tekststil
  fontSize: number;
  fontFamily: string;
  gradient: string;
  textColor: string;
  sharp: boolean;

  // Glow / skyggeeffekter
  glow: boolean;
  glowColor: string;
  glowStrength: number;
  depth: number;
  shadowX: number;
  shadowY: number;
  shadowBlur: number;

  // Bakgrunn
  background: string;

  // Dør-posisjonering
  doorTop: number;
  doorLeft: number;
}
// ===== END TextConfig interface =====

/*** HEX → RGB helper ***/
function hexToRgbTuple(hex: string = "#ffffff") {
  let cleaned = hex.replace("#", "");
  if (cleaned.length === 3) {
    cleaned = cleaned.split("").map((c) => c + c).join("");
  }
  const num = parseInt(cleaned, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `${r}, ${g}, ${b}`;
}

// ================== START defaultSettings ==================
const defaultSettings = {
  service: {
    top: 20,
    left: 58,
    rotate: 8.5,
    scale: 3.3,
    fontSize: 17,
    fontFamily: "var(--font-geist-sans)",
    gradient: "solid-yellow",
    glow: true,
    depth: 1,
    shadowX: -2,
    shadowY: 1,
    shadowBlur: 1,
    sharp: false,
    glowColor: "#b51a00",
    glowStrength: 0.6,
    gap: 0.9,
    houseScale: 1.3,
    background: "house-sketch1.jpeg",
    textColor: "#000000",
    doorTop: 0,
    doorLeft: 0,
  },
  ventilasjon: {
    top: 58,
    left: 32.5,
    rotate: 2.8,
    scale: 1.8,
    fontSize: 15,
    fontFamily: "var(--font-geist-sans)",
    gradient: "solid-yellow",
    glow: true,
    depth: 1,
    shadowX: -2,
    shadowY: 1,
    shadowBlur: 0,
    sharp: false,
    glowColor: "#ffd877",
    glowStrength: 0.6,
    gap: 0,
    houseScale: 1,
    background: "house-sketch.jpg",
    textColor: "#000000",
    doorTop: 86.5,
    doorLeft: 29,
  },
  tomrer: {
    top: 61,
    left: 60,
    rotate: 3,
    scale: 1.8,
    fontSize: 15,
    fontFamily: "var(--font-geist-sans)",
    gradient: "solid-yellow",
    glow: true,
    depth: 1,
    shadowX: -2,
    shadowY: 1,
    shadowBlur: 0,
    sharp: false,
    glowColor: "#ffc677",
    glowStrength: 0.6,
    gap: 0,
    houseScale: 1,
    background: "house-sketch.jpg",
    textColor: "#000000",
    doorTop: 87,
    doorLeft: 58,
  },
  nordic: {
    top: 64,
    left: 83.5,
    rotate: 2.8,
    scale: 1.8,
    fontSize: 15,
    fontFamily: "var(--font-geist-sans)",
    gradient: "solid-yellow",
    glow: true,
    depth: 1,
    shadowX: -2,
    shadowY: 1,
    shadowBlur: 0,
    sharp: false,
    glowColor: "#ffa57d",
    glowStrength: 0.6,
    gap: 0,
    houseScale: 1,
    background: "house-sketch.jpg",
    textColor: "#000000",
    doorTop: 88,
    doorLeft: 83,
  },
};
// ================== END defaultSettings ==================
// ===== START STATE BLOKK =====
export default function HomePage() {
  /*** STATE ***/
  const [openMenu, setOpenMenu] = useState(false);
  const [openEditor, setOpenEditor] = useState(false);
  const [settings, setSettings] = useState(defaultSettings);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activePreset, setActivePreset] = useState(() => {
    // hent sist brukt preset fra localStorage
    if (typeof window !== "undefined") {
      const savedIdx = localStorage.getItem("activePreset");
      return savedIdx ? parseInt(savedIdx, 10) : 0;
    }
    return 0;
  });
  const menuRef = useRef<HTMLDivElement>(null);
  const panelScrollRef = useRef(0);
  const panelRef = useRef<HTMLDivElement>(null);
// ===== SLUTT STATE BLOKK =====

  /*** OPPDAG SYSTEM TEMA ***/
  useEffect(() => {
    const matcher = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(matcher.matches);
    const listener = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    matcher.addEventListener("change", listener);
    return () => matcher.removeEventListener("change", listener);
  }, []);

  // === LAST INN LAGRET PRESET VED START ===
useEffect(() => {
  const STORAGE_KEYS = [
    "textSettings_preset1",
    "textSettings_preset2",
    "textSettings_preset3",
    "textSettings_preset4",
    "textSettings_preset5",
  ];

  // les sist brukt preset, fallback til 0
  const savedPreset = localStorage.getItem("activePreset");
  const idx = savedPreset ? parseInt(savedPreset, 10) : 0;
  setActivePreset(idx);

  const saved = localStorage.getItem(STORAGE_KEYS[idx]);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      setSettings({
        service: { ...defaultSettings.service, ...parsed.service },
        ventilasjon: { ...defaultSettings.ventilasjon, ...parsed.ventilasjon },
        tomrer: { ...defaultSettings.tomrer, ...parsed.tomrer },
        nordic: { ...defaultSettings.nordic, ...parsed.nordic },
      });
    } catch {
      setSettings(defaultSettings);
    }
  } else {
    setSettings(defaultSettings);
  }
}, []); // kjør kun første gang


  /*** ESC-LUKKING MENY ***/
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  /*** KLIKK UTENFOR MENY ***/
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    }
    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu]);

  /*** HOTKEY EDITOR (Shift+Cmd+E) ***/
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.shiftKey && e.metaKey && e.key.toLowerCase() === "e") {
        setOpenEditor((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /*** RENDER TEKST ***/
interface TextConfig {
  // Posisjon og transformasjon
  top: number;
  left: number;
  rotate: number;
  scale: number;
  houseScale: number; // alltid definert
  gap: number;        // alltid definert

  // Tekststil
  fontSize: number;
  fontFamily: string;
  gradient: string;
  textColor: string;
  sharp: boolean;

  // Glow / skyggeeffekter
  glow: boolean;
  glowColor: string;
  glowStrength: number;
  depth: number;
  shadowX: number;
  shadowY: number;
  shadowBlur: number;

  // Bakgrunn
  background: string;

  // Dør-posisjonering
  doorTop: number;
  doorLeft: number;
  // legg til flere hvis nødvendig:
  // doorRight: number;
  // doorBottom: number;
}

const renderText = (text: string, config: TextConfig, withGap = false) => (

<h1
  className={`absolute font-bold text-with-shadow responsive-h1 ${config.gradient} ${
    config.sharp ? "text-sharp" : ""
  } ${
    config.glow
      ? isDarkMode
        ? "animate-glow-dark"
        : "animate-glow-light"
      : ""
  }`}
      style={{
        top: `${config.top}%`,
        left: `${config.left}%`,
        transform: `translate(-50%, -50%) rotate(${config.rotate}deg) scale(${config.scale})`,
        transformOrigin: "center",
        fontSize: `${config.fontSize}px`,
        fontFamily: config.fontFamily,
        zIndex: 20,
        pointerEvents: "none",
["--shadow-x" as string]: `${config.shadowX}px`,
["--shadow-y" as string]: `${config.shadowY}px`,
["--shadow-blur" as string]: `${config.shadowBlur}px`,
["--depth" as string]: `${config.depth}px`,
["--glow-color" as string]: config.glowColor,
["--glow-strength" as string]: config.glowStrength,
["--glow-rgb" as string]: hexToRgbTuple(config.glowColor),
      }}
    >
      {text.split("").map((char: string, i: number) => (
        <span
          key={i}
          className="inline-block animate-wave"
          style={{ animationDelay: `${i * 0.08}s` }}
        >
          {char}
        </span>
      ))}
      {withGap && (
        <>
          <span style={{ display: "inline-block", width: `${(config.gap ?? 0.9)}em` }} />
          {"AS".split("").map((char, i) => (
            <span
              key={`as-${i}`}
              className="inline-block animate-wave"
              style={{ animationDelay: `${(i + 30) * 0.08}s` }}
            >
              {char}
            </span>
          ))}
        </>
      )}
    </h1>
  );

// ===== START EditorPanel (full med presets + fargevelger + skygge) =====
const EditorPanel = ({
  settings,
  setSettings,
  activePreset,
  setActivePreset,
}: {
  settings: typeof defaultSettings;
  setSettings: React.Dispatch<React.SetStateAction<typeof defaultSettings>>;
  activePreset: number;
  setActivePreset: React.Dispatch<React.SetStateAction<number>>;
}) => {
//// START PATCH page.tsx (EditorPanel adjust)
type ConfigKey = keyof typeof defaultSettings;
type ConfigField = keyof TextConfig;

const adjust = (key: ConfigKey, field: ConfigField, delta: number) => {
  const cfg = settings[key] as TextConfig;
  const current = cfg[field];

  if (typeof current === "number") {
    setSettings({
      ...settings,
      [key]: { ...cfg, [field]: current + delta },
    });
  } else {
    console.warn(`Feltet ${String(field)} er ikke numerisk, hopper over justering`);
  }
};
//// END PATCH page.tsx

  const STORAGE_KEYS = [
    "textSettings_preset1",
    "textSettings_preset2",
    "textSettings_preset3",
    "textSettings_preset4",
    "textSettings_preset5",
  ];

  const gradients = [
    "solid-white","solid-black","solid-red","solid-blue","solid-green","solid-yellow",
    "gradient-silverblue","gradient-gold","gradient-neon","gradient-subtle",
    "gradient-red","gradient-green","gradient-blue","gradient-purple","gradient-pink",
    "gradient-orange","gradient-cyan","gradient-gray",
  ];

  const glowSwatches = [
    "#ffffff","#eab308","#ef4444","#22c55e","#3b82f6",
    "#a855f7","#ec4899","#06b6d4","#f97316","#94a3b8",
  ];

const Section = ({
  keyName,
  title,
}: {
  keyName: keyof typeof defaultSettings;
  title: string;
}) => {
  const cfg = settings[keyName];

  const safeId = `${keyName}-${title.replace(/\s+/g, "-")}`;

  return (
    <div className="mb-3 border-t border-gray-700 pt-2 text-xs">
      <h3 className="font-semibold mb-1 flex justify-between items-center text-sm">
        {title}
        <button
          onClick={() => {
            const next = {
              ...settings,
              [keyName]: defaultSettings[keyName as keyof typeof defaultSettings],
            };
            setSettings(next);
            localStorage.setItem(STORAGE_KEYS[activePreset], JSON.stringify(next));
          }}
          className="ml-1 px-1 py-0.5 bg-gray-700 hover:bg-gray-600 rounded text-[10px]"
        >
          Reset del
        </button>
      </h3>

      {/* Justeringsknapper */}
      {[
        { label: "Top", field: "top", step: 1 },
        { label: "Left", field: "left", step: 1 },
        { label: "Rotate", field: "rotate", step: 0.5 },
        { label: "Scale", field: "scale", step: 0.1 },
        { label: "Font", field: "fontSize", step: 1 },
        { label: "Depth", field: "depth", step: 1 },
        { label: "Shad X", field: "shadowX", step: 1 },
        { label: "Shad Y", field: "shadowY", step: 1 },
        { label: "Blur", field: "shadowBlur", step: 1 },
        { label: "Gap", field: "gap", step: 0.1 },
      ].map((ctrl) => (
        <div
          key={ctrl.field}
          className="flex items-center justify-between mb-1 text-[10px]"
        >
<span>
  {ctrl.label}: {(cfg as TextConfig)[ctrl.field as keyof TextConfig]}
</span>
          <div className="flex gap-1">
            <button
              onClick={() => adjust(keyName, ctrl.field as keyof TextConfig, -ctrl.step)}
              className="px-1 bg-gray-700 hover:bg-gray-600 rounded"
            >
              −
            </button>
            <button
              onClick={() => adjust(keyName, ctrl.field as keyof TextConfig, ctrl.step)}
              className="px-1 bg-gray-700 hover:bg-gray-600 rounded"
            >
              +
            </button>
          </div>
        </div>
      ))}

      {/* Dørjustering (kun ventilasjon/tømrer/nordic) */}
      {["ventilasjon", "tomrer", "nordic"].includes(keyName) && (
        <div className="mt-2">
          <div className="flex items-center justify-between mb-1 text-[10px]">
          <span>Dør-Top: {(cfg as TextConfig).doorTop}</span>
            <div className="flex gap-1">
              <button
                onClick={() => adjust(keyName, "doorTop", -0.5)}
                className="px-1 bg-gray-700 hover:bg-gray-600 rounded"
              >
                −
              </button>
              <button
                onClick={() => adjust(keyName, "doorTop", 0.5)}
                className="px-1 bg-gray-700 hover:bg-gray-600 rounded"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-1 text-[10px]">
         <span>Dør-Left: {(cfg as TextConfig).doorLeft}</span>
            <div className="flex gap-1">
              <button
                onClick={() => adjust(keyName, "doorLeft", -0.5)}
                className="px-1 bg-gray-700 hover:bg-gray-600 rounded"
              >
                −
              </button>
              <button
                onClick={() => adjust(keyName, "doorLeft", 0.5)}
                className="px-1 bg-gray-700 hover:bg-gray-600 rounded"
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fontvalg */}
      <select
        value={cfg.fontFamily}
        onChange={(e) =>
          setSettings({
            ...settings,
            [keyName]: { ...cfg, fontFamily: e.target.value },
          })
        }
        className="w-full text-black px-1 py-0.5 rounded mb-1 text-xs"
      >
        <option value="var(--font-geist-sans)">Geist Sans</option>
        <option value="var(--font-geist-mono)">Geist Mono</option>
        <option value="sans-serif">Sans</option>
        <option value="serif">Serif</option>
        <option value="monospace">Monospace</option>
        <option value="cursive">Cursive</option>
      </select>

      {/* Tekstfarge med knapp */}
<label className="block mt-2 mb-1">Tekstfarge</label>
<input
  type="color"
  value={cfg.textColor || "#ffffff"}
  onChange={(e) =>
    setSettings({
      ...settings,
      [keyName]: { ...cfg, textColor: e.target.value },
    })
  }
  className="h-8 w-16 rounded cursor-pointer"
/>


      {/* Gradientvalg */}
      <select
        value={cfg.gradient}
        onChange={(e) =>
          setSettings({
            ...settings,
            [keyName]: { ...cfg, gradient: e.target.value, textColor: "" },
          })
        }
        className="w-full text-black px-1 py-0.5 rounded mb-1 text-xs mt-2"
      >
        <option value="">Ingen gradient</option>
        {gradients.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>

      {/* Glow controls */}
      <div className="mt-2 space-y-1">
        <div className="flex items-center justify-between">
          <span>Glow-farge</span>
          <input
            type="color"
            value={cfg.glowColor || "#ffffff"}
            onChange={(e) =>
              setSettings({
                ...settings,
                [keyName]: { ...cfg, glowColor: e.target.value },
              })
            }
            className="h-6 w-12 border rounded cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-between text-[10px]">
          <span>Styrke: {cfg.glowStrength}</span>
          <div className="flex gap-1">
            <button
              onClick={() => adjust(keyName, "glowStrength", -0.05)}
              className="px-1 bg-gray-700 hover:bg-gray-600 rounded"
            >
              −
            </button>
            <button
              onClick={() => adjust(keyName, "glowStrength", 0.05)}
              className="px-1 bg-gray-700 hover:bg-gray-600 rounded"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Toggles */}
      <div className="flex gap-1 mt-1">
        <button
          className={`flex-1 px-1 py-0.5 rounded text-[10px] font-semibold ${
            cfg.glow ? "bg-green-600" : "bg-gray-600"
          }`}
          onClick={() =>
            setSettings({
              ...settings,
              [keyName]: { ...cfg, glow: !cfg.glow },
            })
          }
        >
          Glow
        </button>
        <button
          className={`flex-1 px-1 py-0.5 rounded text-[10px] font-semibold ${
            cfg.sharp ? "bg-green-600" : "bg-gray-600"
          }`}
          onClick={() =>
            setSettings({
              ...settings,
              [keyName]: { ...cfg, sharp: !cfg.sharp },
            })
          }
        >
          Sharp
        </button>
      </div>

      {/* Hus og bakgrunn (kun service) */}
      {keyName === "service" && (
        <>
          <div className="flex items-center justify-between mt-2">
            <span>Hus: {((cfg as TextConfig).houseScale ?? 1).toFixed(2)}x</span>
            <div className="flex gap-1">
              <button
                onClick={() => adjust(keyName, "houseScale", -0.1)}
                className="px-1 bg-gray-700 rounded"
              >
                −
              </button>
              <button
                onClick={() => adjust(keyName, "houseScale", 0.1)}
                className="px-1 bg-gray-700 rounded"
              >
                +
              </button>
            </div>
          </div>
<label className="block mt-2 mb-1">Bakgrunn</label>
<select
  value={(cfg as TextConfig).background || ""}
  onChange={(e) =>
    setSettings({
      ...settings,
      [keyName]: {
        ...(cfg as TextConfig),
        gap: (cfg as TextConfig).gap ?? 0,
        houseScale: (cfg as TextConfig).houseScale ?? 1,
        background: e.target.value,
      } as TextConfig,
    })
  }
  className="w-full text-black rounded px-1 text-xs"
>
  <option value="house-sketch.jpg">Skisse</option>
  <option value="house-sketch1.jpeg">Variant 1</option>
  <option value="house-sketch2.jpeg">Variant 2</option>
  <option value="house-sketch3.jpeg">Variant 3</option>
  <option value="house-sketch4.jpeg">Variant 4</option>
</select>
        </>
      )}
    </div>
  );
};

  return (
  <div className="fixed bottom-0 left-0 right-0 flex justify-between gap-2 z-50 p-2 pointer-events-none text-xs">

      {/* Venstre panel */}
      <div className="bg-black/90 p-2 rounded-lg text-white w-[420px] pointer-events-auto">
        <h2 className="font-bold text-sm mb-2">⚙️ Service + Ventilasjon</h2>
        <div className="flex gap-2 mb-2">
          <select
            value={activePreset}
            onChange={(e) => {
              const idx = parseInt(e.target.value, 10);
              setActivePreset(idx);
              const saved = localStorage.getItem(STORAGE_KEYS[idx]);
              if (saved) setSettings(JSON.parse(saved));
            }}
            className="flex-1 text-black rounded px-1"
          >
            <option value={0}>Preset 1</option>
            <option value={1}>Preset 2</option>
            <option value={2}>Preset 3</option>
            <option value={3}>Preset 4</option>
            <option value={4}>Preset 5</option>
          </select>
<button
  onClick={() => {
    localStorage.setItem(STORAGE_KEYS[activePreset], JSON.stringify(settings));
    localStorage.setItem("activePreset", activePreset.toString()); // husk valgt preset også
    alert(`Lagret preset ${activePreset + 1}`);
  }}
  className="flex-1 px-2 py-1 bg-green-600 rounded text-xs"
>
  💾 Lagre
</button>
        </div>
        <Section keyName="service" title="Serviceleverandøren" />
        <Section keyName="ventilasjon" title="Ventilasjon" />
      </div>

      {/* Høyre panel */}
      <div className="bg-black/90 p-2 rounded-lg text-white w-[420px] pointer-events-auto">
        <h2 className="font-bold text-sm mb-2">⚙️ Tømrer + Nordic</h2>
        <Section keyName="tomrer" title="Tømrer" />
        <Section keyName="nordic" title="Nordic Smart" />
      </div>
    </div>
  );
};
// ===== END EditorPanel =====


  /*** LINKS I MENYEN ***/
  const links = [
    { href: "/", text: "Hjem" },
    { href: "/tomrer", text: "Tømrer" },
    { href: "/ventilasjon", text: "Ventilasjon" },
    { href: "/butikk", text: "Nettbutikk" },
    { href: "/faktura", text: "Fakturaspørsmål" },
    { href: "/om-oss", text: "Om oss" },
    { href: "/kontakt", text: "Kontakt oss" },
  ];

  /*** HOVEDINNHOLD ***/
  return (
    <main
      className="min-h-screen relative"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >

<section className="relative w-full max-w-6xl mx-auto aspect-[16/9]">
{/* Bakgrunn + overlegg følger huset nøyaktig */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
  {/* Denne beholderen har EXAKT samme boks som bildet,
      og hele boksen skaleres 1:1 med houseScale */}
  <div
    className="relative inline-block h-full"
    style={{
      transform: `scale(${settings.service.houseScale ?? 1})`,
      transformOrigin: "center",
    }}
  >
<img
  src={`/${settings.service.background}`}
  alt="Hus"
  style={{
    transform: `scale(${settings.service.houseScale ?? 1})`,
    maxHeight: "100%",
    maxWidth: "100%",
  }}
/>
  </div>
</div>


  {/* Store tekster */}
  {renderText("SERVICELEVERANDØREN", settings.service, true)}
  {renderText("Ventilasjon/Service", settings.ventilasjon)}
  {renderText("Tømrer/Bygg", settings.tomrer)}
  {renderText("Nordic Smart", settings.nordic)}

{/* Klikkbare "dører" */}
<Link
  href="/ventilasjon"
  className="group absolute -translate-x-1/2 -translate-y-1/2 z-50"
  style={{
    top: `${settings.ventilasjon.doorTop}%`,
    left: `${settings.ventilasjon.doorLeft}%`,
  }}
>
  <div className="relative w-[140px] h-[230px] rounded-md ring-1 ring-white/25 shadow-[0_0_24px_rgba(255,255,255,0.12)] transition group-hover:ring-white/60 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] group-hover:bg-white/10">
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/80 text-white text-sm opacity-0 group-hover:opacity-100 transition">
      Ventilasjon
    </span>
  </div>
</Link>

<Link
  href="/tomrer"
  className="group absolute -translate-x-1/2 -translate-y-1/2 z-50"
  style={{
    top: `${settings.tomrer.doorTop}%`,
    left: `${settings.tomrer.doorLeft}%`,
  }}
>
  <div className="relative w-[130px] h-[211px] rounded-md ring-1 ring-white/25 shadow-[0_0_24px_rgba(255,255,255,0.12)] transition group-hover:ring-white/60 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] group-hover:bg-white/10">
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/80 text-white text-sm opacity-0 group-hover:opacity-100 transition">
      Tømrer
    </span>
  </div>
</Link>

<Link
  href="/butikk"
  className="group absolute -translate-x-1/2 -translate-y-1/2 z-50"
  style={{
    top: `${settings.nordic.doorTop}%`,
    left: `${settings.nordic.doorLeft}%`,
  }}
>
  <div className="relative w-[110px] h-[192px] rounded-md ring-1 ring-white/25 shadow-[0_0_24px_rgba(255,255,255,0.12)] transition group-hover:ring-white/60 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] group-hover:bg-white/10">
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/80 text-white text-sm opacity-0 group-hover:opacity-100 transition">
      Nettbutikk
    </span>
  </div>
</Link>

</section>




      {/* Editor */}
{openEditor && (
  <EditorPanel
    settings={settings}
    setSettings={setSettings}
    activePreset={activePreset}
    setActivePreset={setActivePreset}
  />
)}
    </main>
  );
}

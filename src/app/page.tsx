// === START FULL FIXED: src/app/page.tsx ===
"use client";
import {
  Wrench,
  Wind,
  Radiation,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  PlayCircle,
  Building2,
  Hammer,
} from "lucide-react";

export default function HomePage() {
  const year = new Date().getFullYear();
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 [--bg-dark:#0b0b0c] [--bg-soft:#121418] [--emerald:#10b981] [--amber:#f59e0b]">
      {/* kompensasjon for fast header */}
      <div className="h-28 sm:h-32"></div>

{/* HERO */}
<div className="h-28 sm:h-32"></div>

<section
  className="relative isolate overflow-hidden bg-gradient-to-b from-neutral-900 via-gray-800 to-gray-700"
  style={{ marginTop: "var(--header-height, 8rem)" }}
>
  {/* Bakgrunnsbilde med gradientoverlay */}
  <div className="absolute inset-0">
    <div className="h-full w-full bg-[url('/images/hero-stue.webp')] bg-cover bg-center opacity-20" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-gray-800" />
  </div>

  {/* Innhold */}
  <div className="relative z-10 mx-auto max-w-6xl px-6 pt-36 pb-56 sm:pt-44 sm:pb-64 flex flex-col items-center text-center">
    <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
      <span className="block text-white drop-shadow-md">Bygg, teknologi og håndverk gir:</span>
      <span className="mt-3 block bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
        -komfort og kvalitet som varer
      </span>
    </h1>

    <p className="mt-6 max-w-3xl text-lg text-gray-200 drop-shadow-sm">
      Service-Leverandøren AS leverer helhetlige løsninger: tømrerarbeid, spesialprosjekter,
      ventilasjon, radon og komfort. Én aktør – fra befaring til ferdig resultat.
    </p>

    <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300">
      <span className="flex items-center gap-2">
        <Phone className="h-4 w-4" /> +47 469 25 236
      </span>
      <span className="flex items-center gap-2">
        <Mail className="h-4 w-4" /> post@service-leverandoren.no
      </span>
    </div>

    {/* Kontaktknapp */}
    <button
      onClick={() => (window.location.href = "/kontakt")}
      className="relative z-10 mt-10 bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-6 rounded shadow-md transition transform hover:scale-105"
      style={{ marginBottom: "-1.5rem" }}
    >
      Kontakt oss
    </button>
  </div>

  {/* Øvre skygge for header-glød */}
  <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-neutral-950/90 to-transparent z-40" />

  {/* Nedre kontraststripe */}
  <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500" />
</section>

{/* TJENESTER */}
<section id="tjenester" className="bg-[var(--bg-soft)]">
  <div className="mx-auto max-w-7xl px-4 py-8 md:py-10">
    <Header
      eyebrow="Tjenester"
      title="Hva vi gjør"
      text="Kombinerer håndverk og teknikk for varige løsninger med dokumentert kvalitet."
    />

    {/* ca. 2 cm mellom hvert kort */}
    <div
      className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      style={{ gap: "32px" }}
    >
      <ServiceCard
        icon={<Building2 className="h-6 w-6" />}
        title="Bygg & rehabilitering"
        desc="Oppussing, kjøkken, lydisolasjon og spesialtilpasninger."
        accent="amber"
      />
      <ServiceCard
        icon={<Wind className="h-6 w-6" />}
        title="Ventilasjon & inneklima"
        desc="Service, feilsøking og montering. Måling og innregulering."
        accent="emerald"
      />
      <ServiceCard
        icon={<Radiation className="h-6 w-6" />}
        title="Radon & ENØK"
        desc="Radonmåling, tetting og energieffektive tiltak."
        accent="emerald"
      />
      <ServiceCard
        icon={<Lightbulb className="h-6 w-6" />}
        title="Komfort & design"
        desc="Hjemmekino, lys, integrerte løsninger og spesialbygg."
        accent="amber"
      />
    </div>
  </div>
</section>

{/* PROSJEKTER */}
<section className="bg-neutral-900/40">
  <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
    <Header eyebrow="Utvalgte prosjekter" title="Detaljfokus i praksis" />

    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <ProjectCard
        img="/images/prosjekter/forside-prosjekt.webp"
        title="Prosjektbilder"
        tag="Utførte jobber"
        href="/prosjekter"
      />
    </div> {/* 👈 denne manglet */}

    <div className="mt-10">
      <a href="/prosjekter" className="btn-outline">
        Se alle prosjekter <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  </div>
</section>

      {/* OM OSS */}
      <section className="bg-[var(--bg-soft)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Eyebrow text="Om oss" />
              <h3 className="text-3xl font-bold md:text-4xl">
                Teknisk kompetanse + håndverk
              </h3>
              <p className="mt-4 text-neutral-300">
                Vi leverer solide løsninger for hjem og næring – fra bygg og
                spesialtilpasninger til ventilasjon, radon og komfort. Vi
                dokumenterer underveis og avslutter når alt er “spot on”.
              </p>
              <ul className="mt-6 space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <PlayCircle className="mt-0.5 h-5 w-5 text-emerald-400" />
                  Varig kvalitet, riktig materialvalg og ryddig fremdrift.
                </li>
                <li className="flex items-start gap-3">
                  <PlayCircle className="mt-0.5 h-5 w-5 text-emerald-400" />
                  Inneklima- og ENØK-tankegang i alle leveranser.
                </li>
                <li className="flex items-start gap-3">
                  <PlayCircle className="mt-0.5 h-5 w-5 text-emerald-400" />
                  Én kontaktperson fra befaring til ferdig prosjekt.
                </li>
              </ul>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative overflow-hidden rounded-2xl bg-neutral-800 shadow-2xl ring-1 ring-neutral-700">
                <img
                  src="/images/omoss-arbeid.webp"
                  alt="Arbeid i bolig"
                  className="h-80 w-full object-cover md:h-[28rem]"
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl bg-neutral-900/85 px-3 py-2 text-sm">
                  <Wrench className="h-4 w-4 text-emerald-400" /> Dokumentert
                  utførelse
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="relative bg-neutral-900/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_center,rgba(16,185,129,0.08),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 sm:py-36 text-shadow-xl">
          <Header
            eyebrow="Kontakt"
            title="Gratis befaring & rådgivning"
            text="Beskriv kort hva du ønsker hjelp til – bygg, ventilasjon, radon eller komfort – så tar vi kontakt."
          />

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <form
                action="https://formspree.io/f/xqkoyqza"
                method="POST"
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                <Input name="navn" placeholder="Navn" required />
                <Input name="telefon" placeholder="Telefon" type="tel" required />
                <Input
                  name="epost"
                  placeholder="E-post (valgfritt)"
                  type="email"
                  className="sm:col-span-2"
                />
                <Textarea
                  name="beskrivelse"
                  placeholder="Hva kan vi hjelpe med?"
                  rows={4}
                  required
                  className="sm:col-span-2"
                />
                <button className="btn-emerald sm:w-max" aria-label="Send forespørsel">
                  Send forespørsel <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>

            <aside className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
              <h4 className="text-xl font-semibold">Direkte kontakt</h4>
              <div className="mt-4 space-y-3 text-neutral-300">
                <p className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-emerald-400" />
                  <a href="tel:+4746925236" className="hover:underline">
                    +47 469 25 236
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-emerald-400" />
                  <a
                    href="mailto:post@service-leverandoren.no"
                    className="hover:underline"
                  >
                    post@service-leverandoren.no
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-emerald-400" /> Skjeberg, Østfold
                </p>
              </div>

              <div className="mt-6 rounded-xl bg-neutral-900 p-4 text-sm text-neutral-400">
                Vi dekker hele Østfold og nærområdene. Kveldsbefaring etter avtale.
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-neutral-400">
                <Badge icon={<Hammer className="h-3.5 w-3.5" />} text="Bygg" color="amber" />
                <Badge icon={<Wind className="h-3.5 w-3.5" />} text="Ventilasjon" color="emerald" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 bg-neutral-950/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/80">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-neutral-400">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
            <p>© {year} Service-Leverandøren AS. Alle rettigheter.</p>
            <nav className="flex flex-wrap gap-6">
              <a href="/prosjekter" className="hover:text-neutral-200">Prosjekter</a>
              <a href="/tjenester" className="hover:text-neutral-200">Tjenester</a>
              <a href="/om-oss" className="hover:text-neutral-200">Om oss</a>
              <a href="/personvern" className="hover:text-neutral-200">Personvern</a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------- Reusable bits ---------- */

function Header({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <>
      {eyebrow && <Eyebrow text={eyebrow} />}
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      {text && <p className="mt-3 max-w-2xl text-neutral-300">{text}</p>}
    </>
  );
}

function Eyebrow({ text }: { text: string }) {
  return (
    <div className="mb-8 flex items-center gap-3 text-emerald-400">
      <div className="h-0.5 w-10 bg-emerald-500" />
      <span className="text-sm font-semibold uppercase tracking-widest">{text}</span>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  accent = "emerald",
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  accent?: "emerald" | "amber";
}) {
  const accentClasses =
    accent === "amber"
      ? "text-amber-300 ring-amber-500/30"
      : "text-emerald-300 ring-emerald-500/30";
  return (
    <div className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition will-change-transform hover:-translate-y-1 hover:bg-neutral-900">
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-800 ring-1 ${accentClasses}`}>
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-neutral-300">{desc}</p>
    </div>
  );
}

function ProjectCard({ img, title, tag }: { img: string; title: string; tag: string }) {
  return (
    <a href="/prosjekter" className="group block overflow-hidden rounded-2xl bg-neutral-800 ring-1 ring-neutral-700">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full scale-[1.01] transform object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-neutral-900/80 px-3 py-1 text-xs font-medium text-neutral-100 ring-1 ring-neutral-700">
          {tag}
        </span>
      </div>
      <div className="p-4">
        <p className="text-base font-semibold text-neutral-100">{title}</p>
        <p className="mt-1 text-sm text-neutral-400">Se flere bilder og detaljer</p>
      </div>
    </a>
  );
}

function Badge({
  icon,
  text,
  color = "emerald",
}: {
  icon?: React.ReactNode;
  text: string;
  color?: "emerald" | "amber";
}) {
  const base =
    color === "amber"
      ? "bg-amber-500/10 text-amber-300 ring-amber-400/30"
      : "bg-emerald-500/10 text-emerald-300 ring-emerald-400/30";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 ring-1 ${base}`}>
      {icon}
      {text}
    </span>
  );
}

function Input({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 outline-none ring-emerald-300 placeholder:text-neutral-500 focus:ring-2 ${className}`}
    />
  );
}

function Textarea({ className = "", ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 outline-none ring-emerald-300 placeholder:text-neutral-500 focus:ring-2 ${className}`}
    />
  );
}

// === END FULL FIXED FILE ===

"use client";
import Image from "next/image";
import Link from "next/link";

export default function TomrerPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero seksjon med bakgrunnsbilde */}
      <section className="relative h-[80vh] w-full flex items-center justify-center">
        <Image
          src="/byggeprosjekt.jpg" // legg inn ditt eget bilde i public/
          alt="Byggeprosjekt"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="relative z-10 text-center text-white max-w-2xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Tømrer- og Byggtjenester
          </h1>
          <p className="text-lg md:text-2xl mb-6 drop-shadow-md">
            Alt fra rehabilitering og tilbygg til nybygg.  
            Kvalitet, punktlighet og solid håndverk.
          </p>
          <Link
            href="/kontakt"
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-lg font-semibold shadow-lg transition"
          >
            Få et uforpliktende tilbud
          </Link>
        </div>
      </section>

      {/* Tjenester seksjon */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Våre tjenester
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Rehabilitering",
              desc: "Oppgradering av eldre bygg med moderne standard.",
              icon: "🏚️",
            },
            {
              title: "Tilbygg & Påbygg",
              desc: "Utvid boligen med nye rom eller etasjer.",
              icon: "🏠",
            },
            {
              title: "Nybygg",
              desc: "Fra grunnmur til ferdig hjem – vi tar hele prosessen.",
              icon: "🏗️",
            },
          ].map((srv) => (
            <div
              key={srv.title}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{srv.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{srv.title}</h3>
              <p className="text-gray-600">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Referanser/prosjekter */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Utvalgte prosjekter
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["prosjekt1.jpg", "prosjekt2.jpg", "prosjekt3.jpg"].map(
              (img, i) => (
                <div key={i} className="relative h-64 rounded-lg overflow-hidden shadow">
                  <Image
                    src={`/${img}`} // legg disse i public/
                    alt={`Prosjekt ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Kontakt CTA */}
      <section className="bg-yellow-500 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Klar for å starte ditt prosjekt?
        </h2>
        <p className="mb-6 text-lg">
          Kontakt oss i dag for en gratis befaring og et skreddersydd tilbud.
        </p>
        <Link
          href="/kontakt"
          className="px-8 py-3 bg-black rounded-lg font-semibold text-lg hover:bg-gray-800 transition"
        >
          Kontakt oss
        </Link>
      </section>
    </main>
  );
}

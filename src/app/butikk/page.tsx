"use client";
import Image from "next/image";
import Link from "next/link";

export default function NordicPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* HERO */}
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        <Image
          src="/smart-tech.jpg"
          alt="Smart teknologi"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">Nordic Smart</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
            Fremtidens løsninger innen AI, smarthus og energieffektivitet.
          </p>
          <Link href="/kontakt" className="inline-block mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-lg">
            Kontakt oss
          </Link>
        </div>
      </section>

      {/* TJENESTER/PRODUKTER */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-8">
        <ServiceCard title="AI-optimalisering" text="Bli synlig i AI-søk og få flere kunder." />
        <ServiceCard title="Hydro Shield" text="Beskytt propellen og kom raskere i plan." />
        <ServiceCard title="Smarthus" text="Energieffektive og brukervennlige løsninger." />
      </section>

      <CTA />
    </main>
  );
}

function ServiceCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function CTA() {
  return (
    <section className="bg-yellow-500 text-black text-center py-12">
      <h2 className="text-3xl font-bold">Vil du ta i bruk fremtidens teknologi?</h2>
      <p className="mt-2 text-lg">Snakk med oss om hvordan vi kan hjelpe deg.</p>
      <Link href="/kontakt" className="inline-block mt-6 px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800">
        Kontakt oss
      </Link>
    </section>
  );
}

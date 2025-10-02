import Link from "next/link";

export default function OmOssPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Om oss</h1>
      <p className="text-lg max-w-xl text-center mb-8">
        Serviceleverandøren AS leverer tjenester innen bygg, ventilasjon,
        energioptimalisering og smarte løsninger.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded bg-green-600 hover:bg-green-500 transition text-white"
      >
        Tilbake til forsiden
      </Link>
    </main>
  );
}
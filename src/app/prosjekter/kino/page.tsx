import Image from "next/image";
import { getImagesFromFolder } from "@/lib/getImagesFromFolder";

export default async function KinoProsjekt() {
  const images = await getImagesFromFolder("kino");

  return (
    <section className="bg-neutral-900/40 min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Kino-prosjekt</h1>
        <p className="text-neutral-300 mb-10">
          Bilder fra hjemmekino – hentet fra /public/images/prosjekter/kino/
        </p>

        {images.length === 0 ? (
          <p className="text-neutral-400">Ingen bilder funnet i mappen.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl hover:scale-[1.02] transition-transform"
              >
                <Image
                  src={src}
                  alt={`Bilde ${i + 1}`}
                  width={800}
                  height={600}
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

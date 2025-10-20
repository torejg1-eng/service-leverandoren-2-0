"use client";
import Image from "next/image";

export default function Prosjekter() {
  const projects = [
    { name: "Bad", href: "/prosjekter/bad", img: "/images/prosjekter/bad/bad1.webp" },
    { name: "Kino", href: "/prosjekter/kino", img: "/images/prosjekter/kino/kino1.webp" },
    { name: "Kjøkken", href: "/prosjekter/kjokken", img: "/images/prosjekter/kjokken/kjokken1.webp" },
    { name: "Drivhus", href: "/prosjekter/drivhus", img: "/images/prosjekter/drivhus/drivhus1.webp" },
    { name: "Mur", href: "/prosjekter/mur", img: "/images/prosjekter/mur/mur1.webp" },
    { name: "Teknisk", href: "/prosjekter/teknisk", img: "/images/prosjekter/teknisk/teknisk1.webp" },
  ];

  return (
    <>
      {/* kompensasjon for fast header */}
      <div className="h-24 sm:h-32"></div>

      <section className="bg-neutral-900/40 min-h-screen py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6 sm:mb-10">
            Prosjektbilder
          </h1>
          <p className="text-neutral-400 mb-10 text-base sm:text-lg">
            Klikk på et prosjekt for å se flere bilder.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3">
                    <p className="text-white font-semibold tracking-wide">
                      {project.name}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

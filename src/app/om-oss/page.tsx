import PageTemplate from "../components/PageTemplate";

export default function OmOssPage() {
  return (
    <PageTemplate
      title="Om oss"
      subtitle="Service Leverandøren AS leverer profesjonelle tjenester innen ventilasjon, bygg og tekniske løsninger. Vi kombinerer håndverk, teknisk kompetanse og moderne teknologi."
      buttonText="Kontakt oss"
      buttonHref="/kontakt"
      bgImage="/images/omoss.webp"
      services={[
        {
          title: "Lang erfaring",
          desc: "Vi har bred erfaring fra både privat og næringsprosjekter, med fokus på kvalitet og detaljutførelse.",
        },
        {
          title: "Tverrfaglig kompetanse",
          desc: "Kombinasjon av bygg, ventilasjon, energi og teknologi gir helhetlige løsninger.",
        },
        {
          title: "Kundetilfredshet",
          desc: "Vi setter ærlighet, kommunikasjon og nøyaktighet i høysetet.",
        },
      ]}
    />
  );
}

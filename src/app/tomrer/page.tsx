import PageTemplate from "../components/PageTemplate";

export default function TomrerPage() {
  return (
    <PageTemplate
      title="Tømrer- og Byggtjenester"
      subtitle="Alt fra rehabilitering og tilbygg til nybygg. Kvalitet, punktlighet og solid håndverk."
      buttonText="Få et uforpliktende tilbud"
      bgImage="/images/tomrer.webp"
      services={[
        {
          title: "Tilbygg & Rehabilitering",
          desc: "Utvid boligen eller oppgrader eksisterende rom med moderne løsninger.",
        },
        {
          title: "Kjøkken & Interiør",
          desc: "Montering, spesialtilpasning og funksjonell design for ditt hjem.",
        },
        {
          title: "Fasade & Takarbeid",
          desc: "Vedlikehold, utskifting og energieffektiv oppgradering av fasader og tak.",
        },
      ]}
    />
  );
}

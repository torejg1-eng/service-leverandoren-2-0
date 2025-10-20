import PageTemplate from "../components/PageTemplate";

export default function VentilasjonPage() {
  return (
    <PageTemplate
      title="Ventilasjon & Service"
      subtitle="Bedre inneklima og energieffektivitet med profesjonell service."
      buttonText="Kontakt oss"
      bgImage="/images/ventilasjon.webp"
      services={[
        {
          title: "Feilsøking",
          desc: "Raskt finne og løse problemer i ventilasjonsanlegg og styring.",
        },
        {
          title: "Rens",
          desc: "Profesjonell rens av kanaler og aggregat for bedre luftkvalitet.",
        },
        {
          title: "Innregulering",
          desc: "Presis innstilling av luftmengder med måleutstyr og rapport.",
        },
      ]}
    />
  );
}

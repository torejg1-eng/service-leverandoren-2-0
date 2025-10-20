import PageTemplate from "../components/PageTemplate";

export default function FakturaPage() {
  return (
    <PageTemplate
      title="Faktura & betaling"
      subtitle="Her finner du informasjon om faktura, betaling og kontakt vedrørende økonomi."
      buttonText="Kontakt regnskap"
      buttonHref="/kontakt"
      bgImage="/images/faktura.webp"
      services={[
        {
          title: "Betalingsinformasjon",
          desc: "Fakturaer utstedes fra Service Leverandøren AS. Kontonummer og KID fremgår på fakturaen.",
        },
        {
          title: "EHF og e-post",
          desc: "Vi støtter EHF-fakturaer og sender også PDF-versjon på forespørsel til bedrifter og privatkunder.",
        },
        {
          title: "Spørsmål om faktura",
          desc: "Ta kontakt med oss dersom du oppdager feil eller ønsker kopi av tidligere fakturaer.",
        },
      ]}
    />
  );
}

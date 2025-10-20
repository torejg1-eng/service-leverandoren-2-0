import PageTemplate from "../components/PageTemplate";

export default function KontaktPage() {
  return (
    <PageTemplate
      title="Kontakt oss"
      subtitle="Du kan nå oss via kontaktskjemaet, e-post eller telefon. Vi svarer så fort vi kan."
      buttonText="Tilbake til forsiden"
      buttonHref="/"
      bgImage="/images/kontakt.webp"
    />
  );
}

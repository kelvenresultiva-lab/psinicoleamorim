import { siteConfig } from "@/data/content";

export default function MapSection() {
  return (
    <section aria-label="Localização do consultório" className="w-full">
      <iframe
        src={siteConfig.mapsEmbedUrl}
        width="100%"
        height="450"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Mapa de localização — ${siteConfig.addressLine1}`}
      />
    </section>
  );
}

import { siteConfig } from "@/data/content";
import WhatsappIcon from "./WhatsappIcon";

export default function WhatsappButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.phoneWhatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    >
      <WhatsappIcon size={28} />
    </a>
  );
}

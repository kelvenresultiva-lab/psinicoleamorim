import { Phone, MapPin, Mail, type LucideIcon } from "lucide-react";
import { contactBarContent } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  phone: Phone,
  "map-pin": MapPin,
  mail: Mail,
};

export default function ContactBar() {
  return (
    <section id="contato" className="relative z-10 -mt-[66px] bg-graphite">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {contactBarContent.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.icon === "map-pin" ? "_blank" : undefined}
              rel={item.icon === "map-pin" ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-2 border-line/20 px-6 py-10 text-center transition-colors hover:bg-white/5 sm:border-l sm:first:border-l-0"
            >
              <Icon size={30} strokeWidth={1.5} className="text-white" />
              <p className="mt-3 font-serif text-lg font-semibold text-white">{item.label}</p>
              <p className="font-heebo text-base text-white/70">{item.value}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

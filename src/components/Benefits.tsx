import { HeartPulse, UsersRound, ShieldCheck, Moon, type LucideIcon } from "lucide-react";
import { benefitsContent } from "@/data/content";
import Reveal from "./Reveal";

const iconMap: Record<string, LucideIcon> = {
  "heart-pulse": HeartPulse,
  "users-round": UsersRound,
  "shield-check": ShieldCheck,
  moon: Moon,
};

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-gold-dark uppercase">
            {benefitsContent.eyebrow}
          </p>
          <h2 className="mb-5 font-serif text-3xl text-charcoal sm:text-4xl">
            {benefitsContent.heading}
          </h2>
          <p className="text-[#4a4a4a]">{benefitsContent.subtext}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {benefitsContent.items.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <Reveal key={item.number} delayMs={index * 100}>
              <div className="relative rounded-2xl border border-[#EEEEEE] p-6">
                <span className="pointer-events-none absolute top-2 right-4 font-serif text-5xl text-cream-dark">
                  {item.number}
                </span>
                <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-cream">
                  <Icon size={22} className="text-gold-dark" />
                </div>
                <h3 className="relative mb-2 font-serif text-lg text-charcoal">
                  {item.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-[#666666]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

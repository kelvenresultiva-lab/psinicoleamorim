import Image from "next/image";
import { Check, User, Heart } from "lucide-react";
import { heroContent } from "@/data/content";
import Reveal from "./Reveal";
import WhatsappIcon from "./WhatsappIcon";

const [heroFirstName, ...heroRestName] = heroContent.title.split(" ");
const heroLastName = heroRestName.join(" ");

export default function Hero() {
  return (
    <section className="relative min-h-[880px] overflow-hidden sm:min-h-[940px] lg:min-h-[860px]">
      <Image
        src={heroContent.image.src}
        alt={heroContent.image.alt}
        fill
        priority
        className="object-cover object-[78%_22%] lg:object-[center_30%]"
        sizes="100vw"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      <div className="relative mx-auto flex min-h-[880px] max-w-7xl flex-col justify-end px-6 pt-24 pb-16 sm:min-h-[940px] sm:pb-20 lg:min-h-[860px] lg:justify-center lg:px-16 lg:pb-36">
        <Reveal>
          <div className="flex flex-col">
            <p className="order-2 mb-6 text-sm font-medium tracking-[0.2em] text-gold uppercase lg:order-1 lg:mb-3">
              {heroContent.subtitle}
            </p>

            <h1 className="order-1 mb-2 max-w-2xl font-serif text-5xl leading-tight text-white sm:text-6xl lg:order-2 lg:mb-6 lg:text-7xl">
              {heroFirstName}
              {heroLastName && (
                <>
                  <br />
                  {heroLastName}
                </>
              )}
            </h1>

            <p className="order-3 mb-10 hidden max-w-md text-lg leading-relaxed text-white/85 sm:block">
              {heroContent.taglineStart}
              <br />
              <em className="font-serif font-semibold text-gold italic">
                {heroContent.taglineHighlight}
              </em>{" "}
              <Heart size={18} className="inline-block text-gold align-middle" />
            </p>

            <ul className="order-4 mb-10 max-w-md space-y-4">
              {heroContent.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-gold text-gold">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="text-white/90">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="order-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={heroContent.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold tracking-wider text-white uppercase transition-colors hover:bg-gold-dark sm:w-auto"
              >
                {heroContent.primaryCta.label}
                <WhatsappIcon size={16} />
              </a>
              <a
                href={heroContent.secondaryCta.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/70 px-7 py-3 text-sm font-semibold tracking-wider text-white uppercase transition-colors hover:bg-white hover:text-[#1A1A1A] sm:w-auto"
              >
                {heroContent.secondaryCta.label}
                <User size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

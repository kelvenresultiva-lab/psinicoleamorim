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
        src={heroContent.image.mobileSrc}
        alt={heroContent.image.alt}
        fill
        priority
        className="object-cover object-[center_12%] lg:hidden"
        sizes="100vw"
      />
      <Image
        src={heroContent.image.src}
        alt={heroContent.image.alt}
        fill
        priority
        className="hidden object-cover object-[center_30%] lg:block"
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

            <p className="order-4 mb-10 max-w-md text-base leading-relaxed text-white/90 sm:hidden">
              {heroContent.mobileTagline}
            </p>

            <ul className="order-4 mb-10 hidden max-w-md space-y-4 sm:block">
              {heroContent.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-gold text-gold">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="text-white/90">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="order-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={heroContent.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-2 text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:bg-gold-dark sm:w-auto sm:px-7 sm:py-3 sm:text-sm"
              >
                {heroContent.primaryCta.label}
                <WhatsappIcon size={14} />
              </a>
              <a
                href={heroContent.secondaryCta.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/70 px-5 py-2 text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:bg-white hover:text-charcoal sm:w-auto sm:px-7 sm:py-3 sm:text-sm"
              >
                {heroContent.secondaryCta.label}
                <User size={14} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

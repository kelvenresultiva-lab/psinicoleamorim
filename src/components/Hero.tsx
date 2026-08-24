import Image from "next/image";
import { Check, User, Heart } from "lucide-react";
import { heroContent } from "@/data/content";
import Reveal from "./Reveal";
import WhatsappIcon from "./WhatsappIcon";

const [heroFirstName, ...heroRestName] = heroContent.title.split(" ");
const heroLastName = heroRestName.join(" ");

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden sm:min-h-[820px] lg:min-h-0 lg:aspect-[1823/863] lg:w-full">
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
        className="hidden object-cover lg:block"
        sizes="100vw"
      />

      {/* Véu claro atrás do texto: no mobile sobe do rodapé (a foto
          esmaece pra branco embaixo); no desktop cobre a parede clara à
          esquerda (ambiente desfocado atrás dela), garantindo contraste
          pro texto — a foto da Nicole à direita fica livre. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-white/90 via-white/50 to-transparent lg:hidden" />
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[56%] bg-gradient-to-r from-[#e7ddd2] via-[#e7ddd2]/80 to-transparent lg:block" />

      <div className="absolute inset-0 flex flex-col justify-end px-6 pt-24 pb-20 sm:pb-24 lg:justify-center lg:px-16 lg:pb-0">
        <div className="mx-auto w-full max-w-7xl">
          <Reveal>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <p className="order-2 mb-6 text-sm font-medium tracking-[0.2em] text-gold-bright uppercase lg:order-1 lg:mb-3">
                {heroContent.subtitle}
              </p>

              <h1 className="order-1 mb-2 max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-6xl lg:order-2 lg:mb-6 lg:text-7xl">
                {heroFirstName}
                {heroLastName && (
                  <>
                    {" "}
                    <br className="hidden sm:block" />
                    {heroLastName}
                  </>
                )}
              </h1>

              <p className="order-3 mb-10 hidden max-w-md text-lg leading-relaxed text-ink/85 sm:block">
                {heroContent.taglineStart}
                <br />
                <em className="font-serif font-semibold text-gold-bright italic">
                  {heroContent.taglineHighlight}
                </em>{" "}
                <Heart size={18} className="inline-block text-gold-bright align-middle" />
              </p>

              <p className="order-4 mb-10 max-w-md text-base leading-relaxed text-ink/90 sm:hidden">
                {heroContent.mobileTagline}
              </p>

              <ul className="order-4 mb-10 hidden max-w-md space-y-4 sm:block">
                {heroContent.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-gold-bright text-gold-bright">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-ink/90">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="order-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
                <a
                  href={heroContent.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-bright px-12 py-4 text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:bg-ink sm:px-7 sm:py-3 sm:text-sm"
                >
                  {heroContent.primaryCta.label}
                  <WhatsappIcon size={14} />
                </a>
                <a
                  href={heroContent.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink/60 px-12 py-4 text-xs font-semibold tracking-wider text-ink uppercase transition-colors hover:bg-ink hover:text-white sm:px-7 sm:py-3 sm:text-sm"
                >
                  {heroContent.secondaryCta.label}
                  <User size={14} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

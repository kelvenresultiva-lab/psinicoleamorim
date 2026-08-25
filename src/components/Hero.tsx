import Image from "next/image";
import { ArrowRight, Check, User } from "lucide-react";
import { heroContent } from "@/data/content";
import Reveal from "./Reveal";
import WhatsappIcon from "./WhatsappIcon";

const [heroFirstName, ...heroRestName] = heroContent.title.split(" ");
const heroLastName = heroRestName.join(" ");

// Degradê horizontal do desktop: escuro (#080706) à esquerda, esmaecendo
// pra transparente por volta de 75% da largura, deixando a foto da Nicole
// livre à direita. Valores exatos vindos do spec de design do cliente.
const desktopScrimStyle = {
  backgroundImage:
    "linear-gradient(90deg, #080706 0%, #0A0807 37%, rgba(10,8,7,0.88) 48%, rgba(10,8,7,0.25) 62%, transparent 75%)",
};

export default function Hero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-cream sm:min-h-[780px] lg:min-h-0 lg:aspect-[1898/887] lg:w-full lg:bg-[#080706]">
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
        className="hidden object-cover object-[72%_20%] lg:block lg:brightness-[.88] lg:contrast-[1.05] lg:saturate-[.92]"
        sizes="100vw"
      />

      {/* Véu atrás do texto: no mobile sobe do rodapé (foto clara, texto
          escuro); no desktop é um degradê escuro contínuo da esquerda pra
          direita, sem corte reto, com texto claro por cima. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-white/90 via-white/50 to-transparent lg:hidden" />
      <div className="pointer-events-none absolute inset-0 hidden lg:block" style={desktopScrimStyle} />

      <div className="absolute inset-0 flex flex-col justify-end px-6 pt-24 pb-8 sm:pb-10 lg:justify-start lg:px-0 lg:pt-28 lg:pb-0">
        <div className="mx-auto w-full max-w-7xl lg:mx-auto lg:max-w-[1898px] lg:px-[13vw]">
          <Reveal>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <p className="order-1 mb-2 text-sm font-medium tracking-[0.2em] text-gold uppercase lg:order-1 lg:mb-0 lg:font-lato lg:text-[13px] lg:font-medium lg:tracking-[3px] lg:text-[#C95C35]">
                {heroContent.subtitle}
              </p>

              <h1 className="order-2 mb-6 max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-6xl lg:order-2 lg:mb-0 lg:text-[26px] lg:leading-tight lg:font-normal lg:text-[#F5F2ED]">
                {heroFirstName}
                {heroLastName && (
                  <>
                    {" "}
                    <br className="hidden sm:block lg:hidden" />
                    {heroLastName}
                  </>
                )}
              </h1>

              <span className="hidden lg:order-3 lg:mt-4 lg:mb-6 lg:block lg:h-px lg:w-10 lg:bg-[#C95C35]/70" />

              <p className="order-3 mb-2 hidden max-w-md text-lg leading-relaxed text-ink/85 sm:block lg:order-4 lg:mb-0 lg:font-serif lg:text-[52px] lg:leading-[1.08] lg:font-normal lg:text-[#F5F2ED]">
                {heroContent.taglineStart}
              </p>
              <p className="order-3 mb-10 hidden max-w-md text-lg leading-relaxed text-ink/85 sm:block lg:order-4 lg:mb-7 lg:font-serif lg:text-[52px] lg:leading-[1.08] lg:font-normal lg:text-[#F5F2ED]">
                {heroContent.taglineHighlight}
              </p>

              <p className="order-3 mb-10 hidden max-w-md text-lg leading-relaxed text-ink/85 sm:block lg:order-5 lg:mb-8 lg:max-w-[440px] lg:font-heebo lg:text-[17px] lg:leading-[1.6] lg:font-normal lg:text-[#F4F0EB]/70">
                {heroContent.taglineDescription}
              </p>

              <p className="order-4 mb-10 max-w-md text-base leading-relaxed text-ink/90 sm:hidden">
                {heroContent.mobileTagline}
              </p>

              <ul className="order-4 mb-10 hidden max-w-md space-y-4 sm:block lg:order-6 lg:mb-10 lg:hidden">
                {heroContent.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-gold-bright text-gold-bright">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-ink/90">{bullet}</span>
                  </li>
                ))}
              </ul>

              <p className="hidden lg:order-6 lg:mb-10 lg:block lg:font-heebo lg:text-[14px] lg:text-[#C95C35]/70">
                {heroContent.bullets.join("  ·  ")}
              </p>

              <div className="order-5 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:order-7 lg:w-auto lg:flex-row lg:flex-wrap lg:items-center lg:justify-start lg:gap-6">
                <a
                  href={heroContent.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-float inline-flex w-[85%] items-center justify-center gap-2 rounded-full border border-transparent bg-gold-bright px-8 py-3 font-lato text-sm font-normal tracking-[1.3px] text-white uppercase transition-colors duration-300 hover:border-gold-bright hover:bg-transparent hover:text-gold-bright sm:w-auto lg:w-auto lg:rounded-tl-md lg:rounded-tr-md lg:rounded-br-md lg:rounded-bl-md lg:bg-[#C55F37] lg:px-7 lg:py-3.5 lg:text-[13px] lg:tracking-[1.5px] lg:hover:border-[#C55F37] lg:hover:bg-transparent lg:hover:text-[#C55F37]"
                >
                  <span className="lg:hidden">{heroContent.primaryCta.mobileLabel}</span>
                  <span className="hidden lg:inline">{heroContent.primaryCta.label}</span>
                  <span className="lg:hidden">
                    <WhatsappIcon size={14} />
                  </span>
                  <ArrowRight size={16} className="hidden lg:block" />
                </a>
                <a
                  href={heroContent.secondaryCta.href}
                  className="hover-float inline-flex w-[85%] items-center justify-center gap-2 rounded-full border border-gold-bright bg-white px-8 py-3 font-lato text-sm font-normal tracking-[1.3px] text-ink uppercase transition-colors duration-300 hover:bg-gold-bright hover:text-white sm:w-auto lg:w-auto lg:justify-start lg:border-0 lg:bg-transparent lg:p-0 lg:font-heebo lg:text-[15px] lg:font-normal lg:tracking-normal lg:text-[#C95C35] lg:normal-case lg:underline lg:decoration-[#C95C35]/40 lg:underline-offset-4 lg:hover:bg-transparent lg:hover:text-[#C95C35]">
                  <span className="lg:hidden">{heroContent.secondaryCta.mobileLabel}</span>
                  <span className="hidden lg:inline">{heroContent.secondaryCta.label}</span>
                  <User size={14} className="lg:hidden" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

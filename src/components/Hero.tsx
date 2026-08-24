import Image from "next/image";
import { Check, User } from "lucide-react";
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
    <section className="relative min-h-[760px] overflow-hidden bg-white sm:min-h-[820px] lg:min-h-0 lg:aspect-[1898/887] lg:w-full lg:bg-[#080706]">
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

      <div className="absolute inset-0 flex flex-col justify-end px-6 pt-24 pb-20 sm:pb-24 lg:justify-center lg:px-0 lg:pt-0 lg:pb-0">
        <div className="mx-auto w-full max-w-7xl lg:mx-auto lg:max-w-[1898px] lg:px-[9vw]">
          <Reveal>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <p className="order-2 mb-6 text-sm font-medium tracking-[0.2em] text-gold-bright uppercase lg:order-1 lg:mb-0 lg:text-[13px] lg:font-semibold lg:tracking-[0.22em] lg:text-[#C95C35]">
                {heroContent.subtitle}
              </p>

              <span className="hidden lg:order-1 lg:mt-3 lg:mb-5 lg:block lg:h-[2px] lg:w-[50px] lg:bg-[#C95C35]" />

              <h1 className="order-1 mb-2 max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-6xl lg:order-2 lg:mb-6 lg:max-w-none lg:text-[76px] lg:leading-[0.95] lg:tracking-[-0.025em] lg:whitespace-nowrap lg:text-[#F5F2ED]">
                {heroFirstName}
                {heroLastName && (
                  <>
                    {" "}
                    <br className="hidden sm:block lg:hidden" />
                    {heroLastName}
                  </>
                )}
              </h1>

              <p className="order-3 mb-2 hidden max-w-md text-lg leading-relaxed text-ink/85 sm:block lg:order-3 lg:mb-3 lg:max-w-[510px] lg:text-[28px] lg:leading-[1.3] lg:font-normal lg:text-[#F4F0EB]">
                {heroContent.taglineStart}
              </p>
              <p className="order-3 mb-10 hidden max-w-md text-lg leading-relaxed text-ink/85 sm:block lg:order-3 lg:mb-9 lg:max-w-[500px] lg:text-[19px] lg:leading-[1.55] lg:text-[#D8C1A2]">
                {heroContent.taglineHighlight}
              </p>

              <p className="order-4 mb-10 max-w-md text-base leading-relaxed text-ink/90 sm:hidden">
                {heroContent.mobileTagline}
              </p>

              <ul className="order-4 mb-10 hidden max-w-md space-y-4 sm:block lg:mb-10 lg:space-y-[20px]">
                {heroContent.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 lg:items-center lg:gap-[14px]">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-gold-bright text-gold-bright lg:mt-0 lg:border-[#D05F35] lg:text-[#D05F35]">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-ink/90 lg:text-[#F4F0EB]">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="order-5 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start lg:gap-[30px]">
                <a
                  href={heroContent.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-float inline-flex w-full items-center justify-center gap-2 rounded-tl-[15px] rounded-br-[15px] border border-transparent bg-gold-bright px-8 py-3 font-lato text-sm font-normal tracking-[1.3px] text-white uppercase transition-colors duration-300 hover:border-gold-bright hover:bg-transparent hover:text-gold-bright sm:w-auto lg:h-16 lg:w-[360px] lg:bg-[#C55F37] lg:hover:border-[#C55F37] lg:hover:bg-transparent lg:hover:text-[#C55F37]"
                >
                  {heroContent.primaryCta.label}
                  <WhatsappIcon size={14} />
                </a>
                <a
                  href={heroContent.secondaryCta.href}
                  className="hover-float inline-flex w-full items-center justify-center gap-2 rounded-tl-[15px] rounded-br-[15px] border border-gold-bright bg-white px-8 py-3 font-lato text-sm font-normal tracking-[1.3px] text-ink uppercase transition-colors duration-300 hover:bg-gold-bright hover:text-white sm:w-auto lg:h-16 lg:w-[270px] lg:border-[#C55F37] lg:bg-transparent lg:text-[#C55F37] lg:hover:bg-[#C55F37] lg:hover:text-white"
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

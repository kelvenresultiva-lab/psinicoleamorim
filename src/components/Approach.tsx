import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Sprout,
  User,
  type LucideIcon,
} from "lucide-react";
import { approachContent } from "@/data/content";
import Reveal from "./Reveal";

const pillarIconMap: Record<string, LucideIcon> = {
  user: User,
  sprout: Sprout,
};

export default function Approach() {
  // Título mobile quebra a última palavra do heading em uma segunda linha
  // em destaque — só a formatação muda; o texto continua vindo do mesmo
  // campo usado no desktop.
  const headingWords = approachContent.heading.trim().split(" ");
  const headingHighlightWord = headingWords.pop() ?? "";
  const headingLead = headingWords.join(" ");

  return (
    <section id="abordagem" className="bg-dark py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          {/* ===== Composição editorial exclusiva do mobile ===== */}
          <div className="lg:hidden">
            <Reveal>
              <div className="flex flex-col items-center text-center">
                <p className="text-sm font-semibold tracking-[0.2em] text-gold uppercase">
                  {approachContent.eyebrow}
                </p>
                <span className="mt-4 mb-7 h-px w-10 bg-gold" />
                <h2 className="font-serif text-4xl leading-tight text-white">
                  {headingLead}
                  <br />
                  <em className="text-gold italic">{headingHighlightWord}</em>
                </h2>
              </div>

              <div className="mt-8 space-y-5">
                {approachContent.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mx-auto max-w-[300px] text-center leading-relaxed text-white/60"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <div className="mt-12 mb-12">
              {approachContent.pillars.map((pillar, index) => {
                const Icon = pillarIconMap[pillar.icon];
                return (
                  <Reveal key={pillar.label} delayMs={index * 120}>
                    <div
                      className={
                        "flex items-start gap-4" +
                        (index > 0
                          ? " mt-8 border-t border-gold/15 pt-8"
                          : "")
                      }
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-gold">
                        <Icon size={20} strokeWidth={1.5} />
                      </span>
                      <div className="pt-1">
                        <p className="mb-2 text-xs font-semibold tracking-[0.15em] text-gold uppercase">
                          {pillar.label}
                        </p>
                        <p className="leading-relaxed text-white/60">
                          {pillar.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal>
              <a
                href="#contato"
                className="mt-12 flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold tracking-wider text-white uppercase transition-colors hover:bg-gold-dark"
              >
                {approachContent.ctaLabel}
                <ArrowRight size={16} />
              </a>
              <a
                href={approachContent.secondaryCta.href}
                className="mt-[18px] flex items-center justify-center gap-2 text-xs font-medium text-white/40 hover:text-gold"
              >
                <CalendarDays size={14} />
                {approachContent.secondaryCta.label}
              </a>
            </Reveal>
          </div>

          {/* ===== Versão desktop (inalterada) ===== */}
          <Reveal className="hidden lg:block">
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-gold uppercase">
              {approachContent.eyebrow}
            </p>

            <h2 className="mb-6 text-left font-serif text-4xl leading-tight text-white">
              {approachContent.heading}
              {approachContent.headingHighlight && (
                <>
                  {" "}
                  <em className="text-gold italic">
                    {approachContent.headingHighlight}
                  </em>
                </>
              )}
            </h2>

            <div className="mb-10 space-y-4">
              {approachContent.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-white/70">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Blocos editoriais, no lugar das antigas barras de progresso */}
            <div className="mb-8 flex flex-col gap-6">
              {approachContent.pillars.map((pillar) => (
                <div key={pillar.label}>
                  <p className="mb-2 text-xs font-semibold tracking-[0.15em] text-gold uppercase">
                    {pillar.label}
                  </p>
                  <p className="leading-relaxed text-white/70">{pillar.text}</p>
                </div>
              ))}
            </div>

            <a
              href="#contato"
              className="inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold tracking-wider text-white uppercase transition-colors hover:bg-gold-dark"
            >
              {approachContent.ctaLabel}
            </a>
          </Reveal>
        </div>

        <Reveal
          delayMs={150}
          className="relative mx-auto hidden w-full max-w-md lg:block"
        >
          <div className="relative aspect-[6/7] w-full overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={approachContent.image.src}
              alt={approachContent.image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 28rem, 90vw"
            />
          </div>
          <div className="absolute -bottom-6 -left-2 flex h-32 w-32 -rotate-3 items-center justify-center rounded-full bg-gold p-4 text-center shadow-[0_12px_30px_-8px_rgba(0,0,0,0.35)] ring-4 ring-white/30 sm:-left-8">
            <span className="font-serif text-sm leading-tight text-white">
              {approachContent.badge}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

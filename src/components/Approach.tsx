import Image from "next/image";
import { User, HeartHandshake, CalendarDays, type LucideIcon } from "lucide-react";
import { approachContent } from "@/data/content";
import ProgressBar from "./ProgressBar";
import Reveal from "./Reveal";
import WhatsappIcon from "./WhatsappIcon";

const blockIconMap: Record<string, LucideIcon> = {
  user: User,
  "heart-handshake": HeartHandshake,
};

export default function Approach() {
  return (
    <section id="abordagem" className="bg-dark py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          {/* ===== Composição editorial exclusiva do mobile ===== */}
          <div className="lg:hidden">
            <Reveal>
              <span className="mx-auto mb-5 block w-fit rounded-full border border-gold/40 px-4 py-2 text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">
                {approachContent.mobile.eyebrow}
              </span>
              <h2 className="mb-6 text-center font-serif text-[clamp(1.75rem,7vw,2.25rem)] leading-[1.3] text-white">
                {approachContent.mobile.headingStart}{" "}
                <em className="text-gold italic">
                  {approachContent.mobile.headingHighlight}
                </em>
              </h2>
              <p className="mx-auto mb-12 max-w-sm text-center leading-relaxed text-white/60">
                {approachContent.mobile.intro}
              </p>
            </Reveal>

            <div className="mb-12">
              {approachContent.mobile.blocks.map((block, index) => {
                const Icon = blockIconMap[block.icon];
                return (
                  <Reveal key={block.number} delayMs={index * 120}>
                    <div
                      className={
                        "text-center" +
                        (index > 0 ? " mt-8 border-t border-gold/20 pt-8" : "")
                      }
                    >
                      <div className="mb-4 flex items-center justify-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-gold/80">
                          <Icon size={17} strokeWidth={1.25} />
                        </span>
                        <span className="font-serif text-sm tracking-wide text-gold/80">
                          {block.number}
                        </span>
                      </div>
                      <h3 className="mb-2 font-serif text-xl text-white">
                        {block.title}
                      </h3>
                      <p className="mx-auto max-w-xs leading-relaxed text-white/60">
                        {block.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal>
              <a
                href="#contato"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold tracking-wider text-white uppercase transition-colors hover:bg-gold-dark"
              >
                {approachContent.ctaLabel}
                <WhatsappIcon size={16} />
              </a>
              <a
                href={approachContent.secondaryCta.href}
                className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-white/45 hover:text-gold"
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
              {approachContent.heading}{" "}
              <em className="text-gold italic">{approachContent.headingHighlight}</em>
            </h2>

            <div className="mb-8 space-y-4">
              {approachContent.paragraphs.map((paragraph) => (
                <p key={paragraph.text} className="leading-relaxed text-white/70">
                  {paragraph.text}
                </p>
              ))}
            </div>

            {/* Barras de progresso, no mesmo estilo do site da Miriam Souza */}
            <div className="mb-8 flex flex-col gap-5">
              {approachContent.progressBars.map((bar) => (
                <ProgressBar key={bar.label} label={bar.label} value={bar.value} />
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

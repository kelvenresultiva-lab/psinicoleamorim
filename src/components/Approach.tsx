import Image from "next/image";
import { User, HeartHandshake, Heart, CalendarDays, type LucideIcon } from "lucide-react";
import { approachContent } from "@/data/content";
import ProgressBar from "./ProgressBar";
import Reveal from "./Reveal";
import WhatsappIcon from "./WhatsappIcon";

const paragraphIconMap: Record<string, LucideIcon> = {
  user: User,
  "heart-handshake": HeartHandshake,
};

export default function Approach() {
  return (
    <section id="abordagem" className="bg-dark py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          {/* Eyebrow: pill no mobile, rótulo simples no desktop */}
          <span className="mx-auto mb-4 block w-fit rounded-full border border-gold/50 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase lg:hidden">
            {approachContent.eyebrow}
          </span>
          <p className="mb-3 hidden text-sm font-semibold tracking-[0.2em] text-gold uppercase lg:block">
            {approachContent.eyebrow}
          </p>

          <h2 className="mb-6 text-center font-serif text-4xl leading-tight text-white lg:text-left">
            {approachContent.heading}{" "}
            <em className="text-gold italic">{approachContent.headingHighlight}</em>
          </h2>

          {/* Divisor decorativo — só no mobile */}
          <div className="mb-8 flex items-center gap-4 lg:hidden">
            <span className="h-px flex-1 bg-gold/40" />
            <Heart size={18} className="shrink-0 text-gold" />
            <span className="h-px flex-1 bg-gold/40" />
          </div>

          {/* Parágrafos: linhas com ícone no mobile, texto simples no desktop */}
          <div className="mb-8 space-y-5 lg:hidden">
            {approachContent.paragraphs.map((paragraph) => {
              const Icon = paragraphIconMap[paragraph.icon];
              return (
                <div key={paragraph.text} className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Icon size={24} strokeWidth={1.75} />
                  </span>
                  <p className="leading-relaxed text-white/80">{paragraph.text}</p>
                </div>
              );
            })}
          </div>
          <div className="mb-8 hidden space-y-4 lg:block">
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

          {/* CTA: botão com ícone + link secundário no mobile, botão simples no desktop */}
          <div className="lg:hidden">
            <a
              href="#contato"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-3 text-sm font-semibold tracking-wider text-white uppercase transition-colors hover:bg-gold-dark"
            >
              {approachContent.ctaLabel}
              <WhatsappIcon size={16} />
            </a>
            <a
              href={approachContent.secondaryCta.href}
              className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-gold hover:text-gold-dark"
            >
              <CalendarDays size={16} />
              {approachContent.secondaryCta.label}
            </a>
          </div>
          <a
            href="#contato"
            className="hidden rounded-full bg-gold px-8 py-3 text-sm font-semibold tracking-wider text-white uppercase transition-colors hover:bg-gold-dark lg:inline-block"
          >
            {approachContent.ctaLabel}
          </a>
        </Reveal>

        <Reveal delayMs={150} className="relative mx-auto w-full max-w-md">
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

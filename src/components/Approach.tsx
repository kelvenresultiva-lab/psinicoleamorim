import Image from "next/image";
import { approachContent } from "@/data/content";
import Reveal from "./Reveal";
import ProgressBar from "./ProgressBar";

// Botão no mesmo estilo do site da Miriam Souza: cantos assimétricos,
// caixa alta em Lato, "levanta" no hover.
const ctaClassName =
  "hover-float inline-flex items-center justify-center gap-3 rounded-tl-[15px] rounded-br-[15px] border border-transparent bg-gold-bright px-8 py-3 font-lato text-sm font-normal uppercase tracking-[1.3px] text-white transition-colors duration-300 hover:border-gold-bright hover:bg-transparent hover:text-gold-bright";

export default function Approach() {
  return (
    <section id="abordagem" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="flex flex-col gap-6">
          <p className="font-lato text-[15px] font-semibold tracking-[2.3px] text-gold-bright uppercase">
            {approachContent.eyebrow}
          </p>

          <h2 className="font-serif text-3xl leading-tight font-semibold text-ink sm:text-4xl">
            {approachContent.title}
          </h2>

          {approachContent.paragraphs.map((paragraph) => (
            <p key={paragraph} className="font-heebo text-base leading-relaxed font-light text-ink">
              {paragraph}
            </p>
          ))}

          <div className="flex flex-col gap-5">
            {approachContent.progressBars.map((bar) => (
              <ProgressBar key={bar.label} label={bar.label} value={bar.value} />
            ))}
          </div>

          <div>
            <a href="#contato" className={ctaClassName}>
              {approachContent.ctaLabel}
            </a>
          </div>
        </Reveal>

        <Reveal delayMs={150} className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={approachContent.image.src}
              alt={approachContent.image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 28rem, 90vw"
            />
          </div>
          <div className="absolute -top-6 left-0 z-10 rounded-[15px] border border-line/60 bg-white px-8 py-5 text-center shadow-[0_20px_45px_-15px_rgba(20,20,20,0.35)] sm:-left-6">
            <span className="block font-serif text-3xl font-semibold text-gold-bright">
              {approachContent.stat.value}
            </span>
            <span className="mx-auto mt-2 block h-px w-8 bg-gold-bright/40" />
            <span className="mt-2 block font-lato text-xs font-bold tracking-[1.5px] text-ink uppercase">
              {approachContent.stat.label}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

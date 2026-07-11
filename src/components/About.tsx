import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { aboutContent } from "@/data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5.2] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={aboutContent.image.src}
              alt={aboutContent.image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 28rem, 90vw"
            />
          </div>

          <div className="absolute -top-6 -right-2 flex h-28 w-28 rotate-6 items-center justify-center rounded-full bg-gold p-3 text-center shadow-lg sm:-right-6">
            <span className="font-serif text-sm leading-tight text-white">
              {aboutContent.experienceBadge}
            </span>
          </div>

          <div className="relative z-10 -mt-10 mx-4 flex items-start gap-4 rounded-xl border border-black/[0.06] bg-white p-5 shadow-lg">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream">
              <GraduationCap size={20} className="text-gold-dark" />
            </div>
            <p className="text-sm leading-relaxed text-[#666666]">
              {aboutContent.formationText}
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={150}>
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-gold-dark uppercase">
            {aboutContent.eyebrow}
          </p>
          <h2 className="mb-6 font-serif text-3xl text-[#1A1A1A] sm:text-4xl">
            {aboutContent.heading}
          </h2>
          <div className="space-y-4">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-[#4a4a4a]">
                {paragraph}
              </p>
            ))}
          </div>
          <a
            href="#contato"
            className="mt-8 inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold tracking-wider text-white uppercase transition-colors hover:bg-gold-dark"
          >
            {aboutContent.ctaLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

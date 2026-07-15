import Image from "next/image";
import { approachContent } from "@/data/content";
import Reveal from "./Reveal";

export default function Approach() {
  return (
    <section id="abordagem" className="bg-dark py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-gold uppercase">
            {approachContent.eyebrow}
          </p>
          <h2 className="mb-6 font-serif text-3xl text-white sm:text-4xl">
            {approachContent.heading}
          </h2>
          <div className="mb-8 space-y-4">
            {approachContent.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-white/70">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mb-8 space-y-4">
            {approachContent.highlights.map((item, index) => (
              <div key={item.title}>
                <p
                  className={`font-serif text-lg underline decoration-2 underline-offset-4 ${
                    index % 2 === 0
                      ? "text-gold decoration-gold"
                      : "text-accent decoration-accent"
                  }`}
                >
                  {item.title}
                </p>
                <p className="text-sm text-white/60">{item.subtitle}</p>
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
          <div className="absolute -bottom-6 -left-2 flex h-32 w-32 -rotate-6 items-center justify-center rounded-full bg-gold p-4 text-center shadow-lg sm:-left-8">
            <span className="font-serif text-sm leading-tight text-white">
              {approachContent.badge}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

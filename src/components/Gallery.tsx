import Image from "next/image";
import { galleryContent } from "@/data/content";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section id="consultorio" className="bg-white pt-20 pb-10 lg:pt-28 lg:pb-14">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-gold-dark uppercase">
            {galleryContent.eyebrow}
          </p>
          <h2 className="mb-5 font-serif text-3xl text-charcoal sm:text-4xl">
            {galleryContent.heading}
          </h2>
          <p className="text-[#4a4a4a]">{galleryContent.subtext}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 flex max-w-5xl snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible md:pb-0 lg:px-8 [&::-webkit-scrollbar]:hidden">
        {galleryContent.images.map((image, i) => (
          <Reveal
            key={image.src}
            delayMs={i * 120}
            className="w-[78%] shrink-0 snap-center sm:w-[45%] md:w-auto"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                style={{ objectPosition: image.objectPosition }}
                sizes="(min-width: 768px) 30vw, 90vw"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

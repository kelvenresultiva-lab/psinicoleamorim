import { Star, Quote } from "lucide-react";
import { testimonialsContent } from "@/data/content";
import Reveal from "./Reveal";
import ReviewAvatar from "./ReviewAvatar";

// Âmbar usado em avaliações com estrelas (convenção comum a vários sites
// de review, não é uma cor exclusiva de marca) — só nessa seção, para dar
// a leitura visual de "avaliação" que o resto da paleta (laranja) não tem.
const STAR_COLOR = "#FBBC04";

function Stars({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          style={i < count ? { fill: STAR_COLOR, color: STAR_COLOR } : undefined}
          className={i < count ? "" : "text-[#DADCE0]"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white pt-10 pb-20 lg:pt-14 lg:pb-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <h2 className="mb-8 text-center font-serif text-3xl text-charcoal sm:text-4xl">
            {testimonialsContent.heading}
          </h2>

          <div className="mx-auto mb-10 flex max-w-md flex-col items-center gap-1 text-center">
            <div className="flex items-center gap-3">
              <span className="font-sans text-4xl font-semibold text-[#202124]">
                {testimonialsContent.summary.rating.toFixed(1)}
              </span>
              <div className="flex flex-col items-start gap-1">
                <Stars count={5} size={20} />
                <span className="text-xs text-[#70757a]">
                  {testimonialsContent.summary.reviewCount} avaliações
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {testimonialsContent.reviews.map((review, index) => (
            <Reveal
              key={review.name}
              delayMs={index * 120}
              className="w-[80%] shrink-0 snap-center sm:w-auto"
            >
              <div className="relative h-full rounded-lg border border-black/10 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
                <Quote
                  size={28}
                  className="absolute top-5 right-5 text-black/5"
                  fill="currentColor"
                />
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[#F8F9FA]">
                    <ReviewAvatar variant={review.avatar} />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-sans text-sm font-medium text-[#202124]">
                      {review.name}
                    </p>
                    <p className="text-xs text-[#70757a]">{review.timeAgo}</p>
                  </div>
                </div>
                <Stars count={review.rating} />
                <p className="mt-3 line-clamp-4 font-sans text-sm leading-relaxed text-[#3c4043]">
                  {review.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

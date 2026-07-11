import { Star } from "lucide-react";
import { testimonialsContent } from "@/data/content";
import Reveal from "./Reveal";
import ReviewAvatar from "./ReviewAvatar";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? "fill-gold text-gold" : "text-[#D9D0BE]"}
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
          <h2 className="mb-10 text-center font-serif text-3xl text-[#1A1A1A] sm:text-4xl">
            {testimonialsContent.heading}
          </h2>
        </Reveal>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
          <Reveal className="w-[80%] shrink-0 snap-center sm:w-auto">
            <div className="flex h-full flex-col items-center gap-3 rounded-2xl bg-cream p-6 text-center shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-xl font-semibold text-white">
                {testimonialsContent.summary.name.charAt(0)}
              </div>
              <p className="font-serif text-lg text-[#1A1A1A]">
                {testimonialsContent.summary.name}
              </p>
              <p className="text-sm text-[#666666]">
                {testimonialsContent.summary.subtitle}
              </p>
              <div className="flex items-center gap-2">
                <Stars count={5} />
                <span className="text-sm font-semibold text-[#333333]">
                  {testimonialsContent.summary.rating.toFixed(1)}
                </span>
              </div>
              <p className="text-xs text-[#888888]">
                {testimonialsContent.summary.reviewCount} avaliações
              </p>
            </div>
          </Reveal>

          {testimonialsContent.reviews.map((review, index) => (
            <Reveal
              key={review.name}
              delayMs={(index + 1) * 120}
              className="w-[80%] shrink-0 snap-center sm:w-auto"
            >
              <div className="h-full rounded-2xl bg-cream p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white">
                    <ReviewAvatar variant={review.avatar} />
                  </div>
                  <div>
                    <p className="font-medium text-[#1A1A1A]">{review.name}</p>
                    <p className="text-xs text-[#888888]">{review.timeAgo}</p>
                  </div>
                </div>
                <Stars count={review.rating} />
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-[#4a4a4a]">
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

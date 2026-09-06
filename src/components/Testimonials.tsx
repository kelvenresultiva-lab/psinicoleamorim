import { Star } from "lucide-react";
import { testimonialsContent } from "@/data/content";
import Reveal from "./Reveal";
import GoogleLogo from "./GoogleLogo";

const AVATAR_COLORS = ["#4285F4", "#EA4335", "#34A853", "#AB47BC", "#F4B400"];

function avatarColor(name: string) {
  return AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
}

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
          <div className="mb-3 flex items-center justify-center gap-2">
            <GoogleLogo size={22} />
            <span className="text-sm font-medium tracking-wide text-[#5f6368]">
              Avaliações do Google
            </span>
          </div>
          <h2 className="mb-10 text-center font-serif text-3xl text-charcoal sm:text-4xl">
            {testimonialsContent.heading}
          </h2>
        </Reveal>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
          <Reveal className="w-[80%] shrink-0 snap-center sm:w-auto">
            <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-[#E8EAED] bg-white p-6 text-center shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-xl font-semibold text-white">
                {testimonialsContent.summary.name.charAt(0)}
              </div>
              <p className="font-serif text-lg text-charcoal">
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
                {testimonialsContent.summary.reviewCount} avaliações no Google
              </p>
            </div>
          </Reveal>

          {testimonialsContent.reviews.map((review, index) => (
            <Reveal
              key={review.name}
              delayMs={(index + 1) * 120}
              className="w-[80%] shrink-0 snap-center sm:w-auto"
            >
              <div className="h-full rounded-2xl border border-[#E8EAED] bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-start gap-3">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-medium text-white"
                    style={{ backgroundColor: avatarColor(review.name) }}
                    aria-hidden="true"
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-medium text-charcoal">
                      {review.name}
                    </p>
                    <p className="truncate text-xs text-[#888888]">
                      {review.badge}
                    </p>
                  </div>
                </div>
                <div className="mb-1 flex items-center gap-2">
                  <Stars count={review.rating} />
                  <span className="text-xs text-[#888888]">{review.timeAgo}</span>
                </div>
                <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-[#4a4a4a]">
                  {review.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex justify-center">
            <a
              href={testimonialsContent.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#E8EAED] px-5 py-2.5 text-sm font-medium text-[#3c4043] transition-colors hover:bg-[#F8F9FA]"
            >
              <GoogleLogo size={18} />
              Ver todas as avaliações no Google
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

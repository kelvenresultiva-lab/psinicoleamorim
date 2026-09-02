import { MessageCircleHeart, Users, User, type LucideIcon } from "lucide-react";
import { introContent } from "@/data/content";
import Reveal from "./Reveal";

const iconMap: Record<string, LucideIcon> = {
  "message-heart": MessageCircleHeart,
  users: Users,
  user: User,
};

export default function Intro() {
  return (
    <section className="border-t-4 border-gold bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-16 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-0 lg:divide-x lg:divide-gold/25">
          <Reveal className="lg:w-[22%] lg:pr-10">
            <h2 className="font-serif text-3xl leading-snug text-charcoal lg:text-4xl">
              {introContent.heading}{" "}
              <em className="text-gold italic">{introContent.headingHighlight}</em>
            </h2>
            <span className="mt-6 block h-px w-20 bg-gold" />
          </Reveal>

          <Reveal delayMs={100} className="lg:w-[26%] lg:px-10">
            <p className="leading-relaxed text-[#4a4a4a]">{introContent.paragraph}</p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:gap-10 sm:grid-cols-3 lg:w-[52%] lg:flex-1 lg:pl-10">
            {introContent.items.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <Reveal key={item.title} delayMs={(index + 1) * 120}>
                  <div className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-sm sm:block sm:bg-transparent sm:p-0 sm:text-center sm:shadow-none">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold sm:mx-auto sm:mb-4">
                      <Icon size={28} strokeWidth={1.75} />
                    </div>
                    <div className="border-l border-gold/30 pl-5 sm:border-0 sm:pl-0">
                      <h3 className="font-serif text-lg text-charcoal">{item.title}</h3>
                      <span className="mt-2 mb-3 hidden h-px w-8 bg-gold sm:mx-auto sm:block" />
                      <p className="text-sm leading-relaxed text-[#666666]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqContent } from "@/data/content";
import Reveal from "./Reveal";

const ctaClassName =
  "hover-float inline-flex items-center justify-center gap-2 rounded-tl-[15px] rounded-br-[15px] border border-transparent bg-gold-bright px-8 py-3 font-lato text-sm font-normal uppercase tracking-[1.3px] text-white transition-colors duration-300 hover:border-gold-bright hover:bg-transparent hover:text-gold-bright";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-5 rounded-2xl border border-line/70 p-8 lg:p-10">
            <div>
              <p className="text-[13px] font-semibold tracking-[0.22em] text-gold-bright uppercase">
                {faqContent.info.eyebrow}
              </p>
              <span className="mt-3 block h-[2px] w-[50px] bg-gold-bright" />
            </div>
            <h2 className="font-serif text-3xl leading-[0.95] font-medium tracking-[-0.025em] text-ink">
              {faqContent.info.heading}
            </h2>
            <div className="space-y-4">
              {faqContent.info.paragraphs.map((paragraph) => (
                <p key={paragraph} className="font-heebo leading-relaxed font-light text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
            <div>
              <a href="#contato" className={ctaClassName}>
                {faqContent.info.ctaLabel}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={150}>
          <div className="flex flex-col">
            {faqContent.questions.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;
              return (
                <div key={item.question} className="border-b border-gold-bright/25 py-6 first:pt-0">
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 text-left"
                    >
                      <span className="font-serif text-lg font-semibold text-ink">
                        {item.question}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-gold-bright transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-3 font-heebo text-base leading-relaxed font-light text-muted">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

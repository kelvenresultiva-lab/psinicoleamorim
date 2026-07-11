"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqContent } from "@/data/content";
import Reveal from "./Reveal";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="rounded-2xl bg-cream p-8 lg:p-10">
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-gold-dark uppercase">
              {faqContent.info.eyebrow}
            </p>
            <h2 className="mb-6 font-serif text-3xl text-[#1A1A1A]">
              {faqContent.info.heading}
            </h2>
            <div className="mb-8 space-y-4">
              {faqContent.info.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-[#4a4a4a]">
                  {paragraph}
                </p>
              ))}
            </div>
            <a
              href="#contato"
              className="inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold tracking-wider text-white uppercase transition-colors hover:bg-gold-dark"
            >
              {faqContent.info.ctaLabel}
            </a>
          </div>
        </Reveal>

        <Reveal delayMs={150}>
          <div className="space-y-3">
            {faqContent.questions.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;
              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-xl border border-black/[0.06] bg-white shadow-sm"
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-medium text-[#1A1A1A]">
                        {item.question}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-gold transition-transform ${
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
                      <p className="px-6 pb-5 text-sm leading-relaxed text-[#666666]">
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

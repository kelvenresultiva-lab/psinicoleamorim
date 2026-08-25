"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, CalendarDays } from "lucide-react";
import { navLinks, siteConfig, headerCta, heroContent } from "@/data/content";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="topo" className="sticky top-0 right-0 left-0 z-50">
      {/* O blur fica num wrapper interno (não no <header>) para que o
          overlay mobile abaixo, que usa position:fixed, não seja contido
          por esse backdrop-filter (filter cria um novo containing block
          para fixed, o que quebrava o overlay em tela cheia). */}
      <div className="relative z-50 bg-[#FCF8F5] shadow-sm backdrop-blur-sm lg:bg-white/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#topo" className="flex items-center gap-3">
            <Image
              src="/images/logo-mark.png"
              alt={`Logo de ${siteConfig.professionalNameShort}`}
              width={280}
              height={387}
              priority
              className="h-12 w-auto shrink-0 object-contain"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-lg text-charcoal">
                {siteConfig.professionalNameShort}
              </span>
              <span className="text-[11px] font-medium tracking-[0.15em] text-gold-dark uppercase">
                {heroContent.subtitle}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#333333] transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={headerCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:bg-gold-dark lg:inline-flex"
          >
            {headerCta.label}
            <CalendarDays size={15} />
          </a>

          <button
            type="button"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-[#333333] lg:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center gap-8 overflow-y-auto bg-white px-6 pt-28 pb-12 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-[#333333] hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={headerCta.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 text-sm font-semibold tracking-wider text-white uppercase hover:bg-gold-dark"
          >
            {headerCta.label}
            <CalendarDays size={16} />
          </a>
        </div>
      )}
    </header>
  );
}

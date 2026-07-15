import { footerContent, siteConfig } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-dark py-14 text-white/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <p className="mb-2 font-serif text-xl text-white">
              {siteConfig.professionalName}
            </p>
            <p className="text-sm">
              {siteConfig.title} — {siteConfig.crp}
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold tracking-wider text-gold uppercase">
              Links Rápidos
            </p>
            <ul className="space-y-2">
              {footerContent.quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold tracking-wider text-gold uppercase">
              {footerContent.schedule.heading}
            </p>
            {footerContent.schedule.lines.map((line) => (
              <p key={line} className="text-sm">
                {line}
              </p>
            ))}
            <p className="mt-2 text-xs text-white/50">
              {footerContent.schedule.note}
            </p>
            <a
              href={`https://wa.me/${siteConfig.phoneWhatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full bg-gold px-6 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:bg-gold-dark"
            >
              {footerContent.ctaLabel}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.professionalName}. Todos
            os direitos reservados.
          </p>
          <p>{footerContent.developerCredit}</p>
        </div>
      </div>
    </footer>
  );
}

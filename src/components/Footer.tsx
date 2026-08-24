import { footerContent, siteConfig } from "@/data/content";
import InstagramIcon from "./InstagramIcon";

const ctaClassName =
  "hover-float inline-flex items-center justify-center gap-2 rounded-tl-[15px] rounded-br-[15px] border border-transparent bg-gold-bright px-6 py-2.5 font-lato text-xs font-normal uppercase tracking-[1.3px] text-white transition-colors duration-300 hover:border-gold-bright hover:bg-transparent hover:text-gold-bright";

export default function Footer() {
  return (
    <footer className="bg-graphite py-14 text-white/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <p className="mb-2 font-serif text-xl text-white">
              {siteConfig.professionalName}
            </p>
            <p className="font-lato text-sm tracking-[1px] text-gold-bright uppercase">
              {siteConfig.title} — {siteConfig.crp}
            </p>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-heebo text-sm transition-colors hover:text-gold-bright"
            >
              <InstagramIcon size={18} />
              {siteConfig.instagramHandle}
            </a>
          </div>

          <div>
            <p className="mb-4 font-serif text-lg font-semibold text-white">
              Links Rápidos
            </p>
            <ul className="space-y-2">
              {footerContent.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-lato text-sm font-light hover:text-gold-bright"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-serif text-lg font-semibold text-white">
              {footerContent.schedule.heading}
            </p>
            {footerContent.schedule.lines.map((line) => (
              <p key={line} className="font-heebo text-sm font-light">
                {line}
              </p>
            ))}
            <p className="mt-2 font-heebo text-xs font-light text-white/50">
              {footerContent.schedule.note}
            </p>
            <a
              href={`https://wa.me/${siteConfig.phoneWhatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-5 ${ctaClassName}`}
            >
              {footerContent.ctaLabel}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 font-lato text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
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

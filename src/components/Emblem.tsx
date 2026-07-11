// Selo circular com texto curvo (topo/base) ao redor de uma inicial, usado
// como logo compacto no header mobile (onde não cabe o lockup com nome).
// Usa <textPath> para curvar o texto ao longo de um arco.
export default function Emblem({
  letter,
  caption,
  className = "h-24 w-24",
}: {
  letter: string;
  caption: string;
  className?: string;
}) {
  const [top, bottom] = caption.split(" & ");

  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden="true">
      <circle cx="80" cy="80" r="76" fill="none" stroke="#C9A15C" strokeOpacity="0.7" />

      <defs>
        <path id="emblem-top" d="M22.8,47 A66,66 0 0 1 137.2,47" />
        <path id="emblem-bottom" d="M22.8,113 A66,66 0 0 0 137.2,113" />
      </defs>

      <text fontSize="9" letterSpacing="2" fill="#C9A15C" className="font-sans">
        <textPath href="#emblem-top" xlinkHref="#emblem-top" startOffset="50%" textAnchor="middle">
          {top}
        </textPath>
      </text>
      <text fontSize="9" letterSpacing="2" fill="#C9A15C" className="font-sans">
        <textPath href="#emblem-bottom" xlinkHref="#emblem-bottom" startOffset="50%" textAnchor="middle">
          &amp; {bottom}
        </textPath>
      </text>

      <g transform="translate(32,80) rotate(-15)" stroke="#C9A15C" strokeWidth="1.2" fill="none" strokeLinecap="round">
        <path d="M0,10 C-7,4 -7,-8 0,-14 C7,-8 7,4 0,10 Z" />
        <path d="M0,-14 L0,16" />
      </g>

      <text x="80" y="89" textAnchor="middle" fontSize="30" fill="#C9A15C" className="font-serif">
        {letter}
      </text>
    </svg>
  );
}

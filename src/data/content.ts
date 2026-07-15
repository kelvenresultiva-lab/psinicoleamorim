// Todo o conteúdo textual e de contato do site fica centralizado aqui.
// Edite os valores abaixo para customizar o site sem precisar mexer nos componentes.

const addressLine1 = "Rua Maurício Batista Sacramento, 11, Sala 3";
const addressLine2 = "Bairro Fábricas, São João del-Rei - MG, CEP 36301-227";
const fullAddress = `${addressLine1}, ${addressLine2}`;

export const siteConfig = {
  brand: "AFETO",
  professionalName: "Nicole Amorim",
  professionalNameShort: "Nicole Amorim",
  crp: "CRP-MG 04/78461",
  title: "Psicóloga Clínica",
  city: "São João del-Rei - MG",
  phoneDisplay: "(32) 99199-3814",
  phoneWhatsapp: "5532991993814",
  email: "nicoleamorimpsi@gmail.com",
  instagramHandle: "@psinicoleamorim",
  instagramUrl: "https://www.instagram.com/psinicoleamorim",
  addressLine1,
  addressLine2,
  // Link para abrir no app/site do Google Maps (usado em botões "ver no mapa").
  mapsLinkUrl: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}`,
  // URL de embed (usada no <iframe> da seção de mapa).
  mapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`,
} as const;

export const navLinks = [
  { label: "Sobre mim", href: "#sobre" },
  { label: "Como funciona", href: "#abordagem" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
] as const;

export const headerCta = {
  label: "AGENDAR ATENDIMENTO",
  href: `https://wa.me/${siteConfig.phoneWhatsapp}`,
};

export const heroContent = {
  title: "Nicole Amorim",
  subtitle: "PSICÓLOGA E PSICANALISTA",
  taglineStart: "Um espaço seguro para você ser,",
  taglineHighlight: "sentir e se cuidar.",
  // Exibida só no mobile, no lugar dos bullets (que ficam só a partir do sm).
  mobileTagline:
    "A terapia é um convite para olhar para si com mais cuidado, compreender seus conflitos e descobrir novas possibilidades para a sua vida.",
  bullets: [
    "Atendimento individual e de casal.",
    "Abordagem psicanalítica.",
    "Atendimento Presencial (São João Del Rei) e on-line.",
  ],
  primaryCta: {
    label: "MAIS INFORMAÇÕES",
    href: `https://wa.me/${siteConfig.phoneWhatsapp}`,
  },
  secondaryCta: { label: "SOBRE MIM", href: "#sobre" },
  // Foto composta especificamente para o fundo único do Hero: parede lisa
  // à esquerda (onde o texto fica) e a Nicole nítida à direita — não precisa
  // de gradiente escuro artificial por cima, a própria foto já tem o contraste.
  image: {
    src: "/images/hero-bg.jpg",
    // Recorte vertical dedicado para o mobile (mesma foto, enquadramento
    // em pé) — usado abaixo do breakpoint lg no lugar de `src`.
    mobileSrc: "/images/hero-bg-mobile.jpg",
    alt: "Nicole Amorim sentada em ambiente acolhedor",
  },
};

export const introContent = {
  heading: "Um espaço para",
  headingHighlight: "cuidar de si e das suas relações.",
  paragraph:
    "A terapia é um convite para desacelerar, ouvir a si mesmo e compreender o que te move. Aqui, você encontra um ambiente seguro e livre de julgamentos para elaborar emoções, melhorar seus relacionamentos e viver com mais equilíbrio e sentido.",
  items: [
    {
      icon: "message-heart",
      title: "Escuta sem julgamentos",
      description: "Você fala, é ouvido e respeitado em sua singularidade.",
    },
    {
      icon: "users",
      title: "Fortalecimento dos vínculos",
      description: "Apoio para construir relações mais saudáveis e significativas.",
    },
    {
      icon: "user",
      title: "Cuidado individualizado",
      description: "Cada processo é único, feito sob medida para você.",
    },
  ],
};

export const aboutContent = {
  badge: "CUIDADO EM CADA HISTÓRIA",
  image: {
    src: "/images/sobre-foto.jpg",
    alt: "Retrato de Nicole Amorim",
  },
  formationIcon: "graduation-cap",
  formationText: "Psicóloga com especialização em Psicologia e Psicanálise.",
  eyebrow: "OLÁ, SOU NICOLE",
  heading: "Uma trajetória dedicada ao cuidado emocional",
  paragraphs: [
    "Atendo adolescentes, adultos e casais em processos de análise pessoal, com foco em quem deseja se conhecer melhor e transformar questões que incomodam — não trabalho com uma área voltada a diagnósticos específicos.",
    "Acredito que a terapia não se limita a aliviar o sofrimento, mas também a compreender como ele se constrói. Meu trabalho busca oferecer um espaço de escuta em que cada pessoa possa se implicar em sua própria história, reconhecendo padrões, conflitos e formas de se relacionar consigo mesma e com os outros.",
    "Mais do que oferecer respostas prontas, procuro construir, junto ao paciente, novas formas de viver sua própria história, sempre a partir da abordagem psicanalítica.",
    "Ofereço uma escuta atenta para ajudar cada pessoa a construir um saber próprio sobre sua história e diminuir o sofrimento diante dos conflitos da vida.",
  ],
  ctaLabel: "VAMOS CONVERSAR?",
};

export const galleryContent = {
  eyebrow: "AMBIENTE SEGURO E DE FÁCIL ACESSO",
  heading:
    "Meu espaço de atendimentos foi pensado para que se sinta acolhido e confortável.",
  subtext: `O consultório fica no Bairro Fábricas, em ${siteConfig.city}, com fácil acesso para quem vem de carro ou transporte público.`,
  images: [
    {
      src: "/images/consultorio-3.jpg",
      alt: "Entrada do consultório, com poltronas de espera",
      objectPosition: "center",
    },
    {
      src: "/images/consultorio-2.jpg",
      alt: "Sala de espera com poltronas e tapete redondo",
      objectPosition: "center",
    },
    {
      src: "/images/consultorio-1.jpg",
      alt: "Sala de atendimento com chaise longue",
      // Foto vertical: desloca o recorte para baixo para manter o sofá visível.
      objectPosition: "center 75%",
    },
  ],
};

// ATENÇÃO: os depoimentos abaixo são fictícios (texto de exemplo).
// Substituir por avaliações reais antes de publicar o site — divulgar
// depoimentos inventados como se fossem reais é enganoso e pode violar
// o CDC (arts. 30/37) e as diretrizes de publicidade do CFP.
export const testimonialsContent = {
  heading: "O que dizem sobre meu trabalho:",
  summary: {
    name: siteConfig.professionalNameShort,
    subtitle: "Psicóloga | Atendimento Presencial e Online",
    rating: 5.0,
    reviewCount: 87,
  },
  reviews: [
    {
      name: "Marina C.",
      avatar: "woman",
      timeAgo: "há 2 semanas",
      rating: 5,
      text: "A Nicole me ajudou a entender padrões emocionais que eu carregava há anos. Um trabalho sério e muito acolhedor, me sinto segura em cada sessão.",
    },
    {
      name: "Beatriz A.",
      avatar: "mother",
      timeAgo: "há 1 mês",
      rating: 5,
      text: "Comecei a terapia em um momento muito difícil e encontrei um espaço de escuta genuína, sem julgamentos. Recomendo muito o trabalho dela.",
    },
    {
      name: "Juliana P.",
      avatar: "young-woman",
      timeAgo: "há 2 meses",
      rating: 5,
      text: "Profissional extremamente atenciosa e ética. O atendimento online funcionou perfeitamente para minha rotina, sem perder a qualidade do presencial.",
    },
  ],
} as const;

export const approachContent = {
  eyebrow: "COMO FUNCIONA MEU TRABALHO",
  heading: "Análise pessoal e terapia",
  headingHighlight: "de casal",
  paragraphs: [
    {
      icon: "user",
      text: "Parto da escuta cuidadosa da história de cada paciente, respeitando seu tempo e particularidades.",
    },
    {
      icon: "heart-handshake",
      text: "Utilizo a abordagem psicanalítica como base teórica, buscando construir, junto com você, um caminho de autoconhecimento e transformação genuína.",
    },
  ],
  highlights: [
    {
      icon: "armchair",
      title: "Ambiente Seguro",
      description: "Sigilo e acolhimento em cada sessão. Um espaço onde você pode ser quem é.",
    },
    {
      icon: "sprout",
      title: "Resultados Reais",
      description: "Acompanhamento comprometido com sua evolução e bem-estar emocional.",
    },
  ],
  ctaLabel: "VAMOS CONVERSAR?",
  secondaryCta: { label: "Agende sua sessão", href: "#contato" },
  badge: "COMPROMISSO EM CADA SESSÃO",
  image: {
    src: "/images/abordagem-foto.jpg",
    alt: "Nicole Amorim sorrindo, lendo um livro em ambiente acolhedor",
  },
};

export const benefitsContent = {
  eyebrow: "ALGUNS BENEFÍCIOS DA PSICOTERAPIA",
  heading: "Ambiente seguro, respeitoso, sigiloso e livre de julgamentos",
  subtext:
    "A psicoterapia oferece benefícios que vão muito além da sessão, refletindo em diversas áreas da sua vida.",
  items: [
    {
      number: "01",
      icon: "heart-pulse",
      title: "Controle das emoções",
      description:
        "Desenvolva maior consciência e equilíbrio emocional diante dos desafios do dia a dia.",
    },
    {
      number: "02",
      icon: "users-round",
      title: "Melhora nas relações",
      description:
        "Construa vínculos mais saudáveis com família, amigos e parceiros a partir do autoconhecimento.",
    },
    {
      number: "03",
      icon: "shield-check",
      title: "Diminuição da agressividade",
      description:
        "Compreenda a origem de reações impulsivas e aprenda formas mais saudáveis de lidar com elas.",
    },
    {
      number: "04",
      icon: "moon",
      title: "Diminuição da insônia",
      description:
        "Alivie a ansiedade e os pensamentos acelerados que impactam diretamente a qualidade do sono.",
    },
  ],
};

export const faqContent = {
  info: {
    eyebrow: "DÚVIDAS FREQUENTES",
    heading: "Por que fazer terapia?",
    paragraphs: [
      "A terapia é um espaço de cuidado com a sua saúde mental, assim como você cuida da sua saúde física. Ninguém precisa estar em crise para começar um processo terapêutico.",
      "Buscar ajuda profissional é um passo de coragem em direção ao autoconhecimento e ao bem-estar emocional.",
    ],
    ctaLabel: "MAIS INFORMAÇÕES",
  },
  questions: [
    {
      question: "Como funciona a primeira sessão?",
      answer:
        "A primeira sessão é um momento de entrevista e aproximação. Nela, busco compreender o motivo que levou você a procurar a terapia e conhecer um pouco do seu contexto de vida. Também alinhamos os combinados sobre o processo terapêutico e as expectativas para os próximos encontros.",
    },
    {
      question: "Como são as sessões de psicoterapia?",
      answer:
        "As sessões têm duração de 50 minutos e acontecem semanalmente, de forma presencial ou online, respeitando o sigilo profissional e o ritmo de cada paciente.",
    },
    {
      question: "Possui convênio ou plano de saúde?",
      answer:
        "O atendimento é particular, mas forneço recibo (nota fiscal/recibo de pagamento a profissional liberal) para que você solicite o reembolso junto ao seu plano de saúde, quando aplicável.",
    },
    {
      question: "Qual a melhor idade para iniciar a psicoterapia?",
      answer:
        "Não existe uma idade certa — atendo adolescentes, adultos e casais. Nos atendimentos on-line, recebo pacientes a partir de 15 anos, considerando as particularidades desse formato; no presencial, atendo pessoas de todas as idades.",
    },
    {
      question: "Qual o endereço da clínica?",
      answer: `${siteConfig.addressLine1}, ${siteConfig.addressLine2}.`,
    },
  ],
};

export const contactBarContent = [
  {
    icon: "phone",
    label: "Telefone / WhatsApp",
    value: siteConfig.phoneDisplay,
    href: `https://wa.me/${siteConfig.phoneWhatsapp}`,
  },
  {
    icon: "map-pin",
    label: "Endereço",
    value: `${siteConfig.addressLine1} — ${siteConfig.addressLine2}`,
    href: siteConfig.mapsLinkUrl,
  },
  {
    icon: "mail",
    label: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
] as const;

export const footerContent = {
  quickLinks: [
    { label: "Home", href: "#topo" },
    { label: "Sobre mim", href: "#sobre" },
    { label: "Serviços", href: "#consultorio" },
    { label: "Benefícios", href: "#beneficios" },
  ],
  schedule: {
    heading: "Horário de Atendimento",
    lines: ["Segunda a Sexta: 8h às 20h"],
    note: "As consultas necessitam ser previamente agendadas.",
  },
  ctaLabel: "AGENDAR CONSULTA",
  developerCredit: "Desenvolvido com cuidado.",
};

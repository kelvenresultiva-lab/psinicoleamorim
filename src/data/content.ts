// Todo o conteúdo textual e de contato do site fica centralizado aqui.
// Edite os valores abaixo para customizar o site sem precisar mexer nos componentes.

const addressLine1 = "Rua Maurício Batista Sacramento, 11, Sala 3";
const addressLine2 = "Bairro Fábricas, São João del-Rei - MG, CEP 36301-227";
const fullAddress = `${addressLine1}, ${addressLine2}`;

export const siteConfig = {
  brand: "AFETO",
  professionalName: "Nicole Amorim",
  professionalNameShort: "Nicole Amorim",
  title: "Psicóloga e Psicanalista Clínica",
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
  { label: "Blog", href: "/blog" },
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
  headingHighlight: "pensar sobre si e suas relações.",
  paragraph:
    "O processo terapêutico é uma oportunidade de refletir sobre a vida e seu cotidiano, uma pausa para repensar o que costuma funcionar no automático e um convite para criar seu próprio modo de navegar pelo mundo.",
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
    src: "/images/abordagem-foto.jpg",
    alt: "Nicole Amorim sorrindo, lendo um livro em ambiente acolhedor",
  },
  formationIcon: "graduation-cap",
  formationText: "Psicanalista formada pela Universidade Federal de São João del-Rei (UFSJ).",
  eyebrow: "OLÁ, SOU NICOLE",
  heading: "Uma trajetória dedicada ao cuidado emocional",
  paragraphs: [
    "Atendo adolescentes, adultos e casais, a partir do enfoque psicanalítico, que coloca em voga seus desejos pessoais, seus conflitos e seu modo de se relacionar com o mundo.",
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

// Avaliações reais extraídas do perfil do Google Maps da Nicole em
// 05/09/2026, confirmadas por ela como sendo de pacientes dela. Ao
// atualizar, copie fielmente nome, nota, texto e contagem direto do
// Google — não inventar nem alterar depoimentos (CDC arts. 30/37 e
// diretrizes de publicidade do CFP).
export const testimonialsContent = {
  heading: "O que dizem sobre meu trabalho:",
  googleUrl:
    "https://www.google.com/maps/place/Nicole+Amorim+-+Psic%C3%B3loga+e+Psicanalista/@-21.1231332,-44.2486206,17z/data=!4m8!3m7!1s0xa1c92413964607:0x697894eec6cf10e0!8m2!3d-21.1231332!4d-44.2486206!9m1!1b1!16s%2Fg%2F11m78444pf",
  summary: {
    name: siteConfig.professionalNameShort,
    subtitle: "Psicóloga e Psicanalista | Atendimento Presencial e Online",
    rating: 5.0,
    reviewCount: 10,
  },
  reviews: [
    {
      name: "Marcos Ferraz",
      badge: "Guia Local · 49 avaliações",
      timeAgo: "há 10 meses",
      rating: 5,
      text: "Profissional excelente e atenciosa. O consultório é um ambiente muito acolhedor e tranquilo, o que contribui positivamente para o processo. Recomendo muito!",
    },
    {
      name: "Gabriel Rodrigues Ramos",
      badge: "6 avaliações",
      timeAgo: "há 7 meses",
      rating: 5,
      text: "Ela é uma ótima profissional, muito humana e atenciosa.",
    },
    {
      name: "Miguel Costa",
      badge: "10 avaliações",
      timeAgo: "há 10 meses",
      rating: 5,
      text: "Profissional de extrema competência, com escuta verdadeira e olhar humano. Atendimento sempre acolhedor e respeitoso.",
    },
  ],
} as const;

export const approachContent = {
  eyebrow: "COMO FUNCIONA MEU TRABALHO",
  heading: "Psicoterapia individual",
  headingHighlight: "",
  paragraphs: [
    "A psicoterapia individual é um espaço de escuta voltado para a compreensão da sua história, dos conflitos que se repetem e das questões que atravessam sua vida.",
    "Ao longo do processo, trabalhamos sentimentos, relações, escolhas e padrões que muitas vezes são difíceis de perceber sozinho, respeitando o seu tempo e a sua singularidade.",
  ],
  pillars: [
    {
      icon: "user",
      label: "ESCUTA E ACOLHIMENTO",
      text: "Um espaço seguro para falar sobre o que você sente, pensa e vive, sem julgamentos.",
    },
    {
      icon: "sprout",
      label: "COMPREENSÃO E PROCESSO",
      text: "Um acompanhamento construído com profundidade, respeitando o seu tempo e o seu modo de existir.",
    },
  ],
  ctaLabel: "VAMOS CONVERSAR?",
  secondaryCta: { label: "Agende sua sessão", href: "#contato" },
  badge: "COMPROMISSO EM CADA SESSÃO",
  image: {
    src: "/images/processo.jpeg",
    alt: "Nicole Amorim em pé, retrato em ambiente acolhedor",
  },
};

export const benefitsContent = {
  eyebrow: "ALGUNS BENEFÍCIOS DA TERAPIA DE CASAL",
  heading: "Um espaço para falar, escutar e repensar a relação",
  subtext:
    "A terapia de casal é um espaço para que os parceiros possam falar sobre seus conflitos, compreender seu modo de se relacionar e ouvir o que o outro tem a dizer, buscando novos arranjos para a relação.",
  items: [
    {
      number: "01",
      icon: "heart-pulse",
      title: "Falar sobre os conflitos",
      description:
        "Um espaço para colocar em palavras aquilo que tem causado sofrimento, tensão ou afastamento na relação.",
    },
    {
      number: "02",
      icon: "users-round",
      title: "Ouvir o que o outro tem a dizer",
      description:
        "A terapia favorece uma escuta mais atenta, permitindo que cada parceiro possa falar e também compreender melhor o que o outro expressa.",
    },
    {
      number: "03",
      icon: "shield-check",
      title: "Compreender a dinâmica do casal",
      description:
        "Possibilita refletir sobre padrões de relacionamento, impasses recorrentes e formas de vínculo construídas ao longo da relação.",
    },
    {
      number: "04",
      icon: "moon",
      title: "Buscar novos caminhos",
      description:
        "A partir da escuta e da reflexão, o casal pode construir novos arranjos e formas mais conscientes de se relacionar.",
    },
  ],
};

export const blogTeaserContent = {
  eyebrow: "BLOG",
  heading: "Textos sobre terapia e autoconhecimento",
  subtext:
    "Reflexões que compartilho a partir da escuta clínica, para pensar sobre si e sobre as relações.",
  ctaLabel: "Ver todos os textos",
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
    { label: "Blog", href: "/blog" },
  ],
  schedule: {
    heading: "Horário de Atendimento",
    lines: ["Segunda a Sexta: 8h às 20h"],
    note: "As consultas necessitam ser previamente agendadas.",
  },
  ctaLabel: "AGENDAR CONSULTA",
  developerCredit: "Desenvolvido com cuidado.",
};

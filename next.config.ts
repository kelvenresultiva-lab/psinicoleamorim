import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholders locais em /public/images são SVG; habilitado apenas
    // para arquivos servidos do próprio domínio (não afeta imagens remotas).
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;

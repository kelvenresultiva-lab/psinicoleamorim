import Image from "next/image";
import Link from "next/link";
import { blogTeaserContent } from "@/data/content";
import { listPublishedPosts } from "@/lib/db";
import Reveal from "./Reveal";

export default async function LatestPosts() {
  // Busca defensiva: se o banco não estiver configurado/disponível, a seção
  // simplesmente não aparece em vez de derrubar a home inteira.
  let posts;
  try {
    posts = (await listPublishedPosts()).slice(0, 3);
  } catch {
    return null;
  }

  // A seção só aparece quando houver pelo menos um texto publicado no /admin.
  if (posts.length === 0) return null;

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-gold-dark uppercase">
              {blogTeaserContent.eyebrow}
            </p>
            <h2 className="mb-4 font-serif text-3xl text-charcoal sm:text-4xl">
              {blogTeaserContent.heading}
            </h2>
            <p className="mx-auto max-w-xl text-[#4a4a4a]">
              {blogTeaserContent.subtext}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.id} delayMs={index * 100}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {post.cover_image && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={post.cover_image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(min-width: 640px) 33vw, 90vw"
                      unoptimized
                    />
                  </div>
                )}
                <div className="p-6">
                  <p className="mb-2 text-xs text-[#888888]">
                    {new Date(post.created_at).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <h3 className="mb-2 font-serif text-lg text-charcoal">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="line-clamp-3 text-sm leading-relaxed text-[#666666]">
                      {post.excerpt}
                    </p>
                  )}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border-2 border-gold px-6 py-2.5 text-xs font-semibold tracking-wider text-gold-dark uppercase transition-colors hover:bg-gold hover:text-white"
            >
              {blogTeaserContent.ctaLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

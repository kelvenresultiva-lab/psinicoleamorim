import Image from "next/image";
import Link from "next/link";
import { listPublishedPosts } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog | Nicole Amorim",
};

export default async function BlogPage() {
  const posts = await listPublishedPosts();

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-gold-dark uppercase">
          Blog
        </p>
        <h1 className="mb-12 font-serif text-4xl text-charcoal">
          Textos sobre terapia, autoconhecimento e cuidado
        </h1>

        {posts.length === 0 ? (
          <p className="text-[#666666]">Em breve, novos textos por aqui.</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {post.cover_image && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={post.cover_image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(min-width: 640px) 45vw, 90vw"
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
                  <h2 className="mb-2 font-serif text-xl text-charcoal">{post.title}</h2>
                  {post.excerpt && (
                    <p className="text-sm leading-relaxed text-[#666666]">{post.excerpt}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

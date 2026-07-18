import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import { getPublishedPostBySlug } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gold-dark hover:text-gold"
        >
          <ArrowLeft size={16} />
          Voltar para o blog
        </Link>

        <p className="mb-3 text-sm text-[#888888]">
          {new Date(post.created_at).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>

        <h1 className="mb-8 font-serif text-4xl leading-tight text-charcoal">{post.title}</h1>

        {post.cover_image && (
          <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={post.cover_image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 48rem, 90vw"
              unoptimized
            />
          </div>
        )}

        <div className="prose-blog leading-relaxed text-[#333333]">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}

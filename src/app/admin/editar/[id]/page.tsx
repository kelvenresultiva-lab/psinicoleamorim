import { notFound } from "next/navigation";
import { getPostById } from "@/lib/db";
import PostForm from "../../PostForm";

export const dynamic = "force-dynamic";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostById(Number(id));

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-cream px-6 py-10 lg:px-16">
      <h1 className="mx-auto mb-8 max-w-3xl font-serif text-3xl text-charcoal">Editar post</h1>
      <PostForm
        initialValues={{
          id: post.id,
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt ?? "",
          coverImage: post.cover_image ?? "",
          content: post.content,
          published: post.published,
        }}
      />
    </div>
  );
}

import Link from "next/link";
import { listAllPosts } from "@/lib/db";
import LogoutButton from "./LogoutButton";
import DeletePostButton from "./DeletePostButton";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const posts = await listAllPosts();

  return (
    <div className="min-h-screen bg-cream px-6 py-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-serif text-3xl text-charcoal">Posts do blog</h1>
          <LogoutButton />
        </div>

        <Link
          href="/admin/novo"
          className="mb-8 inline-block rounded-full bg-gold px-6 py-2.5 text-sm font-semibold tracking-wider text-white uppercase transition-colors hover:bg-gold-dark"
        >
          + Novo post
        </Link>

        {posts.length === 0 ? (
          <p className="text-[#666666]">Nenhum post ainda. Crie o primeiro acima.</p>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between gap-4 rounded-xl bg-white p-5 shadow-sm"
              >
                <div className="min-w-0">
                  <p className="truncate font-serif text-lg text-charcoal">{post.title}</p>
                  <p className="text-xs text-[#888888]">
                    {post.published ? (
                      <span className="text-green-700">Publicado</span>
                    ) : (
                      <span className="text-[#B8492E]">Rascunho</span>
                    )}
                    {" · "}
                    {new Date(post.created_at).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <Link
                    href={`/admin/editar/${post.id}`}
                    className="text-sm font-medium text-gold-dark hover:underline"
                  >
                    Editar
                  </Link>
                  <DeletePostButton id={post.id} title={post.title} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

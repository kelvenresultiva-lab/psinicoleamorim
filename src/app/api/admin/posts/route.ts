import { NextResponse } from "next/server";
import { createPost, isSlugTaken, listAllPosts } from "@/lib/db";

export async function GET() {
  const posts = await listAllPosts();
  return NextResponse.json({ posts });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { title, slug, excerpt, coverImage, content, published } = body ?? {};

  if (!title || !slug || !content) {
    return NextResponse.json(
      { error: "Título, slug e conteúdo são obrigatórios." },
      { status: 400 }
    );
  }

  if (await isSlugTaken(slug)) {
    return NextResponse.json(
      { error: "Já existe um post com esse slug." },
      { status: 409 }
    );
  }

  const post = await createPost({
    title,
    slug,
    excerpt: excerpt ?? "",
    coverImage: coverImage ?? "",
    content,
    published: Boolean(published),
  });

  return NextResponse.json({ post }, { status: 201 });
}

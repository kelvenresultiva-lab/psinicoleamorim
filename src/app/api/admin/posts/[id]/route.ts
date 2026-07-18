import { NextResponse } from "next/server";
import { deletePost, getPostById, isSlugTaken, updatePost } from "@/lib/db";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const post = await getPostById(Number(id));
  if (!post) {
    return NextResponse.json({ error: "Post não encontrado." }, { status: 404 });
  }
  return NextResponse.json({ post });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const postId = Number(id);
  const body = await request.json();
  const { title, slug, excerpt, coverImage, content, published } = body ?? {};

  if (!title || !slug || !content) {
    return NextResponse.json(
      { error: "Título, slug e conteúdo são obrigatórios." },
      { status: 400 }
    );
  }

  if (await isSlugTaken(slug, postId)) {
    return NextResponse.json(
      { error: "Já existe um post com esse slug." },
      { status: 409 }
    );
  }

  const post = await updatePost(postId, {
    title,
    slug,
    excerpt: excerpt ?? "",
    coverImage: coverImage ?? "",
    content,
    published: Boolean(published),
  });

  return NextResponse.json({ post });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await deletePost(Number(id));
  return NextResponse.json({ ok: true });
}

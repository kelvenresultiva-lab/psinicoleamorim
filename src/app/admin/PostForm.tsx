"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import "@uiw/react-md-editor/markdown-editor.css";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

type PostFormValues = {
  id?: number;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  content: string;
  published: boolean;
};

export default function PostForm({ initialValues }: { initialValues?: PostFormValues }) {
  const router = useRouter();
  const isEditing = Boolean(initialValues?.id);

  const [title, setTitle] = useState(initialValues?.title ?? "");
  const [slug, setSlug] = useState(initialValues?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(isEditing);
  const [excerpt, setExcerpt] = useState(initialValues?.excerpt ?? "");
  const [coverImage, setCoverImage] = useState(initialValues?.coverImage ?? "");
  const [content, setContent] = useState(initialValues?.content ?? "");
  const [published, setPublished] = useState(initialValues?.published ?? false);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!slugTouched) {
      setSlug(slugify(value));
    }
  }

  async function handleSubmit() {
    setError("");

    if (!title.trim() || !slug.trim() || !content.trim()) {
      setError("Preencha pelo menos título, slug e o texto do post.");
      return;
    }

    setSaving(true);
    const url = isEditing ? `/api/admin/posts/${initialValues!.id}` : "/api/admin/posts";
    const method = isEditing ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, slug, excerpt, coverImage, content, published }),
    });

    setSaving(false);

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      setError(data.error ?? "Não foi possível salvar o post.");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-charcoal">Título</label>
        <input
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-gold"
          placeholder="Ex: Como lidar com a ansiedade no dia a dia"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-charcoal">
          Slug (parte da URL)
        </label>
        <input
          value={slug}
          onChange={(e) => {
            setSlugTouched(true);
            setSlug(slugify(e.target.value));
          }}
          className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-gold"
          placeholder="como-lidar-com-a-ansiedade"
        />
        <p className="mt-1 text-xs text-[#888888]">
          O post vai ficar em: /blog/{slug || "seu-slug-aqui"}
        </p>
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-charcoal">
          Resumo (aparece na listagem do blog)
        </label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={2}
          className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-gold"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-charcoal">
          Imagem de capa (link/URL de uma imagem)
        </label>
        <input
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-gold"
          placeholder="https://..."
        />
      </div>

      <div className="mb-6" data-color-mode="light">
        <label className="mb-2 block text-sm font-medium text-charcoal">Texto do post</label>
        <MDEditor value={content} onChange={(value) => setContent(value ?? "")} height={400} />
      </div>

      <label className="mb-6 flex items-center gap-2 text-sm text-charcoal">
        <input
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
          className="h-4 w-4"
        />
        Publicado (visível no site)
      </label>

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={saving}
          className="rounded-full bg-gold px-8 py-3 text-sm font-semibold tracking-wider text-white uppercase transition-colors hover:bg-gold-dark disabled:opacity-60"
        >
          {saving ? "Salvando..." : "Salvar"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin")}
          className="text-sm font-medium text-[#666666] hover:text-charcoal"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

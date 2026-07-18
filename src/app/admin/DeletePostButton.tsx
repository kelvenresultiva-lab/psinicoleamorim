"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeletePostButton({ id, title }: { id: number; title: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(`Excluir o post "${title}"? Essa ação não pode ser desfeita.`);
    if (!confirmed) return;

    setLoading(true);
    await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
    setLoading(false);
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={loading}
      className="text-sm font-medium text-red-600 hover:underline disabled:opacity-60"
    >
      {loading ? "Excluindo..." : "Excluir"}
    </button>
  );
}

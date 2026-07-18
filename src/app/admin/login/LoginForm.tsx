"use client";

import { useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    setLoading(false);

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      setError(data.error ?? "Não foi possível entrar.");
      return;
    }

    const from = searchParams.get("from") ?? "/admin";
    router.push(from);
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg"
    >
      <h1 className="mb-1 font-serif text-2xl text-charcoal">Área da Nicole</h1>
      <p className="mb-6 text-sm text-[#666666]">
        Entre com seu e-mail e senha para gerenciar os posts do blog.
      </p>

      <label htmlFor="email" className="mb-2 block text-sm font-medium text-charcoal">
        E-mail
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
        className="mb-4 w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-gold"
      />

      <label htmlFor="password" className="mb-2 block text-sm font-medium text-charcoal">
        Senha
      </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-gold"
      />

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-gold px-6 py-2.5 text-sm font-semibold tracking-wider text-white uppercase transition-colors hover:bg-gold-dark disabled:opacity-60"
      >
        {loading ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}

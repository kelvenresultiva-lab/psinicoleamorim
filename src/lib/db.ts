import { neon } from "@neondatabase/serverless";

export type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image: string | null;
  content: string;
  published: boolean;
  created_at: string;
  updated_at: string;
};

// A integração de Postgres da Vercel/Neon pode nomear a variável de formas
// diferentes dependendo de como foi provisionada — checa as mais comuns.
function getConnectionString(): string {
  const url =
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL_NON_POOLING;

  if (!url) {
    throw new Error(
      "Nenhuma variável de conexão com o banco encontrada (DATABASE_URL, POSTGRES_URL, ...). Configure-a nas variáveis de ambiente."
    );
  }
  return url;
}

let schemaReady: Promise<void> | null = null;

// Cria a tabela "posts" se ainda não existir. Roda de forma preguiçosa e só
// uma vez por instância do servidor — evita precisar de um passo manual de
// setup (rodar script/migração) antes do primeiro uso em produção.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function ensureSchema(sql: any) {
  if (!schemaReady) {
    schemaReady = sql`
      create table if not exists posts (
        id serial primary key,
        title text not null,
        slug text unique not null,
        excerpt text default '',
        cover_image text default '',
        content text not null,
        published boolean not null default false,
        created_at timestamptz not null default now(),
        updated_at timestamptz not null default now()
      )
    `.then(() => undefined);
  }
  await schemaReady;
}

async function getSql() {
  const sql = neon(getConnectionString());
  await ensureSchema(sql);
  return sql;
}

export async function listPublishedPosts(): Promise<Post[]> {
  const sql = await getSql();
  const rows = await sql`
    select * from posts where published = true order by created_at desc
  `;
  return rows as Post[];
}

export async function getPublishedPostBySlug(slug: string): Promise<Post | null> {
  const sql = await getSql();
  const rows = await sql`
    select * from posts where slug = ${slug} and published = true limit 1
  `;
  return (rows[0] as Post) ?? null;
}

export async function listAllPosts(): Promise<Post[]> {
  const sql = await getSql();
  const rows = await sql`
    select * from posts order by created_at desc
  `;
  return rows as Post[];
}

export async function getPostById(id: number): Promise<Post | null> {
  const sql = await getSql();
  const rows = await sql`
    select * from posts where id = ${id} limit 1
  `;
  return (rows[0] as Post) ?? null;
}

export async function createPost(data: {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  content: string;
  published: boolean;
}): Promise<Post> {
  const sql = await getSql();
  const rows = await sql`
    insert into posts (title, slug, excerpt, cover_image, content, published)
    values (${data.title}, ${data.slug}, ${data.excerpt}, ${data.coverImage}, ${data.content}, ${data.published})
    returning *
  `;
  return rows[0] as Post;
}

export async function updatePost(
  id: number,
  data: {
    title: string;
    slug: string;
    excerpt: string;
    coverImage: string;
    content: string;
    published: boolean;
  }
): Promise<Post> {
  const sql = await getSql();
  const rows = await sql`
    update posts set
      title = ${data.title},
      slug = ${data.slug},
      excerpt = ${data.excerpt},
      cover_image = ${data.coverImage},
      content = ${data.content},
      published = ${data.published},
      updated_at = now()
    where id = ${id}
    returning *
  `;
  return rows[0] as Post;
}

export async function deletePost(id: number): Promise<void> {
  const sql = await getSql();
  await sql`delete from posts where id = ${id}`;
}

export async function isSlugTaken(slug: string, excludeId?: number): Promise<boolean> {
  const sql = await getSql();
  const rows = excludeId
    ? await sql`select id from posts where slug = ${slug} and id != ${excludeId} limit 1`
    : await sql`select id from posts where slug = ${slug} limit 1`;
  return rows.length > 0;
}

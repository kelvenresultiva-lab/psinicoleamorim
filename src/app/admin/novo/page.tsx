import PostForm from "../PostForm";

export default function NewPostPage() {
  return (
    <div className="min-h-screen bg-cream px-6 py-10 lg:px-16">
      <h1 className="mx-auto mb-8 max-w-3xl font-serif text-3xl text-charcoal">Novo post</h1>
      <PostForm />
    </div>
  );
}

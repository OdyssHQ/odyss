export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16 text-foreground">
      <section
        aria-labelledby="odyss-title"
        className="w-full max-w-xl rounded-2xl border border-border bg-surface px-8 py-14 text-center"
      >
        <p className="mb-4 text-sm font-medium tracking-[0.28em] text-secondary uppercase">
          Open-source media tracking
        </p>
        <h1
          id="odyss-title"
          className="text-5xl font-semibold tracking-tight sm:text-6xl"
        >
          Odyss
        </h1>
        <p className="mt-5 text-lg text-secondary">Your library. Your way.</p>
      </section>
    </main>
  );
}

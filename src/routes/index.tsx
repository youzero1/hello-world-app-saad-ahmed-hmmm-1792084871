import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">
      {/* Decorative gradient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl"
      />

      {/* Welcome card */}
      <section className="relative mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-indigo-300 uppercase">
          Welcome
        </span>

        <h1 className="mt-6 bg-gradient-to-r from-indigo-300 via-violet-200 to-fuchsia-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl">
          Hello, World!
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-slate-400 sm:text-xl">
          Your app is up and running — everything is set up and ready for you
          to start building something great.
        </p>
      </section>
    </main>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-20 text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <section className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
            ScholarBridge
          </p>
          <h1 className="max-w-3xl text-4xl font-bold sm:text-6xl">
            Focus on your career. We help you stay on track academically.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            A trusted academic support platform for working professionals pursuing master's,
            MBA, PhD, and professional certifications.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#features"
              className="rounded-full bg-sky-700 px-6 py-3 text-white transition hover:bg-sky-800"
            >
              Explore Platform
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-slate-700 transition hover:bg-slate-100"
            >
              Request a Demo
            </a>
          </div>
        </section>

        <section id="features" className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Research Guidance',
              text: 'Structured support for literature reviews, methodology, and thesis planning.',
            },
            {
              title: 'Expert Matching',
              text: 'Students connect with qualified experts based on subject, timeline, and need.',
            },
            {
              title: 'Progress Tracking',
              text: 'Track milestones, deadlines, revisions, and payments in one secure workspace.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-slate-600">{item.text}</p>
            </div>
          ))}
        </section>

        <section id="contact" className="rounded-3xl border border-sky-200 bg-sky-50 p-8 shadow-inner">
          <h2 className="text-2xl font-semibold">Ready to launch?</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            The foundation is ready for student, expert, and admin flows, with Neon PostgreSQL
            support and a deployment-ready Next.js structure.
          </p>
        </section>
      </div>
    </main>
  );
}

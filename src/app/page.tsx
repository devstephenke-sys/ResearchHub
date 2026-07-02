import Link from 'next/link';
import { ArrowRight, BadgeCheck, BookOpen, BrainCircuit, ChartColumn, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Research consultation',
    description: 'Structured guidance for literature reviews, methodology, and thesis planning.',
    icon: BookOpen,
  },
  {
    title: 'Expert collaboration',
    description: 'Match with verified mentors and reviewers in your subject area.',
    icon: BrainCircuit,
  },
  {
    title: 'Secure delivery',
    description: 'Track milestones, revisions, files, and payments from one private workspace.',
    icon: ShieldCheck,
  },
];

const stats = [
  { label: 'Active projects', value: '8.4k+' },
  { label: 'Average turnaround', value: '24 hrs' },
  { label: 'Quality approval', value: '96.8%' },
];

const testimonials = [
  {
    quote: 'The platform helped me stay calm during my dissertation while balancing work and family.',
    author: 'Mina, MBA student',
  },
  {
    quote: 'The milestones and expert feedback made my research workflow predictable and professional.',
    author: 'Daniel, MSc candidate',
  },
];

const faqs = [
  {
    question: 'Is ScholarBridge meant to replace my own academic work?',
    answer: 'No. The platform supports research guidance, editing, and mentoring while keeping the student accountable for the final submission.',
  },
  {
    question: 'Can I work with experts in different disciplines?',
    answer: 'Yes. Students can request support across business, social sciences, engineering, data analysis, and more.',
  },
  {
    question: 'How are experts verified?',
    answer: 'Experts complete profile verification, credential review, and are matched based on their domain expertise.',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_45%)] text-slate-900">
      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-20 pt-10 lg:px-8">
        <header className="flex items-center justify-between rounded-full border border-slate-200/70 bg-white/70 px-5 py-3 shadow-sm backdrop-blur">
          <div className="text-lg font-semibold tracking-wide">ScholarBridge</div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-sky-700">Features</a>
            <a href="#pricing" className="transition hover:text-sky-700">Pricing</a>
            <a href="#faq" className="transition hover:text-sky-700">FAQ</a>
          </nav>
          <Link href="/student" className="rounded-full bg-slate-950 px-4 py-2 text-sm text-white transition hover:bg-slate-800">
            Open dashboard
          </Link>
        </header>

        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-2 text-sm text-sky-700">
              <Sparkles size={16} />
              Premium academic support for busy professionals
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Focus on your career. We help you stay on track academically.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                ScholarBridge combines expert mentorship, milestone tracking, secure collaboration, and quality review for graduate students balancing work, family, and research.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/student" className="rounded-full bg-sky-700 px-6 py-3 font-medium text-white transition hover:bg-sky-800">
                Start a project
              </Link>
              <Link href="/expert" className="rounded-full border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100">
                Join as an expert
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><BadgeCheck className="text-emerald-600" size={16}/>Verified experts</div>
              <div className="flex items-center gap-2"><BadgeCheck className="text-emerald-600" size={16}/>Secure document workflows</div>
              <div className="flex items-center gap-2"><BadgeCheck className="text-emerald-600" size={16}/>Real-time progress</div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-2xl shadow-sky-100 backdrop-blur">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Live workspace</p>
                <h2 className="mt-2 text-2xl font-semibold">Momentum dashboard</h2>
              </div>
              <div className="rounded-full bg-emerald-50 p-3 text-emerald-600">
                <ChartColumn size={20} />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Current milestone</span>
                  <span className="font-semibold text-slate-900">Chapter 3 review</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-4/5 rounded-full bg-sky-600" />
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-100 bg-white p-4">
                    <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section id="features" className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-xl shadow-slate-100 backdrop-blur lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">Why students choose us</p>
            <h2 className="mt-3 text-3xl font-semibold">An academic support experience built for real schedules.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="pricing" className="grid gap-6 lg:grid-cols-[1fr_1fr_1fr]">
          {[
            {
              name: 'Starter',
              price: '$29',
              description: 'For solo students working on one project at a time.',
              perks: ['Project intake', 'Milestone tracking', 'Secure messaging'],
            },
            {
              name: 'Growth',
              price: '$79',
              description: 'For ongoing thesis, research, and professional certification support.',
              perks: ['Priority expert matching', 'Document review', 'Deadline alerts'],
            },
            {
              name: 'Institution',
              price: 'Custom',
              description: 'For universities, research teams, and organizations.',
              perks: ['Admin controls', 'Reporting', 'Dedicated support'],
            },
          ].map((plan) => (
            <div key={plan.name} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-100">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{plan.description}</p>
              <div className="mt-6 text-4xl font-semibold">{plan.price}</div>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2"><BadgeCheck className="text-emerald-600" size={16}/> {perk}</li>
                ))}
              </ul>
              <Link href="/student" className="mt-8 inline-flex items-center gap-2 font-medium text-sky-700">
                Get started <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200">
            <h2 className="text-2xl font-semibold">Trusted by modern graduate learners</h2>
            <p className="mt-3 text-sm leading-8 text-slate-300">The platform is designed to support professional students who need structure and accountability without compromising academic integrity.</p>
          </div>
          <div className="space-y-4">
            {testimonials.map((item) => (
              <div key={item.author} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
                <p className="text-slate-700">“{item.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-slate-900">{item.author}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-lg backdrop-blur">
          <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <footer className="border-t border-slate-200 bg-white/70 px-6 py-8 text-sm text-slate-600 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© 2026 ScholarBridge. Academic support for the modern graduate journey.</p>
          <div className="flex gap-4">
            <a href="#features" className="transition hover:text-sky-700">Platform</a>
            <a href="#pricing" className="transition hover:text-sky-700">Pricing</a>
            <a href="#faq" className="transition hover:text-sky-700">FAQ</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

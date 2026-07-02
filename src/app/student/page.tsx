import Link from 'next/link';
import { ArrowRight, CalendarDays, FileText, MessageSquare, Sparkles } from 'lucide-react';

const projects = [
  { title: 'Dissertation chapter review', status: 'In review', deadline: '2 days' },
  { title: 'Literature review support', status: 'Milestone 2 ready', deadline: '5 days' },
];

export default function StudentPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">Student workspace</p>
          <h1 className="mt-3 text-3xl font-semibold">Welcome back, Maya.</h1>
          <p className="mt-3 max-w-2xl text-slate-600">You have two active projects and one upcoming milestone. Everything is organized in one secure flow.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Active projects</h2>
              <Link href="/student" className="text-sm font-medium text-sky-700">Create new</Link>
            </div>
            <div className="mt-6 space-y-4">
              {projects.map((project) => (
                <div key={project.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{project.title}</h3>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{project.status}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-2"><CalendarDays size={16}/> {project.deadline}</span>
                    <span className="flex items-center gap-2"><FileText size={16}/> 3 files shared</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
              <h2 className="text-xl font-semibold">Quick actions</h2>
              <div className="mt-4 space-y-3">
                <button className="flex w-full items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700">
                  <span className="flex items-center gap-2"><MessageSquare size={16}/> Message expert</span>
                  <ArrowRight size={16}/>
                </button>
                <button className="flex w-full items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700">
                  <span className="flex items-center gap-2"><Sparkles size={16}/> Request revision</span>
                  <ArrowRight size={16}/>
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-lg">
              <h2 className="text-xl font-semibold">Upcoming deadline</h2>
              <p className="mt-3 text-sm text-slate-300">Your next milestone review is due in 2 days. Keep progress steady and upload any final notes.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import { CalendarDays, CircleDollarSign, FileCheck2, Star } from 'lucide-react';

const requests = [
  { title: 'Thesis proposal review', student: 'Alicia', deadline: 'Tomorrow' },
  { title: 'SPSS analysis support', student: 'Marcus', deadline: '3 days' },
];

export default function ExpertPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">Expert workspace</p>
          <h1 className="mt-3 text-3xl font-semibold">Available and prepared.</h1>
          <p className="mt-3 max-w-2xl text-slate-600">You have two incoming requests that match your specializations and availability.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold">Assigned requests</h2>
            <div className="mt-6 space-y-4">
              {requests.map((request) => (
                <div key={request.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{request.title}</h3>
                    <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">Open</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">Student: {request.student}</p>
                  <div className="mt-3 flex items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-2"><CalendarDays size={16}/> {request.deadline}</span>
                    <span className="flex items-center gap-2"><FileCheck2 size={16}/> Review ready</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
              <h2 className="text-xl font-semibold">Performance metrics</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-2xl font-semibold">4.9</p>
                  <p className="mt-1 text-sm text-slate-600 flex items-center gap-2"><Star size={14}/> Rating</p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-2xl font-semibold">$1.8k</p>
                  <p className="mt-1 text-sm text-slate-600 flex items-center gap-2"><CircleDollarSign size={14}/> Earnings</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-lg">
              <h2 className="text-xl font-semibold">Availability</h2>
              <p className="mt-3 text-sm text-slate-300">Your calendar is open for three new consultations this week. The system will match you with requests that fit your expertise and schedule.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

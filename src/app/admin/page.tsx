import { Activity, DollarSign, Users, Workflow } from 'lucide-react';

const metrics = [
  { label: 'Projects', value: '312', icon: Workflow },
  { label: 'Active users', value: '1.2k', icon: Users },
  { label: 'Revenue', value: '$48k', icon: DollarSign },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">Admin console</p>
          <h1 className="mt-3 text-3xl font-semibold">Platform operations at a glance.</h1>
          <p className="mt-3 max-w-2xl text-slate-600">Monitor projects, payments, quality controls, and expert onboarding from one secure administrator view.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                  <Icon size={18} />
                </div>
                <p className="mt-4 text-3xl font-semibold">{metric.value}</p>
                <p className="mt-1 text-sm text-slate-600">{metric.label}</p>
              </div>
            );
          })}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <div className="flex items-center gap-2 text-slate-900">
            <Activity size={18} className="text-sky-700" />
            <h2 className="text-xl font-semibold">Recent activity</h2>
          </div>
          <div className="mt-6 space-y-3 text-sm text-slate-600">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">New expert verification request received from Dr. Amina H.</div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">Payment payout batch processed for 24 successful completions.</div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">Quality review flagged one document for formatting corrections.</div>
          </div>
        </div>
      </div>
    </main>
  );
}

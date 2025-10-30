import { Navigation } from '../../components/feature/Navigation';
import { TabBar } from '../../components/feature/TabBar';

export default function TrackPage() {
  const cards = [
    {
      title: 'Treatment Progress',
      value: '68% Complete',
      gradient: 'from-teal-400 to-teal-600',
      subtext: 'Week 22 of 32',
      icon: 'ri-line-chart-line'
    },
    {
      title: 'Aligner Wear Time',
      value: '21h avg/day',
      gradient: 'from-blue-500 to-blue-600',
      subtext: 'Great consistency',
      icon: 'ri-time-line'
    },
    {
      title: 'Streak',
      value: '14 days',
      gradient: 'from-amber-400 to-amber-600',
      subtext: 'No missed days',
      icon: 'ri-fire-line'
    }
  ];

  const milestones = [
    { label: 'Start', date: 'Jan 15', done: true },
    { label: 'Check-in 1', date: 'Feb 28', done: true },
    { label: 'Midpoint', date: 'Apr 20', done: true },
    { label: 'Check-in 2', date: 'Jun 05', done: false },
    { label: 'Finish', date: 'Aug 10', done: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
      <Navigation />

      <main className="pt-20 pb-20 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Progress Tracking</h1>
          <p className="text-gray-600 text-lg">Your orthodontic journey at a glance</p>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {cards.map((c, i) => (
            <div
              key={i}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${c.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                <i className={`${c.icon} text-white text-xl`}></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{c.title}</h3>
              <p className="text-2xl font-bold text-gray-900 mb-1">{c.value}</p>
              <p className="text-gray-600 text-sm font-medium">{c.subtext}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">Treatment Timeline</h2>
          <div className="relative">
            <div className="absolute top-4 left-0 right-0 h-1 bg-gray-100 rounded-full" />
            <div className="absolute top-4 left-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full" style={{ width: '68%' }} />
            <div className="grid grid-cols-5 gap-2 relative">
              {milestones.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className={`mx-auto w-8 h-8 rounded-full flex items-center justify-center shadow-md ${m.done ? 'bg-gradient-to-br from-teal-400 to-teal-600 text-white' : 'bg-white text-gray-500 border border-gray-200'}`}>
                    {m.done ? <i className="ri-check-line"></i> : <i className="ri-checkbox-blank-circle-line"></i>}
                  </div>
                  <p className="mt-2 text-sm font-semibold text-gray-800">{m.label}</p>
                  <p className="text-xs text-gray-500 font-medium">{m.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Goals */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50">
          <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">Weekly Goals</h2>
          <div className="space-y-3">
            {[
              'Wear aligners 22h/day',
              'Brush and floss after meals',
              'Upload weekly progress photo'
            ].map((g, idx) => (
              <label key={idx} className="flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50/60 transition-colors">
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="w-5 h-5 rounded-md text-teal-600 border-gray-300 focus:ring-teal-500" />
                  <span className="font-medium text-gray-800">{g}</span>
                </div>
                <span className="text-xs text-gray-500">This week</span>
              </label>
            ))}
          </div>
        </div>
      </main>

      <TabBar />
    </div>
  );
}



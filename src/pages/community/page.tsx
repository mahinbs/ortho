import { useMemo, useState } from 'react';
import { Navigation } from '../../components/feature/Navigation';
import { TabBar } from '../../components/feature/TabBar';
import { Button } from '../../components/base/Button';

type Role = 'All' | 'Dentists' | 'Orthodontists' | 'Patients';

export default function CommunityPage() {
  const [activeRole, setActiveRole] = useState<Role>('All');
  const [activeTag, setActiveTag] = useState<string>('All');

  const tags = ['All', 'Aligners', 'Braces', 'Whitening', 'Implants', 'Surgery', 'Pediatrics', 'Hygiene'];
  const roles: Role[] = ['All', 'Dentists', 'Orthodontists', 'Patients'];

  const discussions = useMemo(
    () => [
      {
        id: 'd1',
        title: 'Best practices for clear aligner refinement stages',
        excerpt: 'How many refinements do you typically plan for complex cases?',
        author: 'Dr. Emily Carter',
        role: 'Orthodontists' as Role,
        avatarColor: 'from-purple-400 to-purple-600',
        replies: 32,
        likes: 124,
        tag: 'Aligners'
      },
      {
        id: 'd2',
        title: 'Post-braces retention: fixed vs removable?',
        excerpt: 'Patients keep asking which retainer lasts longer and is easier to maintain.',
        author: 'Dr. Miguel Santos',
        role: 'Dentists' as Role,
        avatarColor: 'from-blue-400 to-blue-600',
        replies: 18,
        likes: 76,
        tag: 'Braces'
      },
      {
        id: 'd3',
        title: 'Tips for cleaning aligners without discoloration',
        excerpt: 'Any home-safe methods? I want to avoid harsh chemicals.',
        author: 'Priya N.',
        role: 'Patients' as Role,
        avatarColor: 'from-teal-400 to-teal-600',
        replies: 45,
        likes: 210,
        tag: 'Hygiene'
      }
    ],
    []
  );

  const filteredDiscussions = useMemo(() => {
    return discussions.filter((d) => (activeRole === 'All' || d.role === activeRole) && (activeTag === 'All' || d.tag === activeTag));
  }, [discussions, activeRole, activeTag]);

  const experts = [
    { name: 'Dr. Hana Lee', specialty: 'Adult Orthodontics', color: 'from-pink-400 to-pink-600' },
    { name: 'Dr. Omar Rahman', specialty: 'Surgical Orthodontics', color: 'from-amber-400 to-orange-600' },
    { name: 'Dr. Sofia Rossi', specialty: 'Invisible Aligners', color: 'from-emerald-400 to-emerald-600' },
  ];

  const events = [
    { title: 'Clear Aligner Summit 2025', date: 'Nov 12', type: 'Webinar', color: 'from-blue-500 to-indigo-600' },
    { title: 'In-Office Photography Masterclass', date: 'Nov 20', type: 'Workshop', color: 'from-teal-500 to-cyan-600' },
    { title: 'Pediatric Ortho Roundtable', date: 'Dec 05', type: 'Live Q&A', color: 'from-fuchsia-500 to-pink-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
      <Navigation />

      <main className="pt-20 pb-20 px-4">
        {/* Hero */}
        <section className="relative mb-10 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div className="relative overflow-hidden rounded-3xl bg-white/90 border border-white/60 shadow-xl">
            <div className="grid grid-cols-1">
              <div className="relative p-7">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-teal-200/40 to-blue-200/40 rounded-full blur-3xl"></div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg">
                    <i className="ri-community-line text-white text-2xl"></i>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">OrthoVerse Community</h1>
                    <p className="text-gray-600 leading-relaxed">Join dentists, orthodontists, and patients collaborating on better smiles. Ask questions, share outcomes, and learn from verified experts.</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {roles.map((role) => (
                    <button
                      key={role}
                      onClick={() => setActiveRole(role)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                        activeRole === role
                          ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white border-transparent shadow-md'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-teal-300 hover:text-teal-700'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>

                <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar pb-1">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(tag)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border whitespace-nowrap ${
                        activeTag === tag
                          ? 'bg-teal-50 text-teal-700 border-teal-200'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-teal-300 hover:text-teal-700'
                      }`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlight stats */}
        <section className="grid grid-cols-3 gap-3 mb-8">
          {[
            { label: 'Members', value: '12.4k', icon: 'ri-group-line', color: 'from-teal-500 to-teal-600' },
            { label: 'Experts', value: '480+', icon: 'ri-stethoscope-line', color: 'from-indigo-500 to-indigo-600' },
            { label: 'Active Today', value: '1.2k', icon: 'ri-flashlight-line', color: 'from-amber-500 to-orange-500' },
          ].map((s) => (
            <div key={s.label} className="bg-white/90 border border-white/60 backdrop-blur rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-md`}>
                  <i className={`${s.icon}`}></i>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 leading-tight">{s.value}</div>
                  <div className="text-xs text-gray-500 font-medium">{s.label}</div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Featured Experts */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 tracking-tight">Featured Experts</h2>
            <button className="text-teal-600 text-sm font-semibold hover:text-teal-700">See all</button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {experts.map((ex) => (
              <div key={ex.name} className="bg-white/90 border border-white/60 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ex.color} text-white flex items-center justify-center mb-2 shadow-md`}>
                  <i className="ri-user-smile-line text-xl"></i>
                </div>
                <div className="text-sm font-semibold text-gray-900 leading-tight">{ex.name}</div>
                <div className="text-xs text-gray-500">{ex.specialty}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Discussions */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 tracking-tight">Trending Discussions</h2>
            <button className="text-teal-600 text-sm font-semibold hover:text-teal-700">Start a thread</button>
          </div>
          <div className="space-y-3">
            {filteredDiscussions.map((d) => (
              <div key={d.id} className="bg-white/90 border border-white/60 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-3">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${d.avatarColor} text-white flex items-center justify-center shadow-md flex-shrink-0`}>
                    <i className="ri-chat-1-line text-lg"></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded-full">#{d.tag}</span>
                      <span className="text-xs text-gray-500">{d.role}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 leading-snug mb-1">{d.title}</h3>
                    <p className="text-sm text-gray-600 leading-snug mb-3">{d.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">by <span className="font-medium text-gray-700">{d.author}</span></div>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1"><i className="ri-message-2-line"></i>{d.replies}</span>
                        <span className="flex items-center gap-1"><i className="ri-heart-3-line"></i>{d.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Events */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 tracking-tight">Upcoming Events</h2>
            <button className="text-teal-600 text-sm font-semibold hover:text-teal-700">View calendar</button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {events.map((ev) => (
              <div key={ev.title} className="bg-white/90 border border-white/60 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ev.color} text-white flex items-center justify-center mb-2 shadow-md`}>
                  <i className="ri-calendar-event-line text-xl"></i>
                </div>
                <div className="text-sm font-semibold text-gray-900 leading-tight">{ev.title}</div>
                <div className="text-xs text-gray-500">{ev.type} • {ev.date}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative">
          <div className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 text-white shadow-2xl">
            <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_35%)]"></div>
            <div className="relative">
              <h3 className="text-xl font-bold mb-2">Become a Verified Expert</h3>
              <p className="text-white/90 mb-4">Dentists and orthodontists can unlock badges, host AMAs, and earn referrals.</p>
              <div className="flex gap-3">
                <Button onClick={() => {}} className="!bg-white !text-teal-700 !hover:bg-white/90">Apply Now</Button>
                <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 font-semibold">Learn more</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <TabBar />
    </div>
  );
}



import { useState } from 'react';
import { Navigation } from '../../components/feature/Navigation';
import { TabBar } from '../../components/feature/TabBar';

export default function ConsultPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    reason: '',
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));
  
  const doctors = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Orthodontist, DDS MS',
      rating: 4.9,
      reviews: 214,
      photo: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=400&h=400&fit=crop&crop=faces',
      tags: ['Invisalign', 'Teens', 'Adults'],
      available: 'Today, 2:00 PM'
    },
    {
      name: 'Dr. Michael Johnson',
      role: 'Orthodontist, DDS',
      rating: 4.8,
      reviews: 167,
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&fit=crop&crop=faces',
      tags: ['Braces', 'Clear Aligners'],
      available: 'Tomorrow, 11:00 AM'
    },
    {
      name: 'Dr. Aisha Patel',
      role: 'Orthodontist, BDS MOrth',
      rating: 5.0,
      reviews: 98,
      photo: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=400&h=400&fit=crop&crop=faces',
      tags: ['Aesthetic Focus', 'Adults'],
      available: 'Fri, 9:30 AM'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      <Navigation />

      <main className="pt-20 pb-20 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Virtual Consultation</h1>
          <p className="text-gray-600 text-lg">Book time with a certified orthodontist</p>
        </div>

        {/* Hero card */}
        <div className="relative mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-blue-500 to-teal-500 rounded-3xl blur opacity-20"></div>
          <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/60 overflow-hidden">
            <img
              src="https://res.cloudinary.com/dknafpppp/image/upload/v1761805352/istockphoto-1178133105-612x612_mgcl0e.jpg"
              alt="Consult preview"
              className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
            />
            <div className="relative z-10 flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl">
                <i className="ri-video-chat-line text-white text-2xl"></i>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 tracking-tight">Meet your specialist online</h2>
                <p className="text-gray-600 font-medium">Secure HD video, share photos, get a personalized plan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Doctors list */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/60 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">Available Specialists</h3>
            <button className="text-sm font-semibold text-purple-600 hover:text-purple-700">View all</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {doctors.map((d, i) => (
              <div key={i} className="group bg-white/90 rounded-2xl p-4 border border-white/60 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center space-x-4">
                  <img src={d.photo} alt={d.name} className="w-14 h-14 rounded-2xl object-cover shadow" />
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 leading-tight">{d.name}</p>
                    <p className="text-sm text-gray-600 font-medium">{d.role}</p>
                    <div className="flex items-center text-amber-500 text-sm font-semibold mt-1">
                      <i className="ri-star-fill mr-1"></i>
                      {d.rating}
                      <span className="text-gray-500 font-medium ml-1">({d.reviews})</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {d.tags.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between mt-auto">
                  <span className="text-xs text-gray-500 font-medium">Next slot: <span className="text-gray-700 font-semibold">{d.available}</span></span>
                  <button className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-500 to-teal-600 text-white text-sm font-semibold py-2 px-3 rounded-full shadow hover:shadow-md transition-all">
                    <i className="ri-calendar-line text-xs"></i>
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking form */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/60">
          <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Book a consultation</h3>

          <div className="grid grid-cols-2 gap-4">
            <label className="col-span-2">
              <span className="block text-sm font-semibold text-gray-700 mb-2">Full name</span>
              <input
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder="John Doe"
                className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </label>

            <label className="col-span-2">
              <span className="block text-sm font-semibold text-gray-700 mb-2">Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </label>

            <label>
              <span className="block text-sm font-semibold text-gray-700 mb-2">Preferred date</span>
              <input
                type="date"
                value={form.date}
                onChange={(e) => update('date', e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </label>

            <label>
              <span className="block text-sm font-semibold text-gray-700 mb-2">Preferred time</span>
              <select className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-300">
                {['09:00','10:00','11:00','14:00','15:00','16:00'].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>

            <label className="col-span-2">
              <span className="block text-sm font-semibold text-gray-700 mb-2">Reason for consultation</span>
              <textarea
                rows={4}
                value={form.reason}
                onChange={(e) => update('reason', e.target.value)}
                placeholder="Tell us about your goals or concerns..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </label>
          </div>

          <div className="mt-6">
            <button className="relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-blue-600 to-teal-600 text-white font-semibold py-3 px-5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-purple-300">
              <i className="ri-send-plane-line text-sm"></i>
              Request Appointment
            </button>
          </div>
        </div>
      </main>

      <TabBar />
    </div>
  );
}



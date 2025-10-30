import { useState } from 'react';
import { Navigation } from '../../components/feature/Navigation';
import { TabBar } from '../../components/feature/TabBar';
import { Button } from '../../components/base/Button';

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
      <Navigation />

      <main className="pt-24 pb-24 px-4 max-w-xl mx-auto">
        {/* Header */}
        <div className="relative mb-6">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 blur-lg opacity-20"></div>
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/60">
            <div className="flex items-center">
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=smiling%20person%20portrait%2C%20soft%20light%2C%20clean%20studio%20background%2C%20avatar%20photo&width=96&height=96&seq=avatar1"
                  alt="Profile avatar"
                  className="w-20 h-20 rounded-2xl object-cover shadow-lg"
                />
                <span className="absolute -bottom-1 -right-1 inline-flex items-center justify-center w-7 h-7 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md">
                  <i className="ri-shield-check-line text-base"></i>
                </span>
              </div>
              <div className="ml-5 flex-1">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Alex Johnson</h1>
                <p className="text-gray-600">Member since 2024</p>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" onClick={() => setEditing(!editing)}>
                    {editing ? 'Save changes' : 'Edit profile'}
                  </Button>
                  <Button size="sm" variant="outline">
                    <i className="ri-share-line mr-1"></i>
                    Share progress
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: 'Scans', value: 12, icon: 'ri-camera-line', color: 'from-teal-400 to-teal-600' },
            { label: 'Progress', value: '68%', icon: 'ri-line-chart-line', color: 'from-blue-400 to-blue-600' },
            { label: 'Badges', value: 4, icon: 'ri-award-line', color: 'from-amber-400 to-orange-500' }
          ].map((s, i) => (
            <div key={i} className="relative overflow-hidden bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg border border-white/60">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center shadow-md mb-3`}>
                <i className={`${s.icon}`}></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 leading-none">{s.value}</div>
              <div className="text-sm text-gray-500 font-medium">{s.label}</div>
              <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-gradient-to-br from-white/0 to-teal-50/60" />
            </div>
          ))}
        </div>

        {/* Profile details */}
        <section className="bg-white/95 backdrop-blur rounded-3xl p-6 shadow-xl border border-white/60 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 tracking-tight">Personal info</h2>
            {!editing && (
              <button onClick={() => setEditing(true)} className="text-teal-600 font-semibold hover:text-teal-700">Edit</button>
            )}
          </div>
          <div className="space-y-4">
            {[
              { label: 'Full name', value: 'Alex Johnson' },
              { label: 'Email', value: 'alex.johnson@example.com' },
              { label: 'Phone', value: '+1 (555) 123-4567' },
              { label: 'Location', value: 'San Francisco, CA' }
            ].map((item, idx) => (
              <div key={idx} className="grid grid-cols-3 gap-3 items-center">
                <div className="text-sm font-medium text-gray-500">{item.label}</div>
                <div className="col-span-2">
                  {editing ? (
                    <input
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-300/60"
                      defaultValue={item.value}
                      aria-label={item.label}
                      placeholder={item.label}
                    />
                  ) : (
                    <div className="text-gray-800 font-semibold">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Treatment */}
        <section className="bg-white/95 backdrop-blur rounded-3xl p-6 shadow-xl border border-white/60 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 tracking-tight">Treatment</h2>
            <span className="text-sm text-gray-500">Aligners · Plan A</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Overall progress</span>
              <span className="text-lg font-bold text-teal-600">68%</span>
            </div>
            <div className="relative">
              <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
                <div className="bg-gradient-to-r from-teal-400 to-teal-600 h-3 rounded-full shadow-lg transition-all" style={{ width: '68%' }}></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2"><i className="ri-calendar-line text-teal-600"></i> Started: Jan 15, 2024</div>
              <div className="flex items-center gap-2"><i className="ri-timer-line text-teal-600"></i> Est. completion: Aug 2024</div>
            </div>
            <div className="pt-2">
              <Button size="sm" variant="outline">
                View detailed timeline
              </Button>
            </div>
          </div>
        </section>

        {/* Preferences & Security */}
        <section className="grid grid-cols-1 gap-6 mb-6">
          <div className="bg-white/95 backdrop-blur rounded-3xl p-6 shadow-xl border border-white/60">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 tracking-tight">Preferences</h2>
            </div>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <i className="ri-notification-3-line text-teal-600"></i>
                  <span className="text-gray-800 font-medium">Notifications</span>
                </div>
                <input type="checkbox" defaultChecked className="toggle toggle-teal"/>
              </label>
              <label className="flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <i className="ri-sun-line text-teal-600"></i>
                  <span className="text-gray-800 font-medium">Light theme</span>
                </div>
                <input type="checkbox" defaultChecked className="toggle toggle-teal"/>
              </label>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur rounded-3xl p-6 shadow-xl border border-white/60">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 tracking-tight">Security</h2>
            </div>
            <div className="space-y-3">
              <Button size="sm" variant="outline" className="w-full justify-start">
                <i className="ri-lock-2-line mr-2"></i>
                Change password
              </Button>
              <Button size="sm" variant="outline" className="w-full justify-start">
                <i className="ri-shield-keyhole-line mr-2"></i>
                Two-factor authentication
              </Button>
            </div>
          </div>
        </section>

        {/* Danger & Sign out */}
        <div className="space-y-3 mb-4">
          <Button variant="secondary" className="w-full">
            <i className="ri-upload-cloud-2-line mr-2"></i>
            Export my data
          </Button>
          <Button variant="ghost" className="w-full text-red-600 hover:text-red-700 hover:bg-red-50">
            <i className="ri-logout-box-r-line mr-2"></i>
            Sign out
          </Button>
        </div>

        <p className="text-center text-xs text-gray-400">OrthoVerse v1.0.0</p>
      </main>

      <TabBar />
    </div>
  );
}




import { useNavigate, useLocation } from 'react-router-dom';

export const TabBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { path: '/', label: 'Home', icon: 'ri-home-line', iconFilled: 'ri-home-fill' },
    { path: '/scan', label: 'AI Scan', icon: 'ri-camera-line', iconFilled: 'ri-camera-fill' },
    { path: '/track', label: 'Track', icon: 'ri-line-chart-line', iconFilled: 'ri-line-chart-fill' },
    { path: '/consult', label: 'Consult', icon: 'ri-video-chat-line', iconFilled: 'ri-video-chat-fill' },
    { path: '/profile', label: 'Profile', icon: 'ri-user-line', iconFilled: 'ri-user-fill' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="mx-3 mb-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-5 px-1 py-1">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={`relative flex flex-col items-center justify-center py-2 px-2 transition-all ${
                isActive ? 'text-teal-700' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {isActive && (
                <div className="absolute inset-y-1 left-1 right-1 rounded-xl bg-gradient-to-r from-teal-100 to-emerald-100 shadow-inner" />
              )}
              <div className="relative z-10 w-9 h-9 rounded-xl flex items-center justify-center mb-1 shadow-sm transition-transform duration-200
                bg-gradient-to-br from-teal-400/10 to-teal-600/10
                ${isActive ? 'scale-105 shadow-md ring-1 ring-teal-300/40 bg-gradient-to-br from-teal-400/20 to-teal-600/20' : ''}">
                <i className={`${isActive ? tab.iconFilled : tab.icon} text-[18px]`}></i>
              </div>
              <span className={`relative z-10 text-[11px] font-medium ${isActive ? 'text-teal-700' : ''}`}>{tab.label}</span>
              {isActive && <span className="absolute -bottom-1 h-1 w-6 rounded-full bg-teal-400/70"></span>}
            </button>
          );
        })}
        </div>
      </div>
    </div>
  );
};


import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: 'ri-home-line' },
    { path: '/scan', label: 'AI Scan', icon: 'ri-camera-line' },
    { path: '/track', label: 'Track', icon: 'ri-line-chart-line' },
    { path: '/community', label: 'Community', icon: 'ri-community-line' },
    { path: '/consult', label: 'Consult', icon: 'ri-video-chat-line' },
    { path: '/profile', label: 'Profile', icon: 'ri-user-line' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
              <i className="ri-tooth-line text-white text-lg"></i>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent" style={{ fontFamily: 'Pacifico, serif' }}>
              OrthoVerse
            </span>
          </div>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-teal-600 transition-colors"
            aria-label="Toggle menu"
            title="Toggle menu"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="mt-4 pb-2">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center p-3 rounded-xl transition-all ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white'
                      : 'text-gray-600 hover:bg-teal-50 hover:text-teal-600'
                  }`}
                >
                  <i className={`${item.icon} text-lg mr-2`}></i>
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

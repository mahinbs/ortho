
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../../components/feature/Navigation';
import { TabBar } from '../../components/feature/TabBar';
import { Button } from '../../components/base/Button';

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      title: 'AI Smile Detection',
      description: 'Upload a photo and get instant AI analysis of your smile',
      icon: 'ri-camera-ai-line',
      color: 'from-blue-500 to-blue-600',
      action: () => navigate('/scan'),
      image:
        'https://res.cloudinary.com/dknafpppp/image/upload/v1761805353/1_hqBcwz3fLvLCwBNLA4APYg_obdelz.png'
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your orthodontic treatment progress with AI',
      icon: 'ri-line-chart-line',
      color: 'from-green-500 to-green-600',
      action: () => navigate('/track'),
      image:
        'https://res.cloudinary.com/dknafpppp/image/upload/v1761805352/images_kxcgwp.jpg'
    },
    {
      title: 'Virtual Consultation',
      description: 'Connect with certified orthodontists online',
      icon: 'ri-video-chat-line',
      color: 'from-purple-500 to-purple-600',
      action: () => navigate('/consult'),
      image:
        'https://res.cloudinary.com/dknafpppp/image/upload/v1761805352/istockphoto-1178133105-612x612_mgcl0e.jpg'
    },
    {
      title: 'AR Smile Preview',
      description: 'See your future smile with augmented reality',
      icon: 'ri-magic-line',
      color: 'from-pink-500 to-pink-600',
      action: () => navigate('/ar-preview'),
      image:
        'https://res.cloudinary.com/dknafpppp/image/upload/v1761805353/00013749638811411006082823_normal_wnxvpw.png'
    }
  ];

  const quickActions = [
    {
      title: 'Scan Smile',
      icon: 'ri-camera-line',
      path: '/scan',
      image:
        'https://res.cloudinary.com/dknafpppp/image/upload/v1761805353/00013749638811411006082823_normal_wnxvpw.png'
    },
    {
      title: 'Track Progress',
      icon: 'ri-line-chart-line',
      path: '/track',
      image:
        'https://res.cloudinary.com/dknafpppp/image/upload/v1761805353/1_hqBcwz3fLvLCwBNLA4APYg_obdelz.png'
    },
    {
      title: 'Book Consult',
      icon: 'ri-calendar-line',
      path: '/consult',
      image:
        'https://res.cloudinary.com/dknafpppp/image/upload/v1761805352/istockphoto-1178133105-612x612_mgcl0e.jpg'
    },
    {
      title: 'Community',
      icon: 'ri-group-line',
      path: '/community',
      image:
        'https://res.cloudinary.com/dknafpppp/image/upload/v1761805352/community-care-icons-team-help-illustration_911078-7846_auvlaq.avif'
    },
    {
      title: 'Education',
      icon: 'ri-book-line',
      path: '/education',
      image:
        'https://res.cloudinary.com/dknafpppp/image/upload/v1761805352/creative-colorful-education-illustration-with-books-school-supplies_1300528-8860_gc2zq4.avif'
    },
    {
      title: 'Marketplace',
      icon: 'ri-shopping-bag-line',
      path: '/marketplace',
      image:
        'https://res.cloudinary.com/dknafpppp/image/upload/v1761805352/images_kxcgwp.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
      <Navigation />
      
      <main className="pt-20 pb-20 px-4">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <div className="relative mb-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Beautiful%20young%20woman%20with%20perfect%20white%20teeth%20smiling%20confidently%2C%20professional%20dental%20photography%2C%20clean%20white%20background%2C%20soft%20lighting%2C%20high%20quality%20portrait%2C%20orthodontic%20treatment%20result%2C%20bright%20smile%2C%20dental%20health%20concept%2C%20premium%20aesthetic%2C%20luxury%20feel&width=350&height=220&seq=hero1&orientation=landscape"
                alt="Perfect Smile"
                className="w-full h-56 object-cover object-top rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h1 className="text-3xl font-bold mb-3 tracking-tight">Welcome to OrthoVerse</h1>
                <p className="text-base opacity-95 font-medium">AI + Orthodontics = The Future of Smiles</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">Quick Actions</h2>
          <div className="grid grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => navigate(action.path)}
                className="relative overflow-hidden group bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 hover:border-teal-200/50 hover:-translate-y-1 ring-1 ring-transparent group-hover:ring-teal-200/60"
              >
                {/* Soft glow + ring on hover */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-teal-50/70 via-white/40 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Sweeping shine */}
                <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-4 mx-auto overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <img
                    src={action.image}
                    alt={action.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:rotate-3"
                  />
                </div>
                <span className="text-sm font-semibold text-gray-800 text-center block leading-tight">{action.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">Featured Services</h2>
          <div className="space-y-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-white/95 backdrop-blur-lg rounded-3xl p-7 shadow-xl hover:shadow-2xl border border-white/60 transition-all duration-500 hover:-translate-y-2 ${
                  selectedFeature === index ? 'ring-2 ring-teal-400/60 shadow-teal-200/50' : ''
                } overflow-hidden`}
                onClick={() => setSelectedFeature(index)}
              >
                {/* Background illustrative image */}
                <img
                  src={feature.image}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover rounded-3xl ${index === 3 ? 'opacity-20' : 'opacity-25'} mix-blend-multiply z-0 pointer-events-none`}
                />
                {/* Subtle background gradient overlay for readability */}
                <div className={`absolute inset-0 rounded-3xl backdrop-blur-sm z-[1] ${index === 3 ? 'bg-white/80' : 'bg-white/70'}`}></div>
                
                {/* Floating orb effect */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-teal-200/20 to-blue-200/20 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex items-start space-x-6">
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    {/* Icon glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
                    <i className={`${feature.icon} text-white text-2xl relative z-10`}></i>
                  </div>
                  <div className="flex-1 relative">
                    <h3 className="font-bold text-gray-900 mb-3 text-xl tracking-tight group-hover:text-gray-800 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
                    
                    {/* Compact stylish button */}
                    <div className="relative inline-block">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <button
                        onClick={feature.action}
                        className="relative inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-teal-300/60 group/btn overflow-hidden"
                      >
                        {/* Subtle shine */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                        <span className="relative">Get Started</span>
                        <i className="ri-arrow-right-line text-sm relative"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 mb-10 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">Your Progress</h2>
            <button 
              onClick={() => navigate('/track')}
              className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
            >
              View All
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Treatment Progress</span>
              <span className="text-lg font-bold text-teal-600">68%</span>
            </div>
            <div className="relative">
              <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
                <div className="bg-gradient-to-r from-teal-400 to-teal-600 h-3 rounded-full shadow-lg transition-all duration-500" style={{ width: '68%' }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500 font-medium">
              <span>Started: Jan 15, 2024</span>
              <span>Est. Completion: Aug 2024</span>
            </div>
          </div>
        </div>

        {/* Community Highlights */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">Community</h2>
            <button 
              onClick={() => navigate('/community')}
              className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
            >
              Join Now
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-gray-50/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">SA</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Sarah A.</p>
                <p className="text-sm text-gray-600">Shared her 6-month progress photos</p>
              </div>
              <span className="text-xs text-gray-400 font-medium">2h</span>
            </div>
            <div className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-gray-50/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">MJ</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Dr. Mike J.</p>
                <p className="text-sm text-gray-600">Posted treatment tips for aligners</p>
              </div>
              <span className="text-xs text-gray-400 font-medium">4h</span>
            </div>
          </div>
        </div>
      </main>

      <TabBar />
    </div>
  );
}

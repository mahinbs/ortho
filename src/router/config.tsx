
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home/page'));
const ScanPage = lazy(() => import('../pages/scan/page'));
const TrackPage = lazy(() => import('../pages/track/page'));
const ConsultPage = lazy(() => import('../pages/consult/page'));
const ProfilePage = lazy(() => import('../pages/profile/page'));
const CommunityPage = lazy(() => import('../pages/community/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/scan',
    element: <ScanPage />
  },
  {
    path: '/track',
    element: <TrackPage />
  },
  {
    path: '/consult',
    element: <ConsultPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/ar-preview',
    element: <div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="text-center"><h1 className="text-2xl font-bold text-gray-800 mb-2">AR Smile Preview</h1><p className="text-gray-600">Coming Soon</p></div></div>
  },
  {
    path: '/community',
    element: <CommunityPage />
  },
  {
    path: '/education',
    element: <div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="text-center"><h1 className="text-2xl font-bold text-gray-800 mb-2">Education Hub</h1><p className="text-gray-600">Coming Soon</p></div></div>
  },
  {
    path: '/marketplace',
    element: <div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="text-center"><h1 className="text-2xl font-bold text-gray-800 mb-2">Marketplace</h1><p className="text-gray-600">Coming Soon</p></div></div>
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];

export default routes;

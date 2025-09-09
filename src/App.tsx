import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import AppRoutes from './routes';
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const Chatbot = lazy(() => import('./components/Chatbot'));
const BackgroundBeams = lazy(() => import('./components/BackgroundBeams'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
    <div className="min-h-screen bg-gray-900 text-white flex flex-col relative overflow-hidden font-sans">
          <BackgroundBeams />
          <Navbar />
          <main className="flex-1 relative z-10">
            <AppRoutes />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

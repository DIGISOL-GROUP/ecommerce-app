import React from 'react';

const Testimonials: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
  <h2 className="text-3xl font-semibold mb-6 text-cyan-400">Testimonials</h2>
    <div className="bg-glass rounded-glass p-6 shadow-glass mb-8">
      <div className="flex gap-4 overflow-x-auto animate-pulse">
  <div className="min-w-[300px] bg-cyan-900 rounded-glass p-4 text-cyan-300">“Voltora changed our business!” – Alice</div>
  <div className="min-w-[300px] bg-cyan-900 rounded-glass p-4 text-cyan-300">“Reliable and efficient.” – Bob</div>
  <div className="min-w-[300px] bg-cyan-900 rounded-glass p-4 text-cyan-300">“Best energy solution.” – Eve</div>
      </div>
    </div>
    <div className="bg-glass rounded-glass p-6 shadow-glass">
  <h3 className="text-xl font-bold text-cyan-400 mb-2">Video Testimonials</h3>
      <div className="w-full h-64 bg-gradient-to-r from-cyan-400 to-magenta rounded-glass flex items-center justify-center">
  <span className="text-cyan-300">[Video Testimonial Placeholder]</span>
      </div>
    </div>
  </div>
);

export default Testimonials;

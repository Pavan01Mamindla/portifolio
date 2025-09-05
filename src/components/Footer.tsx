import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Pavan <span className="text-blue-400"> Mamindla</span>
          </h3>
          
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Thank you for visiting my portfolio. Let's build something amazing together!
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
            <span>Built with</span>
            <Heart size={16} className="text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-500 text-sm">
              © 2025 Mamindla Pavan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transform hover:scale-110 transition-all duration-200 shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
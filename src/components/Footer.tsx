import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-cyan-500/20 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-300">
            <span>Made with</span>
            <Heart className="text-red-400" size={16} fill="currentColor" />
            <span>and</span>
            <Code className="text-cyan-400" size={16} />
            <span>by Parv Yadav</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2024 Parv Yadav. All rights reserved.
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
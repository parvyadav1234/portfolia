import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900/30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300d4ff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent animate-pulse">
            Parv Yadav
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-4 font-medium">
            I find bugs before you find it
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer skilled in frontend and backend tech, building responsive and scalable web apps.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/parvyadav1234"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-cyan-500/20 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-gray-800/70 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/parv-yadav-812bb0325/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-cyan-500/20 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-gray-800/70 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:parvy09@gmail.com"
            className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-cyan-500/20 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-gray-800/70 transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => {
            const element = document.getElementById('about');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
        >
          Get to know me
          <ChevronDown className="ml-2 animate-bounce" size={20} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  )
  );
};

export default Hero;
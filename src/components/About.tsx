import React from 'react';
import { GraduationCap, Target, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate developer on a journey to master full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Current Role */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg mr-4">
                <GraduationCap className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Current Role</h3>
            </div>
            <p className="text-gray-300">
              3rd year BTech CSE student, diving deep into computer science fundamentals and practical applications.
            </p>
          </div>

          {/* Goal */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg mr-4">
                <Target className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Goal</h3>
            </div>
            <p className="text-gray-300">
              Becoming a proficient full-stack developer, creating innovative solutions that make a difference.
            </p>
          </div>

          {/* Passion */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg mr-4">
                <Code className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Passion</h3>
            </div>
            <p className="text-gray-300">
              I love finding and fixing bugs, ensuring code quality and creating seamless user experiences.
            </p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mt-16 bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">My Journey</h3>
          <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            As a dedicated computer science student, I'm passionate about creating robust, scalable applications 
            that solve real-world problems. My expertise spans both frontend and backend development, with a 
            particular focus on building responsive web applications. I believe in writing clean, maintainable 
            code and have developed a keen eye for spotting potential issues before they become problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
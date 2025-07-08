import React from 'react';
import { Code, Database, Globe, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Python', 'JavaScript', 'HTML', 'CSS'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['React', 'HTML5', 'CSS3', 'Responsive Design'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Python', 'API Development', 'Database Design'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tools',
      icon: Terminal,
      skills: ['Git', 'VS Code', 'Streamlit', 'OpenCV'],
      color: 'from-pink-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between p-2 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
                    >
                      <span className="text-gray-300">{skill}</span>
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">Frontend Development</h4>
              <p className="text-gray-300">Building responsive, interactive user interfaces with React and modern CSS</p>
            </div>
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">Backend Development</h4>
              <p className="text-gray-300">Creating robust server-side applications and APIs with Python</p>
            </div>
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">Problem Solving</h4>
              <p className="text-gray-300">Debugging and optimizing code for performance and maintainability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
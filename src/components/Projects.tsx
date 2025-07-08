import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'StyleMe',
      description: 'StyleMe is an AI-driven web application built using Python (with Streamlit and OpenCV) that provides personalized clothing recommendations based on the user\'s body type. The aim is to help users find outfits that suit their physical shape, improving their shopping experience and confidence in style.',
      technologies: ['Python', 'Streamlit', 'OpenCV', 'AI/ML'],
      githubLink: 'https://github.com/parvyadav1234',
      featured: true
    },
    // Adding placeholder projects to show full portfolio capability
    {
      title: 'Web Portfolio',
      description: 'A modern, responsive portfolio website showcasing my projects and skills. Built with React and Tailwind CSS featuring a cyber-dark theme with smooth animations.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubLink: 'https://github.com/parvyadav1234',
      featured: false
    },
    {
      title: 'Bug Tracker Pro',
      description: 'A comprehensive bug tracking system that helps development teams identify, track, and resolve issues efficiently. Features real-time collaboration and detailed reporting.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      githubLink: 'https://github.com/parvyadav1234',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing my passion for creating innovative solutions
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 ${
                project.featured 
                  ? 'border-cyan-400/40 hover:border-cyan-400/60' 
                  : 'border-cyan-500/20 hover:border-cyan-400/40'
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/30">
                  <Sparkles className="text-cyan-400" size={16} />
                  <span className="text-cyan-400 text-sm font-medium">Featured</span>
                </div>
              )}
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800/50 text-cyan-400 rounded-full text-sm border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col justify-center space-y-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/50 hover:bg-gray-800/70 text-white rounded-lg transition-all duration-300 hover:scale-105 border border-cyan-500/20 hover:border-cyan-400/40"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                  {project.featured && (
                    <div className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-lg border border-cyan-400/30">
                      <ExternalLink size={20} />
                      <span>Coming Soon</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/parvyadav1234"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            <span>Visit My GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
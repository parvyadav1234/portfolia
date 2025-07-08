import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Cybersecurity Analyst Job Simulation',
      platform: 'Tata Group',
      date: 'Apr 2025',
      certificateLink: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_qZHryLc6LkXjwC69r_1744400118127_completion_certificate.pdf',
      description: 'Comprehensive simulation covering cybersecurity analysis, threat detection, and incident response protocols.',
      featured: true
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                      <Award className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-cyan-400 font-medium">{cert.platform}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={cert.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    <ExternalLink size={20} />
                    <span>View Certificate</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className="mt-16 bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Professional Development</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-cyan-400" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Continuous Learning</h4>
              <p className="text-gray-300">Always updating skills with latest technologies and best practices</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-cyan-400" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Industry Recognition</h4>
              <p className="text-gray-300">Recognized expertise in cybersecurity and development practices</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-cyan-400" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Future Goals</h4>
              <p className="text-gray-300">Pursuing advanced certifications in full-stack development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
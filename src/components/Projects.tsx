import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A full-featured e-commerce platform with payment integration and admin dashboard.',
      gradient: 'from-orange-500 to-red-500',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Social Media App',
      category: 'Mobile & Web',
      description: 'Real-time social networking application with chat and video features.',
      gradient: 'from-red-500 to-pink-500',
      tags: ['React Native', 'Firebase', 'TypeScript'],
    },
    {
      title: 'AI Dashboard',
      category: 'UI/UX Design',
      description: 'Modern analytics dashboard with AI-powered insights and data visualization.',
      gradient: 'from-pink-500 to-purple-500',
      tags: ['Next.js', 'TailwindCSS', 'D3.js'],
    },
    {
      title: 'Fitness Tracker',
      category: 'Mobile App',
      description: 'Cross-platform fitness tracking app with workout plans and nutrition guidance.',
      gradient: 'from-purple-500 to-orange-500',
      tags: ['Flutter', 'Dart', 'SQLite'],
    },
    {
      title: 'Real Estate Portal',
      category: 'Web Development',
      description: 'Property listing platform with advanced search and virtual tour features.',
      gradient: 'from-orange-500 to-yellow-500',
      tags: ['Vue.js', 'Laravel', 'MySQL'],
    },
    {
      title: 'Learning Platform',
      category: 'EdTech',
      description: 'Online learning platform with video courses, quizzes, and progress tracking.',
      gradient: 'from-green-500 to-blue-500',
      tags: ['Angular', 'Express', 'PostgreSQL'],
    },
  ];

  return (
    <section id="projects" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-medium tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my recent work showcasing my skills in development and design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transform transition-all duration-500 ${
                    hoveredIndex === index ? 'scale-110 rotate-12' : 'scale-100'
                  }`}>
                    <ExternalLink className="text-white" size={32} />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                    <ArrowUpRight className="text-white" size={20} />
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <p className="text-orange-500 text-sm font-medium mb-2">{project.category}</p>
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-zinc-800 text-gray-300 rounded-full text-xs border border-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-transparent border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 font-medium">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

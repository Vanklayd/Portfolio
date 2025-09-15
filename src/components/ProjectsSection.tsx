import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'TaskFlow Mobile App',
      category: 'App Development',
      description: 'A productivity app built with React Native, featuring task management, progress tracking, and team collaboration. Implemented real-time synchronization and offline capabilities.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTc4ODUwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
      year: '2024'
    },
    {
      id: 2,
      title: 'Creative Portfolio Platform',
      category: 'Web Design',
      description: 'A modern web platform for creative professionals to showcase their work. Features responsive design, dynamic galleries, and smooth animations built with Next.js.',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU3ODY3MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      year: '2024'
    },
    {
      id: 3,
      title: 'AI Chess Companion',
      category: 'AI-Powered Game',
      description: 'An intelligent chess game that adapts to player skill level using machine learning. Features move suggestions, position analysis, and personalized training modules.',
      image: 'https://images.unsplash.com/photo-1745674684587-bc050b00ad7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MXx8fHwxNzU3ODg5MTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'TensorFlow', 'React', 'Socket.io'],
      year: '2023'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in app development, 
            web design, and AI-powered applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="backdrop-blur-lg bg-white/40 border border-white/30 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/50">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="backdrop-blur-sm bg-white/70 px-3 py-1 rounded-full text-sm text-gray-700">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="backdrop-blur-sm bg-white/70 px-3 py-1 rounded-full text-sm text-gray-700">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="backdrop-blur-sm bg-white/60 border border-white/40 px-3 py-1 rounded-full text-xs text-gray-700 hover:bg-white/80 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <div className="pt-2">
                    <button className="text-gray-800 hover:text-gray-600 transition-colors duration-300 group/btn">
                      <span className="flex items-center space-x-2">
                        <span>View Project</span>
                        <svg 
                          className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
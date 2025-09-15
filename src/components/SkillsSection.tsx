export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 90 }
      ]
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 70 },
        { name: 'iOS Development', level: 65 },
        { name: 'Android Development', level: 70 }
      ]
    },
    {
      title: 'Backend & AI',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 85 },
        { name: 'TensorFlow', level: 75 },
        { name: 'Firebase', level: 80 },
        { name: 'PostgreSQL', level: 70 }
      ]
    },
    {
      title: 'Design & Tools',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe Creative Suite', level: 80 },
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-6">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="backdrop-blur-lg bg-white/30 border border-white/20 rounded-3xl p-8 shadow-xl hover:bg-white/40 transition-all duration-500"
              style={{
                animationDelay: `${categoryIndex * 0.1}s`
              }}
            >
              <h3 className="text-xl text-gray-900 mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    
                    <div className="relative">
                      <div className="h-2 backdrop-blur-sm bg-white/40 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-gray-400 to-gray-600 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl text-gray-900 mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'GraphQL', 'Redis', 'MongoDB', 'AWS', 'Vercel', 'Sass', 'Webpack',
              'Jest', 'Cypress', 'Storybook', 'Three.js', 'D3.js', 'Socket.io',
              'Express.js', 'REST APIs', 'Microservices', 'CI/CD', 'Agile'
            ].map((tech, index) => (
              <span
                key={tech}
                className="backdrop-blur-sm bg-white/40 border border-white/30 px-4 py-2 rounded-full text-gray-700 hover:bg-white/60 transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  animationDelay: `${index * 0.05}s`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
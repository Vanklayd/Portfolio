export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          {/* Hero Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-lg">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-3xl text-gray-600">AC</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl text-gray-900 tracking-tight">
              Computer Science Student
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative digital experiences through code. 
              3 years of experience building apps, designing interfaces, and exploring AI.
            </p>
          </div>

          {/* Glassmorphism Card */}
          <div className="mt-16">
            <div className="backdrop-blur-lg bg-white/30 border border-white/20 rounded-3xl p-8 shadow-xl max-w-3xl mx-auto">
              <h2 className="text-2xl text-gray-900 mb-6">About Me</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I'm a dedicated computer science student with a passion for turning complex problems 
                  into elegant solutions. Over the past three years, I've immersed myself in various 
                  aspects of software development, from mobile applications to web interfaces and 
                  AI-powered experiences.
                </p>
                <p>
                  My journey began with curiosity about how digital products work, and has evolved 
                  into a comprehensive skill set spanning multiple programming languages, frameworks, 
                  and design principles. I believe in clean code, user-centered design, and the 
                  power of technology to solve real-world problems.
                </p>
                <p>
                  When I'm not coding, you can find me exploring the latest tech trends, contributing 
                  to open-source projects, or sketching out ideas for my next creative venture.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '15+', label: 'Projects Completed' },
              { number: '5+', label: 'Technologies Mastered' }
            ].map((stat, index) => (
              <div key={index} className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <div className="text-3xl text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
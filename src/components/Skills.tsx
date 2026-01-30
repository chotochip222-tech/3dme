export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Next.js', level: 88 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 87 },
      ],
    },
    {
      title: 'Design',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe XD', level: 85 },
        { name: 'Photoshop', level: 78 },
        { name: 'Illustrator', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-medium tracking-widest uppercase mb-4">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-orange-500">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-orange-500/50 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-orange-500 text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular', 'Next.js',
              'Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB',
              'Docker', 'AWS', 'Git', 'Figma', 'Tailwind', 'GraphQL'
            ].map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-zinc-900 text-gray-300 rounded-full text-sm font-medium border border-zinc-800 hover:border-orange-500 hover:text-orange-500 transition-all duration-300 transform hover:scale-110"
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

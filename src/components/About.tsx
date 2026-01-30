import { Code2, Palette, Rocket, Zap } from 'lucide-react';

export default function About() {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern technologies.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces that users love.',
    },
    {
      icon: Rocket,
      title: 'Product Strategy',
      description: 'Helping businesses define and execute their digital product vision.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and user experience.',
    },
  ];

  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-orange-500 text-sm font-medium tracking-widest uppercase">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Turning Ideas Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Reality
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm a passionate developer and designer with over 5 years of experience creating digital products that make a difference. I specialize in building modern web applications that are not only beautiful but also highly functional and user-friendly.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My approach combines technical expertise with creative problem-solving to deliver solutions that exceed expectations. I believe in continuous learning and staying up-to-date with the latest technologies and design trends.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'TypeScript', 'Node.js', 'Tailwind', 'Next.js', 'Figma'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-zinc-900 text-orange-500 rounded-full text-sm font-medium border border-zinc-800 hover:border-orange-500 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-zinc-900 rounded-2xl p-6 hover:bg-zinc-800 transition-all duration-500 border border-zinc-800 hover:border-orange-500/50 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

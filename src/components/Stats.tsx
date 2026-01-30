import { Briefcase, Users, Youtube, Award } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Stats() {
  const stats = [
    {
      icon: Briefcase,
      number: '50+',
      label: 'Projects Completed',
      description: 'Delivered high-quality solutions for clients worldwide.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Users,
      number: '1M+',
      label: 'Happy Clients',
      description: 'Join a large and growing community of satisfied users.',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: Youtube,
      number: '500k',
      label: 'Subscribers',
      description: 'Be part of a vibrant learning ecosystem.',
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      icon: Award,
      number: '15+',
      label: 'Awards Won',
      description: 'Recognized excellence in design and development.',
      gradient: 'from-purple-500 to-orange-500',
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-medium tracking-widest uppercase mb-4">
            Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Numbers That <span className="text-orange-500">Matter</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition-all duration-500 transform hover:-translate-y-2 border border-zinc-800 hover:border-orange-500/50 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-500`}>
                  <stat.icon className="text-white" size={28} />
                </div>

                <h3 className="text-5xl font-bold text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-orange-500 font-medium mb-3">{stat.label}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

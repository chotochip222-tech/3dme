import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Courses', 'Bootcamp', 'Request Callback'];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6">
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
            <Code2 className="text-black" size={24} />
          </div>
          <div className="text-white">
            <div className="text-lg font-normal leading-tight">Sheryians</div>
            <div className="text-lg font-normal leading-tight">Coding School</div>
          </div>
        </div>

        <div className="hidden md:flex items-center bg-zinc-900/50 backdrop-blur-sm rounded-full px-8 py-3 border border-zinc-800">
          {navItems.map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-gray-300 hover:text-white transition-colors duration-300 text-sm font-normal px-6 ${
                index !== navItems.length - 1 ? 'border-r border-zinc-700' : ''
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button className="hidden md:block text-white text-sm font-normal hover:text-orange-500 transition-colors duration-300">
          Sign In
        </button>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg absolute top-full left-0 right-0 border-t border-gray-800">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-left py-2"
              >
                {item}
              </button>
            ))}
            <button className="text-white text-left py-2">
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <line x1="0" y1="30%" x2="30%" y2="0" stroke="rgba(255,99,71,0.3)" strokeWidth="1" />
          <line x1="70%" y1="0" x2="100%" y2="30%" stroke="rgba(255,99,71,0.3)" strokeWidth="1" />
          <line x1="0" y1="70%" x2="30%" y2="100%" stroke="rgba(255,99,71,0.3)" strokeWidth="1" />
          <line x1="70%" y1="100%" x2="100%" y2="70%" stroke="rgba(255,99,71,0.3)" strokeWidth="1" />
          <circle cx="15%" cy="20%" r="3" fill="rgba(255,99,71,0.4)" />
          <circle cx="85%" cy="20%" r="3" fill="rgba(255,99,71,0.4)" />
          <circle cx="15%" cy="80%" r="3" fill="rgba(255,99,71,0.4)" />
          <circle cx="85%" cy="80%" r="3" fill="rgba(255,99,71,0.4)" />
        </svg>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          <p className="text-orange-500 text-sm font-normal tracking-[0.3em] uppercase">
            LEARN. BUILD. GET PLACED.
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal text-white leading-tight">
            <span className="block mb-2">Become The Software</span>
            <span className="block">
              Engineer That{' '}
              <span className="inline-block relative">
                <span className="relative z-10 px-4">Companies</span>
                <span className="absolute inset-0 border-2 border-orange-500 rounded-sm"></span>
              </span>
            </span>
            <span className="block mt-2">Want To Hire!</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Join a growing community of students preparing for real-world tech careers at Sheryians.
          </p>

          <div className="flex items-center justify-center space-x-3 pt-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-black"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-teal-500 border-2 border-black"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 border-2 border-black"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 border-2 border-black"></div>
            </div>
            <p className="text-gray-300 text-sm">
              <span className="text-orange-500 font-semibold">1 Million+</span> Students learning in our mastery programs
            </p>
          </div>

          <div className="pt-8">
            <button className="px-10 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 font-normal text-base">
              Explore Programs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

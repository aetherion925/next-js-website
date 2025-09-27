'use client';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3b4476] to-[#c9cff6] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-75 hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-150 hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-white/10 rounded-full animate-pulse delay-300 hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-white/10 rounded-full animate-pulse delay-500 hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to <span className="text-[#c9cff6]">Aetherion</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Crafting innovative software solutions with cutting-edge technology and AI integration
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white text-[#3b4476] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#3b4476] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View Projects
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <span className="block text-sm mb-2">Scroll Down</span>
        <div className="animate-bounce">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
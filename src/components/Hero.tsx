import React, { useEffect, useState } from 'react';
import { scrollToSection } from '../lib/utils';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden"
    >
      {/* Background overlay with subtle pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Creating Digital Experiences That Inspire
          </h1>
          
          <p 
            className={`text-xl md:text-2xl mb-10 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Web Developer & Designer with a passion for crafting beautiful, 
            functional websites and applications that drive results.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={() => scrollToSection('portfolio')}
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full font-medium transition-colors duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-full font-medium transition-colors duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          aria-label="Scroll down"
          className="flex flex-col items-center text-white hover:text-blue-200 transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
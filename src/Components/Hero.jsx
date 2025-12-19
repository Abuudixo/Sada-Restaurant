import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Modern Restaurant Vibe" 
          className="w-full h-full object-cover"
        />
        {/* Strong Brand Blue Overlay */}
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-linear-to-t from-brand-blue via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-black text-white mb-6 leading-tight drop-shadow-xl uppercase">
          Taste the <br />
          <span className=" bg-clip-text bg-linear-to-r from-white to-brand-yellow relative inline-block">
            Modern
            <svg className="absolute w-full h-3 -bottom-1 left-0" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="#FFC10E" strokeWidth="4" fill="none" />
            </svg>
          </span>
        </h1>
        
        <p className="text-xl text-brand-light/90 mb-12 max-w-2xl mx-auto font-medium font-body leading-relaxed">
          Where culinary tradition meets modern innovation. Experience the bold flavors of Sada in a contemporary setting.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full">
          <a 
            href="#menu" 
            className="px-10 py-4 bg-white text-brand-blue font-black text-lg hover:bg-brand-light hover:scale-105 transition-all duration-300 min-w-50 rounded-md shadow-lg uppercase tracking-wide"
          >
            Our Menu
          </a>
          <a 
            href="#contact" 
            className="px-10 py-4 bg-brand-yellow text-brand-blue font-black text-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300 min-w-50 rounded-md shadow-lg uppercase tracking-wide border-2 border-brand-yellow"
          >
            Reservations
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 hover:text-brand-yellow transition-colors">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={40} strokeWidth={3} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { ChefHat, Leaf, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-white" />,
      title: "Fresh & Organic",
      desc: "Locally sourced ingredients for maximum flavor."
    },
    {
      icon: <ChefHat className="w-8 h-8 text-white" />,
      title: "Master Chefs",
      desc: "Culinary experts crafting every dish with passion."
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Bold Flavors",
      desc: "Innovative combinations that surprise and delight."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <span className="text-brand-blue font-black tracking-widest uppercase text-sm mb-4 block">
              Who We Are
            </span>

            <h2 className="text-4xl md:text-5xl font-sans font-black text-brand-gray mb-6 leading-tight">
              Redefining <span className="text-brand-blue">Modern</span> Gastronomy
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-body">
              Sada isn't just a restaurant; it's a statement. We believe in the power of simplicity executed to perfection. 
              Our kitchen is a playground where traditional techniques meet contemporary bold flavors.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-body">
              Designed for the modern palate, our menu takes you on a journey through texture and taste, all within an atmosphere that radiates energy and warmth.
            </p>

            <button className="group flex items-center gap-2 text-brand-blue font-bold uppercase tracking-wider hover:text-brand-darkBlue transition-colors">
              Read Our Full Story
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Image / Features Side */}
          <div className="order-1 lg:order-2 relative">
            <div className="bg-brand-blue rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-blue">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-yellow rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
              
              <div className="grid gap-8 relative z-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-brand-darkBlue/30 rounded-lg backdrop-blur-sm border border-white/10 shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-blue-100 text-sm">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Offset Border */}
            <div className="absolute top-4 -right-4 w-full h-full border-2 border-brand-yellow rounded-2xl -z-10 hidden md:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

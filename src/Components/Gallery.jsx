import React from 'react';
import { GALLERY_IMAGES } from '../assets/Assets';
import { Instagram } from 'lucide-react';

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-brand-blue font-black tracking-widest uppercase text-sm mb-2 block">
              Atmosphere
            </span>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-brand-gray">
              Inside Sada
            </h2>
          </div>

          <a
            href="#"
            className="flex items-center gap-2 text-brand-blue font-bold hover:text-brand-yellow transition-colors group"
          >
            <span>Follow @SadaDining</span>
            <div className="p-2 bg-brand-blue text-white rounded-full group-hover:bg-brand-yellow group-hover:text-brand-blue transition-colors">
              <Instagram size={20} />
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl aspect-square shadow-md"
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-brand-blue/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center">
                <span className="text-white font-black text-3xl tracking-widest mb-2">
                  SADA
                </span>
                <div className="w-12 h-1 bg-brand-yellow rounded-full mb-4"></div>
                <p className="text-white font-medium">
                  Taste the Tradition
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

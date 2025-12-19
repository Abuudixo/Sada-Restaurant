import React from 'react';
import { TESTIMONIALS } from '../assets/Assets';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-blue relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-yellow opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-yellow font-black tracking-widest uppercase text-sm mb-2 block">
            Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-white">
            Guest Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-xl relative transform hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="absolute top-6 right-6 text-brand-light w-12 h-12" />

              <div className="flex gap-1 mb-6 text-brand-yellow">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 mb-8 font-medium leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-100 pt-6">
                <h4 className="font-bold text-brand-gray font-sans text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-brand-blue text-sm font-bold uppercase tracking-wider">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

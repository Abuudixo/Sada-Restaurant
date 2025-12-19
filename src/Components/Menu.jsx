import React, { useState } from 'react';
import { MENU_ITEMS } from '../assets/Assets';

const categories = ['Starters', 'Main Dishes', 'Drinks', 'Desserts'];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Starters');

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="menu" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-black tracking-widest uppercase text-sm mb-3 block">
            Eat & Drink
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-brand-gray">
            Our Menu
          </h2>
          <div className="w-16 h-2 bg-brand-yellow mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 ${
                activeCategory === category
                  ? 'bg-brand-blue border-brand-blue text-white shadow-lg'
                  : 'bg-transparent border-gray-200 text-gray-500 hover:border-brand-blue hover:text-brand-blue'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-blue transition-all duration-300 flex gap-6 items-center group border border-transparent hover:border-brand-blue/10"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-brand-gray group-hover:text-brand-blue transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-brand-blue font-black text-lg bg-brand-light px-2 py-1 rounded">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Menu;

import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a href="#home" className="flex flex-col items-center md:items-start group">
              <span className="text-4xl font-black tracking-widest leading-none">
                SADA
              </span>
              <svg
                width="40"
                height="12"
                viewBox="0 0 40 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1"
              >
                <path
                  d="M2 2C10 10 30 10 38 2"
                  stroke="#FFC10E"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <p className="text-blue-200 mt-4 text-sm font-medium">
              Modern dining. Traditional roots.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-blue transition-all duration-300"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-blue transition-all duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-blue transition-all duration-300"
            >
              <Twitter size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-blue-200 text-sm font-medium text-center md:text-right">
            <p>&copy; 2024 Sada Restaurant.</p>
            <p className="mt-1">Designed for Excellence.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

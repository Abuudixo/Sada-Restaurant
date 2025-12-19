import React from 'react';
import { Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          
          {/* Info Side (Blue) */}
          <div className="bg-brand-blue p-10 lg:p-16 text-white flex flex-col justify-between">
            <div>
              <span className="text-brand-yellow font-black tracking-widest uppercase text-sm mb-4 block">
                Get in Touch
              </span>

              <h2 className="text-4xl font-sans font-black mb-6">
                Visit Sada
              </h2>

              <p className="text-blue-100 mb-12 text-lg font-medium leading-relaxed">
                We're excited to welcome you. For private events or large parties, please contact us directly.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <MapPin className="text-brand-yellow shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-blue-100">
                      123 Culinary Avenue
                      <br />
                      Gourmet District, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <Phone className="text-brand-yellow shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Contact</h3>
                    <p className="text-blue-100">
                      +1 (555) 123-4567
                      <br />
                      reservations@sada.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <Clock className="text-brand-yellow shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Hours</h3>
                    <p className="text-blue-100">
                      Daily: 11:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <span className="font-black text-2xl tracking-widest">
                SADA
              </span>
            </div>
          </div>

          {/* Form Side (White) */}
          <div className="p-10 lg:p-16 bg-white">
            <h3 className="text-2xl font-black text-brand-gray mb-8">
              Make a Reservation
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-brand-gray mb-2 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-brand-light border-0 rounded-lg px-4 py-3 text-brand-gray focus:ring-2 focus:ring-brand-blue transition-all font-medium"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-gray mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-brand-light border-0 rounded-lg px-4 py-3 text-brand-gray focus:ring-2 focus:ring-brand-blue transition-all font-medium"
                    placeholder="Email address"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-brand-gray mb-2 uppercase tracking-wide">
                  Details
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-brand-light border-0 rounded-lg px-4 py-3 text-brand-gray focus:ring-2 focus:ring-brand-blue transition-all font-medium"
                  placeholder="Date, time, number of guests..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-yellow text-brand-blue font-black py-4 rounded-lg hover:bg-brand-blue hover:text-white transition-all duration-300 flex justify-center items-center gap-2 uppercase tracking-wider shadow-md"
              >
                Confirm Booking
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

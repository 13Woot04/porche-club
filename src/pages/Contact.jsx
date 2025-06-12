import { useState } from 'react';

const Contact = () => {
  const [guestCount, setGuestCount] = useState('1-25');
  const [partySlot, setPartySlot] = useState('Brunch');
  const [eventType, setEventType] = useState('Open House');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="py-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Video */}
            <div className="order-1 lg:order-1">
              <div className="relative aspect-square overflow-hidden group">
                <div className="absolute inset-0 bg-accent-500/10 rounded-full transform scale-95"></div>
                <div className="absolute inset-0 bg-accent-500/5 rounded-full transform scale-105"></div>
                <div className="relative w-full h-full clip-path-polygon scroll-animate">
                  <video 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src="/Porche-mix-reel.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            {/* Right Side: Info/Form */}
            <div className="w-full order-2 lg:order-2">
              <div className="text-center mb-12">
                <h2 className="section-title mb-4">Contact</h2>
                <p className="section-subtitle">Get in touch with Porche for any inquiries or feedback</p>
              </div>
              <form className="grid grid-cols-1 gap-y-8 scroll-animate">
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Your name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-neutral-300 bg-transparent text-neutral-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors rounded-xl" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Your email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-neutral-300 bg-transparent text-neutral-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors rounded-xl" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Your 10 digit mobile number</label>
                  <input 
                    type="tel" 
                    pattern="[0-9]{10}" 
                    className="w-full px-4 py-3 border border-neutral-300 bg-transparent text-neutral-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors rounded-xl" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-neutral-300 bg-transparent text-neutral-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors rounded-xl" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Your message (optional)</label>
                  <textarea 
                    className="w-full px-4 py-3 border border-neutral-300 bg-transparent text-neutral-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors rounded-xl min-h-[120px]" 
                  />
                </div>
                <div className="flex items-end justify-end">
                  <button 
                    type="submit" 
                    className="px-10 py-3 border border-accent-200 text-neutral-900 tracking-widest bg-transparent hover:bg-accent-100 hover:text-accent-700 transition-colors duration-300 rounded-xl"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 
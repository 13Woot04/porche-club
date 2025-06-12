import { useState } from 'react';

const BookParty = () => {
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
                <h2 className="section-title mb-4">Book a Party</h2>
                <p className="section-subtitle">Reserve your space for a memorable celebration at Porche</p>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 scroll-animate">
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Date of Event</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 border border-neutral-300 bg-transparent text-neutral-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Number of Guests</label>
                  <select 
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 bg-transparent text-neutral-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors rounded-xl"
                  >
                    <option value="1-25">1-25</option>
                    <option value="26-50">26-50</option>
                    <option value="51-100">51-100</option>
                    <option value="100+">100+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Party Slot</label>
                  <select 
                    value={partySlot}
                    onChange={(e) => setPartySlot(e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 bg-transparent text-neutral-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors rounded-xl"
                  >
                    <option value="Brunch">Brunch</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Sundowner">Sundowner</option>
                    <option value="Dinner">Dinner</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Your full name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-neutral-300 bg-transparent text-neutral-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors rounded-xl" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Your email Id.</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-neutral-300 bg-transparent text-neutral-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors rounded-xl" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Your 10 digit Mobile Number</label>
                  <input 
                    type="tel" 
                    pattern="[0-9]{10}" 
                    className="w-full px-4 py-3 border border-neutral-300 bg-transparent text-neutral-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors rounded-xl" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Type of Event</label>
                  <select 
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 bg-transparent text-neutral-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors rounded-xl"
                  >
                    <option value="Open House">Open House</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="flex items-end justify-end md:col-span-1">
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

export default BookParty; 
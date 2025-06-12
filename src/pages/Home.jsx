import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import ScrollVelocity from '../components/ScrollVelocity'

const TiltedCard = ({ children }) => {
  const ref = useRef(null)
  const frame = useRef()

  const handleMouseMove = (e) => {
    if (frame.current) cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      const card = ref.current
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * 6
      const rotateY = ((x - centerX) / centerX) * -6
      card.style.transition = 'transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)'
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04,1.04,1.04)`
    })
  }

  const handleMouseLeave = () => {
    if (frame.current) cancelAnimationFrame(frame.current)
    const card = ref.current
    card.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
  }

  return (
    <div
      ref={ref}
      className="transition-transform will-change-transform"
      style={{ transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

const Home = () => {
  const [guestCount, setGuestCount] = useState(1)
  const [sittingPreference, setSittingPreference] = useState('First')
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100)
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Even brighter overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-10"></div>
        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center bg-fixed z-0" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.png)` }}></div>
        {/* Content */}
        <div className="relative z-20 container mx-auto flex flex-col items-center justify-center text-center px-4">
          <h1 className={`text-white text-4xl md:text-6xl lg:text-7xl font-display font-semibold drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)] mb-6 transition-opacity duration-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
            Unparalleled <span className="text-accent-400">Sophistication</span>
          </h1>
          <p className={`text-white/90 text-lg md:text-2xl font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] max-w-2xl mx-auto mb-8 transition-opacity duration-1000 delay-200 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
            At Porche, we bring you an exquisite blend of global cuisines with a special focus on bold Asian flavors, crafted to perfection for those who appreciate the finer things in life.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 transition-opacity duration-1000 delay-500 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Link to="/menu" className="btn btn-primary hover-lift relative overflow-hidden group">
              <span className="relative z-10">Explore Menu</span>
            </Link>
            <Link to="/reservation" className="btn btn-outline text-white border-white hover:bg-white hover:text-neutral-900 hover-lift">
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="scroll-animate text-center max-w-3xl mx-auto">
            <h2 className="section-title mb-8">A Culinary Journey</h2>
            <p className="section-subtitle mb-8">
              Our cocktails and mocktails are inspired by the diverse cultures of India, each crafted using only the 
              freshest fruit juices. No packed shortcuts – just authentic, vibrant flavors that tantalize your senses.
            </p>
            <Link to="/menu" className="btn btn-outline">
              View Our Menu
            </Link>
          </div>
        </div>
      </section>
      {/* Scroll Velocity Animation Block with Spacing and Edge Blur */}
      <div className="pt-16 pb-8 mb-8 relative">
        {/* Left blur overlay */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10" style={{background: 'linear-gradient(to right, rgba(255,255,255,1) 40%, rgba(255,255,255,0.7) 70%, transparent 100%)'}} />
        {/* Right blur overlay */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10" style={{background: 'linear-gradient(to left, rgba(255,255,255,1) 40%, rgba(255,255,255,0.7) 70%, transparent 100%)'}} />
        <ScrollVelocity texts={["Porche Club"]} velocity={40} className="font-sans font-medium text-2xl md:text-4xl lg:text-5xl" />
        <ScrollVelocity texts={["Porche Club"]} velocity={-40} className="font-sans font-medium text-2xl md:text-4xl lg:text-5xl" />
      </div>

      {/* Menu Preview */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="section-title mb-4">Explore Our Cuisines</h2>
            <p className="section-subtitle">Discover a world of flavors</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Food Menu', image: `${import.meta.env.BASE_URL}foodMenu.jpg` },
              { title: 'Drinks Menu', image: `${import.meta.env.BASE_URL}drinksMenu.jpg` }
            ].map((category, index) => (
              <TiltedCard key={category.title}>
                <Link
                  to="/menu"
                  className="scroll-animate cursor-pointer image-hover shadow-xl rounded-xl overflow-hidden bg-white block"
                  style={{ '--delay': `${index * 200}ms` }}
                >
                  <div className="relative h-96 overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${category.image})` }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="text-center">
                        <h3 className="text-2xl font-display text-white mb-4 drop-shadow-lg">{category.title}</h3>
                        <span className="text-white text-sm tracking-wide hover:text-accent-300 transition-colors inline-flex items-center group drop-shadow">
                          View Menu
                          <svg 
                            className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </TiltedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Homepic Arch Image Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto flex flex-row justify-center gap-8">
          {[1,2,3,4].map((num) => (
            <div key={num} className="w-[320px] h-[320px] flex items-end justify-center overflow-hidden arch-image-bg-white">
              <img
                src={`${import.meta.env.BASE_URL}homepic/pic${num}.jpeg`}
                alt={`Homepic ${num}`}
                className="w-full h-full object-cover arch-image-ellipse"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video */}
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
                  <source src={`${import.meta.env.BASE_URL}Porche-mix-reel.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Reservation Form */}
            <div className="w-full">
              <div className="text-center mb-12">
                <h2 className="section-title mb-4">Make a Reservation</h2>
                <p className="section-subtitle">Book your table for an unforgettable dining experience</p>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 scroll-animate">
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Select Date</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 border border-neutral-300 bg-transparent text-neutral-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Select Time</label>
                  <select className="w-full px-4 py-3 border border-neutral-300 bg-transparent text-neutral-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors rounded-xl">
                    {[
                      "11 AM - 12 AM", "12 PM - 01 PM", "01 PM - 02 PM", "03 PM - 04 PM",
                      "04 PM - 05 PM", "06 PM - 07 PM", "07 PM - 08 PM", "09 PM - 10 PM",
                      "10 PM - 11 PM", "11 PM - 12 AM"
                    ].map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Number of Guest</label>
                  <select 
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-neutral-300 bg-transparent text-neutral-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors rounded-xl"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Sitting Preference</label>
                  <select 
                    value={sittingPreference}
                    onChange={(e) => setSittingPreference(e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 bg-transparent text-neutral-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors rounded-xl"
                  >
                    {['First', 'Second', 'Rooftop'].map((pref) => (
                      <option key={pref} value={pref}>{pref}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-neutral-300 bg-transparent text-neutral-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors rounded-xl" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Your 10 Digit Mobile Number</label>
                  <input 
                    type="tel" 
                    pattern="[0-9]{10}" 
                    className="w-full px-4 py-3 border border-neutral-300 bg-transparent text-neutral-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors rounded-xl" 
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Your Email ID.</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-neutral-300 bg-transparent text-neutral-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors rounded-xl" 
                  />
                </div>
                <div className="md:col-span-1 flex items-end justify-end">
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

      {/* Location */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">Find Us</h2>
              <p className="section-subtitle">Visit us for an unforgettable dining experience</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-w-16 aspect-h-9 mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2234927905193!2d77.09062631507878!3d28.468095982486377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGolf%20Course%20Rd%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1647893792032!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="shadow-lg"
                ></iframe>
              </div>
              <div className="text-center">
                <p className="text-xl text-neutral-600">
                  Golf Avenue 42, Golf Course Road, Gurugram
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 
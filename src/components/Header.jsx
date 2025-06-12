import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation();
   const alwaysSolid =
    location.pathname === '/privacy-policy' ||
    location.pathname === '/book-party' ||
    location.pathname === '/contact' ||
    location.pathname === '/chef-mixologist';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Menu', path: '/menu' }
  ]

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled || alwaysSolid
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="relative z-10 flex items-center group"
            >
              <img 
                src={`${import.meta.env.BASE_URL}logo-porche.webp`}
                alt="Porche Logo" 
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent-500 after:transition-all after:duration-300 hover:after:w-full ${
                    isScrolled || alwaysSolid ? 'text-neutral-800 hover:text-accent-500' : 'text-white hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://www.google.com/maps/place/Porche,+SCO+-+1+%26+2,+Golf+Dr,+Sector+42,+Gurugram,+Haryana+122002/@28.462869,77.0957401,16z/data=!4m6!3m5!1s0x390d190018edce47:0xdffc834929cc3387!8m2!3d28.462869!4d77.0957401!16s%2Fg%2F11x1dqg76g?g_ep=Eg1tbF8yMDI1MDUwNV8xIJvbDyoASAJQAQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent-500 after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled || alwaysSolid ? 'text-neutral-800 hover:text-accent-500' : 'text-white hover:text-white'
                }`}
              >
                Location
              </a>
              <Link
                to="/chef-mixologist"
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent-500 after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled || alwaysSolid ? 'text-neutral-800 hover:text-accent-500' : 'text-white hover:text-white'
                }`}
              >
                Chef & Mixologist
              </Link>
              <a
                href="https://www.google.com/maps/place/Porche/@28.462869,77.0957401,17z/data=!4m8!3m7!1s0x390d190018edce47:0xdffc834929cc3387!8m2!3d28.462869!4d77.0957401!9m1!1b1!16s%2Fg%2F11x1dqg76g?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent-500 after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled || alwaysSolid ? 'text-neutral-800 hover:text-accent-500' : 'text-white hover:text-white'
                }`}
              >
                Review Us
              </a>
              <Link
                to="/contact"
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent-500 after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled || alwaysSolid ? 'text-neutral-800 hover:text-accent-500' : 'text-white hover:text-white'
                }`}
              >
                Contact
              </Link>
              <Link
                to="/privacy-policy"
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent-500 after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled || alwaysSolid ? 'text-neutral-800 hover:text-accent-500' : 'text-white hover:text-white'
                }`}
              >
                Privacy Policy
              </Link>
              <Link
                to="/book-party"
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent-500 after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled || alwaysSolid ? 'text-neutral-800 hover:text-accent-500' : 'text-white hover:text-white'
                }`}
              >
                Book a Party
              </Link>
              <Link
                to="/reservation"
                className={`btn btn-primary hover-lift relative overflow-hidden group px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300`}
              >
                <span className="relative z-10">Reserve</span>
                <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                isScrolled || alwaysSolid ? 'text-neutral-900 hover:text-accent-500' : 'text-white hover:text-white/80'
              }`}
            >
              <span className="sr-only">Open menu</span>
              <div className="w-6 flex flex-col items-end space-y-1.5">
                <span className={`block h-0.5 transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'} ${isScrolled || alwaysSolid ? 'bg-neutral-900' : 'bg-white'}`}></span>
                <span className={`block h-0.5 transition-all duration-300 ${isMenuOpen ? 'w-0 opacity-0' : 'w-4'} ${isScrolled || alwaysSolid ? 'bg-neutral-900' : 'bg-white'}`}></span>
                <span className={`block h-0.5 transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'} ${isScrolled || alwaysSolid ? 'bg-neutral-900' : 'bg-white'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        <div 
          className={`absolute right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col py-16">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-8 py-4 text-sm font-medium text-neutral-800 hover:bg-neutral-50 hover:text-accent-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://www.google.com/maps/place/Porche,+SCO+-+1+%26+2,+Golf+Dr,+Sector+42,+Gurugram,+Haryana+122002/@28.462869,77.0957401,16z/data=!4m6!3m5!1s0x390d190018edce47:0xdffc834929cc3387!8m2!3d28.462869!4d77.0957401!16s%2Fg%2F11x1dqg76g?g_ep=Eg1tbF8yMDI1MDUwNV8xIJvbDyoASAJQAQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-sm font-medium text-neutral-800 hover:bg-neutral-50 hover:text-accent-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Location
            </a>
            <Link
              to="/chef-mixologist"
              className="px-8 py-4 text-sm font-medium text-neutral-800 hover:bg-neutral-50 hover:text-accent-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Chef & Mixologist
            </Link>
            <a
              href="https://www.google.com/maps/place/Porche/@28.462869,77.0957401,17z/data=!4m8!3m7!1s0x390d190018edce47:0xdffc834929cc3387!8m2!3d28.462869!4d77.0957401!9m1!1b1!16s%2Fg%2F11x1dqg76g?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-sm font-medium text-neutral-800 hover:bg-neutral-50 hover:text-accent-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Review Us
            </a>
            <Link
              to="/chef-mixologist"
              className="px-8 py-4 text-sm font-medium text-neutral-800 hover:bg-neutral-50 hover:text-accent-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Chef & Mixologist
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 text-sm font-medium text-neutral-800 hover:bg-neutral-50 hover:text-accent-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/privacy-policy"
              className="px-8 py-4 text-sm font-medium text-neutral-800 hover:bg-neutral-50 hover:text-accent-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              to="/book-party"
              className="px-8 py-4 text-sm font-medium text-neutral-800 hover:bg-neutral-50 hover:text-accent-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Party
            </Link>
            <Link
              to="/reservation"
              className="mx-8 mt-4 btn btn-primary hover-lift relative overflow-hidden group px-6 py-3 text-sm font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">Reserve</span>
              <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header 
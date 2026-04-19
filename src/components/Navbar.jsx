import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Team', id: 'team' }, 
    { name: 'Equipment', id: 'equipment' },
    { name: 'Clients', id: 'clients' },
    { name: 'Owner', id: 'owner' },
    { name: 'Contact', id: 'contact' },
  ]

  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const handleLinkClick = useCallback((e, id) => {
    e.preventDefault()
    scrollToSection(id)
    setActiveSection(id)
    setIsOpen(false)
  }, [scrollToSection, setActiveSection])

  useEffect(() => {
  const sections = document.querySelectorAll('section[id]')

  const observer = new IntersectionObserver(
    (entries) => {
      let bestSection = null
      let maxRatio = 0

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio
          bestSection = entry.target
        }
      })

      if (bestSection) {
        setActiveSection(bestSection.id)
      }
    },
    {
      threshold: [0.2, 0.4, 0.6, 0.8],
      rootMargin: '-80px 0px -40% 0px' // مهم جداً عشان الـ navbar fixed
    }
  )

  sections.forEach((section) => observer.observe(section))

  return () => observer.disconnect()
}, [setActiveSection])
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
    >
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/imgs/logo img.jpeg" 
              alt="Al Andalus Construction" 
              className="h-12 w-auto rounded-lg shadow-md object-contain hover:scale-105 transition-transform duration-200"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-dark-blue to-primary-blue bg-clip-text text-transparent hidden lg:inline">
              Al Andalus
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <motion.a
                  href={`#${link.id}`}
className={`relative font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-primary-dark-blue'
                      : 'text-gray-700 hover:text-primary-blue'
                  }`}
                  whileHover={{ y: -2 }}
                  onClick={(e) => handleLinkClick(e, link.id)}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-dark-blue to-primary-blue"
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-all"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1.5'}`} />
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : 'my-1'}`} />
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1.5'}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 }
          }}
          className="md:hidden overflow-hidden bg-white/90 backdrop-blur-md border-t border-gray-200"
        >
          <ul className="py-6 space-y-2 px-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <motion.a
                  href={`#${link.id}`}
className={`block font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-primary-dark-blue'
                      : 'text-gray-700 hover:text-primary-dark-blue'
                  }`}
                  whileHover={{ x: 4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => handleLinkClick(e, link.id)}
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar

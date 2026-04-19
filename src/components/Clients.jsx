import { motion } from 'framer-motion'

const clients = [
  { name: 'Saudi Aramco', logo: '/imgs/Traditional Meets Modern Al-Andalus Logo.png' },
  { name: 'NEOM', logo: '/imgs/Traditional Meets Modern Al-Andalus Logo.png' },
  { name: 'Saudi Vision 2030', logo: '/imgs/Traditional Meets Modern Al-Andalus Logo.png' },
  { name: 'Red Sea Project', logo: '/imgs/Traditional Meets Modern Al-Andalus Logo.png' },
  { name: 'KAUST', logo: '/imgs/Traditional Meets Modern Al-Andalus Logo.png' },
  { name: 'Public Investment Fund', logo: '/imgs/Traditional Meets Modern Al-Andalus Logo.png' },
  { name: 'Saudi Binladin Group', logo: '/imgs/Traditional Meets Modern Al-Andalus Logo.png' },
  { name: 'Al Rajhi Holding', logo: '/imgs/Traditional Meets Modern Al-Andalus Logo.png' }
]

const Clients = () => {
  return (
<section id="clients" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block bg-gradient-to-r from-primary-dark-blue to-primary-blue bg-clip-text text-transparent px-8 py-4 rounded-2xl text-xl font-bold shadow-xl mb-8 border-2 border-primary-blue/20"
          >
            Trusted Partners
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-dark-blue to-primary-blue bg-clip-text text-transparent mb-6">
            Trusted by Leading Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Collaborated with Saudi Arabia's top organizations on landmark infrastructure projects.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 lg:gap-12 items-center justify-items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative p-6 lg:p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-gold/30 transition-all duration-500 cursor-pointer max-w-xs mx-auto"
            >
              <div className="relative z-10 flex items-center justify-center h-20 lg:h-24 w-full">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-12 lg:h-16 w-auto max-h-full max-w-full filter grayscale group-hover:grayscale-0 transition-all duration-500 object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-primary-blue/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="mt-24 flex items-center justify-center space-x-4 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="w-20 h-1 gold-gradient rounded-full" />
          <span>More than 50+ trusted partners</span>
          <div className="w-20 h-1 gold-gradient rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}

export default Clients


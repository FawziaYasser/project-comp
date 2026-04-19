import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark-blue via-blue-900 to-black">
      {/* Background Image/Video */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1572036926791-59f2a27267bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue/80 via-black/50 to-primary-dark-blue/80" />
      </div>

      <div className="container relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Building the Future
            <br />
            <span className="bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">With Precision</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Al Andalus Construction delivers world-class infrastructure solutions with unmatched quality and precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="#projects"
              className="group bg-gradient-to-r from-gold to-yellow-500 text-primary-dark-blue px-12 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-gold/50 transform hover:-translate-y-2 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="border-2 border-white/50 text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-dark-blue transition-all duration-500 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero


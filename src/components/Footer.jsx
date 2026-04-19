import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-md border-t border-white/10">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12 text-gray-300">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/imgs/logo img.jpeg" 
                alt="Al Andalus Construction" 
                className="h-12 w-auto rounded-lg shadow-lg object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-primary-blue to-gold bg-clip-text text-transparent">
                Al Andalus Construction
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building the future with precision and excellence. Trusted partner for infrastructure projects across Saudi Arabia.
            </p>
            <div className="flex space-x-4 mt-6">
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.988-5.367 11.988-11.988C23.997 5.367 18.621.002 12.017.002zm6.483 17.218c-1.673 0-3.001-1.33-3.001-2.972 0-1.642 1.328-2.973 3.001-2.973 1.641 0 2.97 1.331 2.97 2.973 0 1.642-1.329 2.972-2.97 2.972zm-5.483-2.972c0 2.357-1.916 4.273-4.282 4.273-2.367 0-4.282-1.916-4.282-4.273 0-2.357 1.915-4.273 4.282-4.273 2.366 0 4.282 1.916 4.282 4.273zm12.224-9.247h-3.224c-.773 0-1.394-.62-1.394-1.384v-3.223c0-.764.621-1.384 1.394-1.384h3.224c.765 0 1.385.62 1.385 1.384v3.223c0 .764-.62 1.384-1.385 1.384zM7.63 17.218c-1.642 0-2.972-1.331-2.972-2.973 0-1.642 1.33-2.972 2.972-2.972s2.972 1.33 2.972 2.972c0 1.642-1.33 2.973-2.972 2.973z"/></svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-gold transition-colors">Projects</a></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-gold transition-colors">Infrastructure</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Road Construction</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Bridge Construction</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">General Contracting</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <p><span className="font-semibold">Phone:</span> +966 12 345 6789</p>
              <p><span className="font-semibold">Email:</span> info@alandalusconstruction.com</p>
              <p><span className="font-semibold">Address:</span><br />King Abdulaziz Road<br />Riyadh, KSA</p>
            </div>
          </motion.div>
        </div>

        <hr className="my-12 border-gray-800" />

        <div className="text-center text-gray-500 text-sm">
          <p>&copy; 2024 Al Andalus Construction. All rights reserved. | Built with ❤️ for excellence.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

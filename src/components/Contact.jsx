import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-gray-900 via-primary-dark-blue to-black text-white">
      <div className="container">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block gold-gradient text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-2xl mb-8"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Let's discuss how Al Andalus Construction can bring your vision to life with precision engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {isSubmitted ? (
              <div className="bg-green-500/20 border border-green-500/50 rounded-3xl p-12 text-center">
                <div className="text-6xl mb-6">✅</div>
                <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
                <p className="text-xl opacity-90">
                  Your message has been sent successfully. Our team will contact you within 24 hours.
                </p>
                <motion.button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 gold-gradient text-primary-dark-blue px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-gold/50 transform hover:-translate-y-2 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  Send Another Message
                </motion.button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-lg font-semibold mb-3">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-5 rounded-2xl bg-white/20 border border-white/30 focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/20 text-lg placeholder-white/60 transition-all"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold mb-3">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-5 rounded-2xl bg-white/20 border border-white/30 focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/20 text-lg placeholder-white/60 transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-3">Project Details</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-5 rounded-2xl bg-white/20 border border-white/30 focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/20 text-lg placeholder-white/60 transition-all resize-vertical"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full mt-8 gold-gradient text-primary-dark-blue p-6 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-gold/50 transform hover:-translate-y-2 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gold-gradient rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">+966 12 345 6789</div>
                    <div className="text-sm opacity-75">24/7 Available</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-blue/80 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.27 7.27c.883.883 2.317.883 3.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">info@alandalusconstruction.com</div>
                    <div className="text-sm opacity-75">Business Inquiries</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/80 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">King Abdulaziz Road, Riyadh</div>
                    <div className="text-sm opacity-75">Kingdom of Saudi Arabia</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4 text-lg">
                <a href="#services" className="hover:text-gold transition-colors">Our Services</a>
                <a href="#projects" className="hover:text-gold transition-colors">View Projects</a>
                <a href="#about" className="hover:text-gold transition-colors">About Us</a>
                <a href="#" className="hover:text-gold transition-colors">Careers</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact


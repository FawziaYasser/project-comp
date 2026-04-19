import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '1000+', label: 'Happy Clients' },
    { number: '0', label: 'Project Delays' },
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
          >
            About Al Andalus
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark-blue mb-6">
            Excellence in Every Foundation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 20 years, Al Andalus Construction has been the trusted partner for visionary infrastructure projects across the region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img 
              src="/imgs/AboutSection.jpeg" 
              alt="Construction team" 
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-gold to-yellow-400 rounded-2xl shadow-xl" />
          </motion.div>

          <div>
            <h3 className="text-3xl font-bold text-primary-dark-blue mb-8">
              Our Vision & Mission
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-primary-dark-blue rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">Vision</h4>
                  <p className="text-gray-600 leading-relaxed">
                    To be recognized as the premier contracting company in Egypt and the region for outstanding quality in infrastructure and mega projects.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gold-gradient rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">Mission</h4>
                  <p className="text-gray-600 leading-relaxed">
                    To provide exceptional construction and mining projects while prioritizing client satisfaction, improving and ensuring the safety and efficiency of processes, and delivering projects on schedule.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
              whileHover={{ y: -10 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-dark-blue mb-2 group-hover:text-gold transition-colors">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About


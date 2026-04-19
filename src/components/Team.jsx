import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'Sheikh Ahmed Al-Mansoori',
    position: 'CEO & Founder',
    bio: '25+ years visionary leadership in construction industry. Transformed Al Andalus into regional infrastructure leader.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  },
  {
    name: 'Eng. Fatima Al-Saud',
    position: 'Chief Project Manager',
    bio: 'Expert in managing multi-billion SAR projects. Delivered 200+ infrastructure projects on time and budget.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'Eng. Khalid Bin Nasser',
    position: 'Senior Site Engineer',
    bio: '30 years field experience. Specialized in complex highway and bridge construction projects.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80'
  },
  {
    name: 'Eng. Noor Al-Ghamdi',
    position: 'Technical Office Manager',
    bio: 'BIM & CAD specialist. Leads design coordination for all major infrastructure projects.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80'
  },
  {
    name: 'Eng. Omar Al-Farsi',
    position: 'Quality Control Director',
    bio: 'ISO certified expert. Ensures highest construction standards across all project phases.',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  }
]

const Team = () => {
  return (
<section id="team" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block gold-gradient text-primary-dark-blue px-8 py-4 rounded-2xl text-xl font-bold shadow-2xl mb-8"
          >
            Our Leadership
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-dark-blue to-gray-800 bg-clip-text text-transparent mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced professionals dedicated to delivering excellence in every project.
          </p>
        </div>

        <div className="overflow-hidden -mx-4 lg:-mx-6 px-4 lg:px-6">
          <div className="flex gap-6 snap-x snap-mandatory scrollbar-hide pb-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="flex-shrink-0 w-full sm:w-[80%] md:w-[70%] lg:w-[calc(33.33%-1.5rem)] snap-center rounded-3xl bg-white shadow-2xl hover:shadow-gold/30 border border-white/50 hover:border-gold/40 transition-all duration-500 cursor-grab active:cursor-grabbing"
              >
                <div className="relative h-96 overflow-hidden rounded-3xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-8 -mt-16 relative z-10 bg-white/90 backdrop-blur-sm rounded-b-3xl border-t-4 border-white/50">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    {member.name}
                  </h3>
                  <div className="text-gold font-bold text-xl uppercase tracking-wide mb-4">
                    {member.position}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-12">
          <motion.button 
            className="w-14 h-14 bg-white/80 hover:bg-white backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 hover:border-gold/50 flex items-center justify-center text-gray-700 hover:text-primary-dark-blue transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button 
            className="w-14 h-14 bg-white/80 hover:bg-white backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 hover:border-gold/50 flex items-center justify-center text-gray-700 hover:text-primary-dark-blue transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Team


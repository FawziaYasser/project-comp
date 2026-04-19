import { motion } from 'framer-motion'
import { 
  Building2, 
  Plane, 
  Waves,
  HardHat 
} from 'lucide-react'

const services = [
  {
    title: 'Infrastructure Works',
    description: 'We deliver large-scale infrastructure projects that support urban development and national growth. Our work includes highways, utility networks, and essential civil structures built with precision, durability, and long-term performance in mind.',
    Icon: Building2,
    color: 'from-primary-dark-blue via-blue-800 to-primary-blue'
  },
  {
    title: 'Airports Projects',
    description: 'We specialize in the construction and development of airport infrastructure, including runways, taxiways, and landing corridors. All projects are executed according to strict aviation standards to ensure safety, efficiency, and operational excellence.',
    Icon: Plane,
    color: 'from-gold via-yellow-500 to-orange-500'
  },
  {
    title: 'Mega Projects',
    description: 'We execute large-scale national and strategic projects that require high engineering capabilities and coordination. These include canals, industrial zones, and major water and infrastructure systems that contribute to national development.',
    Icon: Waves,
    color: 'from-indigo-600 via-purple-600 to-violet-600'
  },
  {
    title: 'Mining & Excavation',
    description: 'We provide advanced excavation and mining services for extracting and processing natural resources such as limestone and phosphate. Our operations focus on efficiency, safety, and environmental responsibility while maintaining consistent material quality.',
    Icon: HardHat,
    color: 'from-emerald-500 via-green-600 to-teal-600'
  }
]

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block gold-gradient text-white px-6 py-3 rounded-full text-lg font-semibold mb-6 shadow-lg"
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-dark-blue to-primary-blue bg-clip-text text-transparent mb-6">
            Comprehensive Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in delivering turnkey solutions across all construction disciplines with precision engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -20, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-3xl p-10 bg-gradient-to-br from-white to-gray-50 shadow-xl hover:shadow-2xl hover:shadow-gold/25 border border-gray-100 hover:border-gold/30 transition-all duration-500 cursor-pointer"
            >
              {/* Lucide Icon */}
              <div className={`w-24 h-24 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 mx-auto shadow-2xl border-4 border-white/50`}>
                <service.Icon className="w-14 h-14 text-white drop-shadow-lg" strokeWidth={2} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-dark-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-full h-1 gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

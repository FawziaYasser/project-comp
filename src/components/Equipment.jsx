import { motion } from 'framer-motion'

const equipment = [
  {
    name: 'Excavators',
    type: 'Heavy Earth Moving',
    count: '12 Units',
    img: '/imgs/eq1.jpeg',
    specs: 'CAT 336, Komatsu PC200, Volvo EC210'
  },
  {
    name: 'Dump Trucks',
    type: 'Material Transport',
    count: '25 Units',
    img: '/imgs/eq2.jpeg',
    specs: '10m³ - 20m³ capacity, Off-road capable'
  },
  {
    name: 'Cranes',
    type: 'Lifting & Rigging',
    count: '8 Units',
    img: '/imgs/eq3.jpeg',
    specs: '50T - 200T mobile cranes, Tower cranes'
  },
  {
    name: 'Concrete Pumps',
    type: 'Concrete Placement',
    count: '6 Units',
    img: '/imgs/AboutSection.jpeg',
    specs: '140m - 200m boom length'
  },
  {
    name: 'Graders',
    type: 'Road Preparation',
    count: '4 Units',
    img: '/imgs/AboutSection.jpeg',
    specs: 'CAT 140M, Motor Grader 140H'
  },
  {
    name: 'Bulldozers',
    type: 'Earth Moving',
    count: '10 Units',
    img: '/imgs/AboutSection.jpeg',
    specs: 'D6R, D8R, D9T models'
  }
]

const Equipment = () => {
  return (
    <section id="equipment" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block gold-gradient text-white px-6 py-3 rounded-full text-lg font-semibold mb-6 shadow-lg"
          >
            Our Fleet
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-dark-blue to-primary-blue bg-clip-text text-transparent mb-6">
            Advanced Equipment Fleet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art machinery maintained to highest standards, ensuring optimal performance, safety, and project efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -20, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-gold/30 border border-gray-100 hover:border-gold/50 transition-all duration-700 cursor-pointer"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                  <span className="bg-gold/20 text-gold px-4 py-2 rounded-xl font-semibold text-sm">
                    {item.count}
                  </span>
                </div>
                <div className="flex items-center text-gold/90 mb-4">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {item.type}
                </div>
                <p className="text-sm text-gray-300 mb-6">{item.specs}</p>
                <div className="h-1 w-full gold-gradient rounded-full bg-gradient-to-r from-transparent via-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Equipment

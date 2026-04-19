import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ProjectModal from './ProjectModal'

const projects = [
  { id: 1, img: '/imgs/project1.jpeg', title: 'Regional Ring Road Development', location: 'Egypt - Sharqia', category: 'Road Infrastructure' },
  { id: 2, img: '/imgs/project2.jpeg', title: 'Toshka Al-Kheir Project', location: 'Egypt - Aswan - Toshka', category: 'Infrastructure Works' },
  { id: 3, img: '/imgs/project3.2.jpeg', title: 'Bridge No.4 Construction on the Regional Ring Road', location: 'Regional Ring Road – Ahmed Orabi', category: 'Infrastructure Works' },
  { id: 4, img: '/imgs/logo img.jpeg', title: 'Digging and constructing the new Suez Canal- Engineering Authority for the Armed Forces', location: 'Jeddah, KSA', category: 'Road Construction' },
  { id: 5, img: '/imgs/logo img.jpeg', title: 'Construction of landing corridors at Cairo International Airport  ', location: 'Yanbu, KSA', category: 'Road Construction' },
  { id: 6, img: '/imgs/logo img.jpeg', title: 'Excavation and construction of Al-Jalalah Road - Al Ain Al Sokhna - Engineering Authority for the Armed Forces ', location: 'Jubail, KSA', category: 'General Contracting' },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container">
        <div className="text-center mb-20">
          <motion.span 
            className="inline-block bg-gradient-to-r from-primary-blue to-primary-dark-blue bg-clip-text text-transparent px-6 py-3 rounded-full text-lg font-semibold mb-6 shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Our Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of landmark projects that showcase our commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer"
              whileHover={{ y: -20, scale: 1.02 }}
              onClick={() => setSelectedProject(project.id)}
            >
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-all duration-700 group-hover:h-72"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-block bg-gold/90 text-primary-dark-blue text-xs px-3 py-1 rounded-full font-semibold mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-300 font-medium">
                  {project.location}
                </p>
              </div>
              
              {/* Top gradient overlay */}
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal 
              projectId={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects


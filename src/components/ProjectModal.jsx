import { motion } from 'framer-motion'

const detailedProjects = [
  {
    id: 1,
    title: 'Regional Ring Road Development',
    date: 'Sep 2024 – Jun 2026',
    location: ' Egypt - Sharqia',
    scale: ' Main Road: 25km (FDR) with concrete paving work covering 925,000m² and Service Roads: 30km with a total concrete paving area of 417,000m²',
    client: 'Ministry of Transport and Logistic Services',
    description: ' A large-scale road construction project including FDR and concrete paving works for main and service roads, designed to improve infrastructure quality and ensure long-term performance.',
    strengths: [
      '25 km main road (FDR) – 925,000 m² concrete paving',
      '30 km service roads – 417,000 m² concrete paving',
      'Completed on schedule with high-quality standards',
      'Improved road durability for heavy traffic'
    ],
    challenges: [
      'Working under heavy traffic while keeping the road operational',
      'Managing complex traffic diversions safely',
      'Executing the project on a tight schedule',
      'Ensuring timely supply of materials',
      'Operating concrete plants within residential areas under environmental constraints'
    ],
    images: [
      '/imgs/project1.jpeg',
      '/imgs/project1.2.jpeg',
      '/imgs/project1.3.jpeg'
    ]
  },
  {
    id: 2,
    title: 'Toshka Al-Kheir Project',
    date: '2020 – 2024',
    location: 'Egypt - Aswan - Toshka',
    scale: ' 600 Feddans ≈ 2,520,000 m²',
    client: 'Jeddah Development Authority',
    description: ' A large-scale infrastructure project including a 40 km road, canal excavation and lining works, a pumping station, and multiple hydraulic structures, with a total cost of EGP 2 billion.',
    strengths: [
      'Construction of 40 km Toshka – El Oweinat Road',
      'Canal excavation and lining works (multiple branches & extensions)',
      'Construction of a pumping station (in collaboration with Elsewedy)',
      'Construction of hydraulic structures (18 intakes, 2 spillways, culvert & siphon)'
    ],
    challenges: [
      'Remote location & limited infrastructure',
      'Long-distance logistics',
      'Hard rock conditions',
      'Tight schedule'
    ],
    images: [
      '/imgs/project2.jpeg',
      '/imgs/project2.2.jpeg',
      '/imgs/project2.3.jpeg',
      '/imgs/project 2.4.jpeg',
      '/imgs/project 2.5.jpeg'
    ]
  },
  {
    id: 3,
    title: 'Bridge No.4 Construction on the Regional Ring Road',
    date: 'Nov2025 –May 2026',
    location: 'Regional Ring Road – Ahmed Orabi',
    scale: ' 1,2 Km ',
    client: 'Royal Commission for Jubail & Yanbu',
    description: 'Construction of a U-shaped bridge (1000 m length, 14 m width) as part of the Regional Ring Road – Ahmed Orabi Axis.The bridge consists of 18 spans, including 16 precast concrete girder spans and 2 box section spans',
    strengths: [
      'Successfully delivered the first bridge project for the team with high engineering standards',
      'Completed all project milestones within the required schedule',
      'Ensured smooth execution of works under live traffic conditions',
      'Achieved high-quality construction for substructure and superstructure works',
      'Maintained full compliance with safety and execution standards throughout the project'
    ],
    challenges: [
      'First bridge project for the team requiring rapid learning',
      'Tight schedule and strict deadlines',
      'Delays in formwork supply and need for skilled labor',
      'Working under live traffic with high safety requirements'
    ],
    images: [
      '/imgs/project3.jpeg',
      '/imgs/project3.2.jpeg',
      '/imgs/project3.3.jpeg'
    ]
  },
  {
    id: 4,
    title: 'Airport Link Road',
    date: '2023 - Present',
    location: 'Jeddah, Kingdom of Saudi Arabia',
    scale: '18 km elevated',
    client: 'General Authority of Civil Aviation (GACA)',
    description: 'High-capacity elevated road connecting King Abdulaziz International Airport to city center. Features intelligent traffic management and sustainable drainage systems.',
    strengths: [
      'Fast-track delivery under 18 months',
      'BIM Level 2 implementation',
      'Zero environmental violations',
      'Advanced noise barrier systems'
    ],
    challenges: [
      'Airport proximity restrictions - Night-only crane operations and flight path analysis',
      'Elevated structure in sandy soil - Deep pile foundations with soil stabilization',
      '24/7 airport operations - Phased ramp-up construction methodology'
    ],
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622b4e443?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80'
    ]
  },
  {
    id: 5,
    title: 'Coastal Highway',
    date: '2021 - 2024',
    location: 'Yanbu, Kingdom of Saudi Arabia',
    scale: '85 km',
    client: 'Royal Commission for Yanbu',
    description: 'Strategic coastal highway connecting Yanbu Industrial City to Red Sea ports. Includes multiple interchanges and wildlife protection corridors.',
    strengths: [
      'Environmental excellence award',
      'Advanced coastal erosion protection',
      'Wildlife crossing structures integrated',
      'Modular bridge construction accelerated timeline'
    ],
    challenges: [
      'Marine habitat protection - Eco-friendly pile driving and silt curtains',
      'Shifting sand dunes - Geotextile stabilization and real-time surveying',
      'Cyclone-prone coastal zone - Enhanced structural wind loading design'
    ],
    images: [
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80'
    ]
  },
  {
    id: 6,
    title: 'Industrial Complex',
    date: '2019 - 2022',
    location: 'Jubail, Kingdom of Saudi Arabia',
    scale: '450,000 sqm',
    client: 'SABIC',
    description: 'State-of-the-art industrial complex for petrochemical operations. Included specialized foundations for heavy machinery and hazardous materials handling facilities.',
    strengths: [
      'Turnkey delivery including commissioning',
      'Hazardous materials handling certification',
      'Modular construction reduced site time 40%',
      'Advanced fire protection systems'
    ],
    challenges: [
      'Heavy foundation loads on reclaimed land - Dynamic pile testing and ground improvement',
      'Hazardous area electrical - ATEX/IECEx certified installations',
      'Complex process piping coordination - 3D laser scanning for clash detection'
    ],
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622b4e443?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    ]
  }
]

const ProjectModal = ({ projectId, onClose }) => {
  const project = detailedProjects.find(p => p.id === projectId)

  if (!project) return null



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-sm flex items-center justify-center p-8"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        className="flex flex-col max-w-6xl w-full bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden max-md:rounded-none max-md:h-screen"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-8 lg:p-12 border-b border-gray-200 flex-shrink-0">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-dark-blue to-primary-blue bg-clip-text text-transparent mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-lg text-gray-600 mb-4">
                <span className="bg-gold/10 text-gold px-4 py-2 rounded-xl font-semibold">{project.date}</span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {project.location}
                </span>
                <span className="bg-primary-blue/10 text-primary-blue px-4 py-2 rounded-xl font-semibold">{project.scale}</span>
              </div>
              <div className="flex items-center text-primary-dark-blue font-semibold">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Client: <span className="font-bold ml-1">{project.client}</span>
              </div>
            </div>
            <motion.button
              onClick={onClose}
              className="p-3 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-2xl border border-white/30 hover:border-white/50 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 overflow-auto  max-h-[80vh]">
          {/* Premium 3-Image Gallery - Better Layout */}
          <div className="p-8 space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 h-80 overflow-auto rounded-2xl bg-gradient-to-r from-gray-50 to-white p-4">
              {project.images.map((img, i) => (
                <motion.div 
                  key={i}
                  className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-gold/30 flex-shrink-0 w-full h-48 flex-grow hover:scale-105 transition-all duration-500"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={img} 
                    alt={`${project.title} - ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent opacity-0 group-hover:opacity-100 transition-all" />
                  <div className="absolute top-3 right-3 bg-gold/90 text-primary-dark-blue px-2 py-1 rounded-full text-xs font-bold drop-shadow-lg">
                    {i + 1}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center text-sm text-gray-500">
              Scroll to see all project images • {project.images.length} photos
            </div>
          </div>

          {/* Project Details - Full Scroll */}
          <div className="p-4 lg:p-8 lg:pr-4 xl:pr-8 overflow-y-auto h-full scrollbar scrollbar-w-8 scrollbar-track-gray-50/50 scrollbar-thumb-gray-400/80 hover:scrollbar-thumb-primary-dark-blue scrollbar-thumb-rounded-xl shadow-lg border-r border-gray-200/50">
            <div className="space-y-10">
              {/* Description */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <svg className="w-8 h-8 mr-3 bg-primary-blue/10 p-2 rounded-2xl text-primary-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 10a2 2 0 00-2 2v1a2 2 0 002-2v-1z" />
                  </svg>
                  Project Overview
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed text-balance">
                  {project.description}
                </p>
              </div>

              {/* Key Strengths */}
              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-8 flex items-center">
                  <svg className="w-8 h-8 mr-3 bg-green-100 p-2 rounded-2xl text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Key Achievements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.strengths.map((strength, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-start space-x-4 p-6 bg-green-50/70 backdrop-blur-sm rounded-2xl border border-green-200/50 hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300"
                      whileHover={{ y: -2 }}
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 flex-shrink-0 shadow-lg" />
                      <span className="text-gray-800 font-medium leading-relaxed flex-1">{strength}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h3 className="text-2xl font-bold text-orange-700 mb-8 flex items-center">
                  <svg className="w-8 h-8 mr-3 bg-orange-100 p-2 rounded-2xl text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Challenges Overcome
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.challenges.map((challenge, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-start space-x-4 p-6 bg-orange-50/70 backdrop-blur-sm rounded-2xl border border-orange-200/50 hover:shadow-lg hover:shadow-orange-200/50 transition-all duration-300"
                      whileHover={{ y: -2 }}
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0 shadow-lg" />
                      <span className="text-gray-800 font-medium leading-relaxed flex-1">{challenge}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectModal


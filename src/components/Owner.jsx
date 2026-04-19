import { motion } from 'framer-motion'

const Owner = () => {
  return (
    <section id="owner" className="section-padding bg-gradient-to-br from-primary-dark-blue to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(250,204,21,0.3),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2),transparent)]" />
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block gold-gradient text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-2xl mb-8"
          >
            Meet the Visionary
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Sheikh Ahmed Al-Mansoori
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Founder & Chairman
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" 
                alt="Sheikh Ahmed Al-Mansoori" 
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl border-8 border-white/20"
              />
              <div className="absolute -inset-4 bg-gold/20 rounded-3xl -z-10 blur-xl animate-pulse" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:pl-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">
              25+ Years of Leadership
            </h3>
            
            <div className="space-y-6 mb-12">
              <p className="text-xl leading-relaxed opacity-90">
                With over 25 years of experience in construction and infrastructure development, Sheikh Ahmed Al-Mansoori founded Al Andalus Construction with a vision to transform the region's infrastructure landscape.
              </p>
              <p className="text-xl leading-relaxed opacity-90">
                Under his visionary leadership, the company has successfully completed 500+ landmark projects, establishing itself as the premier choice for governments and private enterprises seeking excellence in construction.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold text-gold mb-2">500+</div>
                <div className="opacity-90">Projects Delivered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold text-gold mb-2">SAR 5B+</div>
                <div className="opacity-90">Project Value</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Owner


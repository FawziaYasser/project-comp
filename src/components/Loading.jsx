import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary-dark-blue via-primary-blue to-black flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flex flex-col items-center space-y-6"
      >
        <img 
          src="/imgs/logo img.jpeg"
          alt="Al Andalus Loading"
          className="h-32 w-auto rounded-2xl shadow-2xl border-4 border-white/20"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-4xl font-bold bg-gradient-to-r from-gold to-white bg-clip-text text-transparent drop-shadow-2xl"
        >
          Al Andalus
        </motion.div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-gold rounded-full animate-bounce [animation-delay:0.1s]" />
          <div className="w-3 h-3 bg-gold rounded-full animate-bounce [animation-delay:0.2s]" />
          <div className="w-3 h-3 bg-gold rounded-full animate-bounce [animation-delay:0.3s]" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Loading


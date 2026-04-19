import { useState } from 'react'
import { motion } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Equipment from './components/Equipment'
import Team from './components/Team'
import Clients from './components/Clients'
import Owner from './components/Owner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loading from './components/Loading'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <Router>
      <Loading />
      <div className="min-h-screen bg-white text-gray-900 font-poppins">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <Routes>
          <Route path="/" element={
            <>
              <section id="home"><Hero /></section>
              <section id="about"><About /></section>
              <section id="services"><Services /></section>
              <section id="projects"><Projects /></section>
              <section id="team"><Team /></section>
              <section id="equipment"><Equipment /></section>
              <section id="clients"><Clients /></section>
              <section id="owner"><Owner /></section>
              <section id="contact"><Contact /></section>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App

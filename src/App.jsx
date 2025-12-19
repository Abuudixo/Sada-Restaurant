import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Menu from './Components/Menu'
import Gallery from './Components/Gallery'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contacts'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div className="min-h-screen bg-white">
     <Navbar/>
     <Hero/>
     <About/>
     <Menu/>
     <Gallery/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App

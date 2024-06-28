// import { useState } from 'react'
// import { BrowserRouter, Routers, Router } from 'react-router-dom' 
import FeatureSection from './components/FeatureSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Workflow from './components/Workflow'


function App() {

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-10 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
      </div>
    </>
  )
}

export default App

import React from 'react'
import HeroSection from './components/HeroSection'
import NewsSection from './components/NewsSection'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <HeroSection />
      <NewsSection />
    </div>
  )
}

export default App

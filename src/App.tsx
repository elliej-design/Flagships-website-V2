import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import NewsSection from './components/NewsSection'
import ResearchSection from './components/ResearchSection'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <HeroSection />
      <NewsSection />
      <ResearchSection />
    </div>
  )
}

export default App

import React, { useState } from 'react'
import ArticlePage from './components/ArticlePage'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import NewsSection from './components/NewsSection'
import ResearchSection from './components/ResearchSection'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('article') // Start with article page

  const handleNavigation = (page: string) => {
    setCurrentPage(page)
  }

  if (currentPage === 'home') {
    return (
      <div className="app">
        <Header />
        <Sidebar onNavigate={handleNavigation} />
        <HeroSection />
        <NewsSection onNavigate={handleNavigation} />
        <ResearchSection />
      </div>
    )
  }

  return <ArticlePage onNavigate={handleNavigation} />
}

export default App

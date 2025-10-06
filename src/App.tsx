import React, { useState } from 'react'
import ArticlePage from './pages/Articlepage'
import NewsPage from './pages/NewsPage'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import NewsSection from './components/NewsSection'
import ResearchSection from './components/ResearchSection'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [currentSlug, setCurrentSlug] = useState<string>('')

  const handleNavigation = (page: string, slug?: string) => {
    setCurrentPage(page)
    if (slug) {
      setCurrentSlug(slug)
    }
  }

  // Home page
  if (currentPage === 'home') {
    return (
      <div className="app">
        <Header />
        <Sidebar onNavigate={handleNavigation} currentPage={currentPage} />
        <HeroSection />
        <NewsSection onNavigate={handleNavigation} />
        <ResearchSection />
      </div>
    )
  }

  // All news page
  if (currentPage === 'news') {
    return (
      <div className="app">
        <Header />
        <Sidebar onNavigate={handleNavigation} currentPage={currentPage} />
        <NewsPage onNavigate={handleNavigation} />
      </div>
    )
  }

  // Individual article page
  if (currentPage === 'article') {
    return (
      <div className="app">
        <Header />
        <Sidebar onNavigate={handleNavigation} currentPage={currentPage} />
        <ArticlePage slug={currentSlug} onNavigate={handleNavigation} />
      </div>
    )
  }

  // Fallback to home
  return (
    <div className="app">
      <Header />
      <Sidebar onNavigate={handleNavigation} currentPage="home" />
      <HeroSection />
      <NewsSection onNavigate={handleNavigation} />
      <ResearchSection />
    </div>
  )
}

export default App
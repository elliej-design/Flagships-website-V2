import React, { useState } from 'react'
import ArticlePage from './pages/Articlepage'
import NewsPage from './pages/NewsPage'
import SecurityPage from './pages/SecurityPage'
import DictionaryPage from './pages/DictionaryPage'
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
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Home page
  if (currentPage === 'home') {
    return (
      <div className="app">
        <Header />
        <Sidebar onNavigate={handleNavigation} currentPage={currentPage} />
        <HeroSection />
        <NewsSection onNavigate={handleNavigation} />
        <ResearchSection onNavigate={handleNavigation} />
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

  // Security page
  if (currentPage === 'security') {
    return (
      <div className="app">
        <Header />
        <Sidebar onNavigate={handleNavigation} currentPage={currentPage} />
        <SecurityPage onNavigate={handleNavigation} />
      </div>
    )
  }

  // Dictionary page
  if (currentPage === 'dictionary') {
    return (
      <div className="app">
        <Header />
        <Sidebar onNavigate={handleNavigation} currentPage={currentPage} />
        <DictionaryPage onNavigate={handleNavigation} />
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
      <ResearchSection onNavigate={handleNavigation} />
    </div>
  )
}

export default App
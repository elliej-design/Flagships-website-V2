import React, { useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface SidebarProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const allMenuItems = [
    'Home',
    'News',
    'Dictionary',
    'Contact',
    'Security'
  ];

  // Hide Home link when on the landing page
  const menuItems = currentPage === 'home' 
    ? allMenuItems.filter(item => item !== 'Home')
    : allMenuItems;

  const handleItemClick = (item: string) => {
    if (onNavigate) {
      onNavigate(item.toLowerCase());
    }
    setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile hamburger button */}
      <button 
        className="mobile-menu-button"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`sidebar sidebar-visible animate-slide-in-left ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-list">
            {menuItems.map((item, index) => (
              <div key={index} className={`sidebar-item animate-fade-in animate-delay-${index + 1}`}>
                <button 
                  className="sidebar-link"
                  onClick={() => handleItemClick(item)}
                >
                  {item === 'Home' && (
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="sidebar-back-arrow"
                    >
                      <path 
                        d="M12 8L4 8M8 4L4 8L8 12" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  <span className="sidebar-link-text">{item}</span>
                  <ChevronRightIcon className="sidebar-chevron" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

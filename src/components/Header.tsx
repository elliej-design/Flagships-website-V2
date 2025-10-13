import React, { useState, useEffect, useRef } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface HeaderProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogin = () => {
    console.log('Login clicked');
    // Handle login functionality here
  };

  const menuItems = [
    'Home',
    'News',
    'Dictionary',
    'Contact',
    'Security'
  ];

  // Hide Home link when on the landing page
  const filteredMenuItems = currentPage === 'home' 
    ? menuItems.filter(item => item !== 'Home')
    : menuItems;

  const handleItemClick = (item: string) => {
    if (onNavigate) {
      onNavigate(item.toLowerCase());
    }
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleLogoClick = () => {
    if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <header className="header animate-fade-in">
      <div className="header-container">
        <button className="header-logo" onClick={handleLogoClick}>
          <img 
            src="/Logo - Black - new.svg" 
            alt="Flagships" 
            className="logo-image"
          />
        </button>
        <div className="header-spacer"></div>
        <div className="header-menu">
          <div className="dropdown-container" ref={dropdownRef}>
            <button 
              className="dropdown-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Learn more
              <ArrowDropDownIcon className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {filteredMenuItems.map((item, index) => (
                  <button
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleItemClick(item)}
                  >
                    {item === 'Home' && (
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="dropdown-back-arrow"
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
                    <span className="dropdown-item-text">{item}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="login-button animate-fade-in-up animate-delay-1" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

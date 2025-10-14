import React from 'react';

interface HeaderProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
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
  };

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
          <nav className="header-nav">
            {filteredMenuItems.map((item, index) => (
              <button
                key={index}
                className={`header-nav-item ${currentPage === item.toLowerCase() ? 'active' : ''}`}
                onClick={() => handleItemClick(item)}
              >
                {item === 'Home' && (
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="header-nav-arrow"
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
                <span className="header-nav-text">{item}</span>
              </button>
            ))}
          </nav>
          <button className="login-button animate-fade-in-up animate-delay-1" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

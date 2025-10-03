import React from 'react';

const Header: React.FC = () => {
  const handleLogin = () => {
    console.log('Login clicked');
    // Handle login functionality here
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-spacer"></div>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;

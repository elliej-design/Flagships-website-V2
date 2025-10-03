import React from 'react';

const Sidebar: React.FC = () => {
  const menuItems = [
    'News',
    'Dictionary',
    'Contact',
    'Security'
  ];

  return (
    <div className="sidebar sidebar-visible">
      <div className="sidebar-content">
        <div className="sidebar-list">
          {menuItems.map((item, index) => (
            <div key={index} className="sidebar-item">
              <a href="#" className="sidebar-link">
                {item}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

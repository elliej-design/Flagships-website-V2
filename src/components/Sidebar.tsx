import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface SidebarProps {
  onNavigate?: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  const menuItems = [
    'Home',
    'News',
    'Dictionary',
    'Contact',
    'Security'
  ];

  const handleItemClick = (item: string) => {
    if (onNavigate) {
      onNavigate(item.toLowerCase());
    }
  };

  return (
    <div className="sidebar sidebar-visible">
      <div className="sidebar-content">
        <div className="sidebar-list">
          {menuItems.map((item, index) => (
            <div key={index} className="sidebar-item">
              <button 
                className="sidebar-link"
                onClick={() => handleItemClick(item)}
              >
                <span className="sidebar-link-text">{item}</span>
                <ChevronRightIcon className="sidebar-chevron" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';

const ContactPage: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:Grace@flagships.io';
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-section">
            <h2 className="contact-subtitle">General Enquiries</h2>
            <a 
              href="mailto:Grace@flagships.io"
              className="contact-email"
              onClick={handleEmailClick}
            >
              Grace@flagships.io
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

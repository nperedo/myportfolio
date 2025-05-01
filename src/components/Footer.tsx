import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>© {currentYear} - Built with React & Framer Motion</p>
        <p className="text-sm mt-2">
          <span className="opacity-75">All rights reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
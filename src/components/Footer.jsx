import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo / Name */}
        <div className="text-lg font-bold mb-4 md:mb-0">
          Rakib Hasan
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            Twitter
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Rakib Hasan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

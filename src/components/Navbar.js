import React, { useState } from 'react';
import { FaHome, FaUser, FaTools, FaLaptopCode, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sidebar-toggle" onClick={toggleNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul className="sidebar-nav">
          <li className="sidebar-nav-item">
            <a href="#home" className="sidebar-nav-link" onClick={toggleNavbar}>
              <FaHome />
              <span>Home</span>
            </a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#about" className="sidebar-nav-link" onClick={toggleNavbar}>
              <FaUser />
              <span>About</span>
            </a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#skills" className="sidebar-nav-link" onClick={toggleNavbar}>
              <FaTools />
              <span>Skills</span>
            </a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#projects" className="sidebar-nav-link" onClick={toggleNavbar}>
              <FaLaptopCode />
              <span>Projects</span>
            </a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#contact" className="sidebar-nav-link" onClick={toggleNavbar}>
              <FaEnvelope />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
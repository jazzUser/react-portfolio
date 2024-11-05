import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Navbar = () => {
  return (
  <nav className="mb-6 py-6">
      <div className="flex items-center justify-between px-8">
        
        {/* Language Selector */}
        <div className="flex items-center space-x-6">
          <LanguageSwitcher />
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-6 text-2xl">
          <a
            href="https://linkedin.com/in/yourProfile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/jazzUser"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/yourProfile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

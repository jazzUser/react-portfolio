import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa"; // Globe icon for language toggle

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility

  // Handle language change
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false); // Close the dropdown after language selection
  };

  return (
    <div className="relative group">
      {/* Language Button with Tooltip */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center text-2xl w-10 h-10 p-1 hover:bg-gray-100 focus:outline-none transition duration-200 ease-in-out"
      >
        <FaGlobe className="text-xl" /> {/* Adjust icon size */}
      </button>

      {/* Tooltip: Display below the button */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-max p-1 rounded-lg text-white bg-gray-800 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {t("language_tooltip")} {/* Dynamic Tooltip Text */}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-full mt-1 w-28 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <button
            onClick={() => handleLanguageChange("en")}
            className="flex items-center w-full text-left px-2 py-1 hover:bg-gray-100 transition duration-200 text-sm"
          >
            <span className="mr-2">🇬🇧</span> English
          </button>
          <button
            onClick={() => handleLanguageChange("de")}
            className="flex items-center w-full text-left px-2 py-1 hover:bg-gray-100 transition duration-200 text-sm"
          >
            <span className="mr-2">🇩🇪</span> Deutsch
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

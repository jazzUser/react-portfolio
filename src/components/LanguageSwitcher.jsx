import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Handle language change
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <div
      role="region"
      aria-labelledby="language-switcher"
      className="relative group"
    >
      {/* Language Button with Tooltip */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center text-2xl w-10 h-10 p-1 hover:bg-gray-100 focus:outline-none transition duration-200 ease-in-out"
        aria-label={t("language_switcher_button_label")}
        id="language-switcher"
      >
        <FaGlobe className="text-xl" />
      </button>

      <div
        role="tooltip"
        className="absolute top-12 left-1/2 transform -translate-x-1/2 w-max p-1 rounded-lg text-white bg-gray-800 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        {t("language_tooltip")}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="menu"
          className="absolute left-full mt-1 w-28 bg-white border border-gray-300 rounded-md shadow-lg z-10"
          aria-labelledby="language-switcher"
        >
          <button
            onClick={() => handleLanguageChange("en")}
            className="flex items-center w-full text-left px-2 py-1 hover:bg-gray-100 transition duration-200 text-sm"
            aria-label="Change to English"
            role="menuitem"
            tabIndex={0}
          >
            <span className="mr-2">🇬🇧</span> {t("english")}
          </button>
          <button
            onClick={() => handleLanguageChange("de")}
            className="flex items-center w-full text-left px-2 py-1 hover:bg-gray-100 transition duration-200 text-sm"
            aria-label="Change to German"
            role="menuitem"
            tabIndex={0}
          >
            <span className="mr-2">🇩🇪</span> {t("german")}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

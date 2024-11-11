import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import reactIcon from "../../public/assets/React-icon.svg.png"; // Correct path

const Footer = () => {
  const { t } = useTranslation(); // Access translation function
  const footerRef = useRef(null); // Ref to attach to the footer element

  const [isInView, setIsInView] = useState(false); // State to track if the footer is in the viewport

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true); // Set to true when the footer is visible
        } else {
          setIsInView(false); // Reset if the footer goes out of view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the footer is visible
      }
    );

    // Start observing the footer element
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      role="contentinfo" // Changed from "region" to "contentinfo"
      aria-labelledby="footer-section"
      ref={footerRef} // Attach the footer element to the observer
      className="flex items-center justify-center py-4 bg-neutral-950 text-neutral-300"
    >
      <div className="flex items-center">
        {/* Static React icon */}
        <img src={reactIcon} alt="React Logo" className="w-8 h-8 mr-2" />
        {/* Translated text */}
        <span>
          {t("powered_by_react")} {/* Use the translated text here */}
        </span>
      </div>
    </footer>
  );
};

export default Footer;

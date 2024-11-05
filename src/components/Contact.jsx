import React from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import { motion } from "framer-motion";

const Contact = () => {
  const { t } = useTranslation(); // Access the translation function

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        {t('contact.get_in_touch')} {/* Get translation for "Get in Touch" */}
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {t('contact.address')} {/* Get translation for address */}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {t('contact.phone_no')} {/* Get translation for phone number */}
        </motion.p>
        <a href={`mailto:${t('contact.email')}`} className="border-b">
          {t('contact.email')} {/* Get translation for email */}
        </a>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div
      role="region"
      aria-labelledby="contact-section" 
      className="border-b border-neutral-700 pb-20 bg-neutral-950"
    >
      <motion.h2
        id="contact-section" 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl text-white"
      >
        {t('contact.get_in_touch')}
      </motion.h2>
      <div className="text-center tracking-tighter text-neutral-200">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {t('contact.address')}
        </motion.p>
   {/*      <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {t('contact.phone_no')}
        </motion.p> */}
        <a
          href={`mailto:${t('contact.email')}`}
          className="border-b text-neutral-100 hover:text-cyan-300"
          aria-label={`Email: ${t('contact.email')}`} 
        >
          {t('contact.email')}
        </a>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import { SiKotlin, SiDocker, SiSpringboot, SiJavascript, SiAzuredevops } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

// Variants for icon animation
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const { t } = useTranslation();

  // Technology icons data array for easy mapping
  const technologies = [
    { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, label: "React", duration: 2.5 },
    { icon: <SiKotlin className="text-7xl" />, label: "Kotlin", duration: 3 },
    { icon: <SiSpringboot className="text-7xl text-green-600" />, label: "Spring Boot", duration: 6 },
    { icon: <SiDocker className="text-7xl text-blue-500" />, label: "Docker", duration: 6 },
    { icon: <BiLogoPostgresql className="text-7xl text-sky-700" />, label: "PostgreSQL", duration: 4 },
    { icon: <SiJavascript className="text-7xl text-yellow-500" />, label: "JavaScript", duration: 2 },
    { icon: <SiAzuredevops className="text-7xl text-blue-400" />, label: "Azure DevOps", duration: 5 },
  ];

  return (
    <div role="region" aria-labelledby="technology-section" className="border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        {t('technologies_title')}
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
            aria-label={t(tech.label)}
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;

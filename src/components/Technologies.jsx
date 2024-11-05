import { RiReactjsLine } from "react-icons/ri";
import { SiKotlin, SiDocker, SiSpringboot, SiJavascript, SiAzuredevops } from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

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

  return (
    <div className="border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        {t("technologies_title")}  {/* Correctly access the technologies section title */}
      </motion.h2>
      
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* React Icon */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p className="mt-2">{t("technologies.React.js")}</p>  {/* Correctly access the translation for React.js */}
        </motion.div>

        {/* Kotlin Icon */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiKotlin className="text-7xl" />
          <p className="mt-2">{t("technologies.Kotlin")}</p>  {/* Correctly access the translation for Kotlin */}
        </motion.div>

        {/* Spring Boot Icon */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSpringboot className="text-7xl text-green-600" />
          <p className="mt-2">{t("technologies.Spring Boot")}</p>  {/* Correctly access the translation for Spring Boot */}
        </motion.div>

        {/* Docker Icon */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiDocker className="text-7xl text-blue-500" />
          <p className="mt-2">{t("technologies.Docker")}</p>  {/* Correctly access the translation for Docker */}
        </motion.div>

        {/* PostgreSQL Icon */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
          <p className="mt-2">{t("technologies.PostgreSQL")}</p>  {/* Correctly access the translation for PostgreSQL */}
        </motion.div>

        {/* JavaScript Icon */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-yellow-500" />
          <p className="mt-2">{t("technologies.JavaScript")}</p>  {/* Correctly access the translation for JavaScript */}
        </motion.div>

        {/* Azure DevOps Icon */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiAzuredevops className="text-7xl text-blue-400" />
          <p className="mt-2">{t("technologies.Azure DevOps")}</p>  {/* Correctly access the translation for Azure DevOps */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;

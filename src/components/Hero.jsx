import { useTranslation } from "react-i18next"; // Import the useTranslation hook from react-i18next
import profilePic from "../../public/assets/profile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  const { t } = useTranslation(); // Access the translation function

  return (
    <div className="border-b border-neutral-900 py-6 px-6 lg:px-16"> {/* Unified padding */}
      <div className="flex flex-wrap items-start justify-between mx-auto max-w-screen-xl">
        {/* Text section */}
        <div className="w-full lg:w-1/2 px-4 py-6">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-thin tracking-tight lg:mt-0"
          >
            {t("hero_name")} {/* Translate the hero name */}
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
          >
            {t("hero_role")}
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter"
          >
            {t("hero_content")}
          </motion.p>
        </div>

        {/* Image section */}
        <div className="w-full lg:w-1/2 px-4 py-6 flex justify-center lg:justify-start">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt={t("hero_name")}
            className="w-full lg:w-auto rounded-2xl"  // Add the rounded-2xl class here for rounded corners
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

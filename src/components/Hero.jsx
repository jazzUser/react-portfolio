import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center justify-center md:pt-0 lg:pt-0 pt-6">
        <div className="w-full lg:w-1/2 lg:pl-8 lg:pr-8 xl:pl-16 xl:pr-16">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-2 text-6xl font-thin tracking-tight lg:mt-2 md:mt-6 lg:text-8xl xl:text-9xl"
            >
              {t("hero_name")}
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
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-start mt-8 lg:mt-0 xl:mt-0">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={t("hero_image")}
            alt={t("hero_alt")}
            className="max-w-xs lg:max-w-md xl:max-w-xl rounded-2xl" // Added rounded-2xl for rounded corners
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

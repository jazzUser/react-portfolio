import { useTranslation } from "react-i18next";
import aboutImg from "../../public/assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  const { t } = useTranslation();

  return (
    <div
      role="region"
      aria-labelledby="about-section"
      className="border-b border-neutral-900 pb-4"
    >
      <h2 id="about-section" className="my-20 text-center text-4xl">
        {t("about_title")}
        <span className="text-neutral-500"> {t("about_me")}</span>{" "}
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl"
              src={aboutImg}
              alt={t("about_img_alt")}
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{t("about_text")}</p>{" "}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

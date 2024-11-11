import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Projects = () => {
  const { t } = useTranslation();

  const projects = t("projects", { returnObjects: true });

  return (
    <section
      role="region"
      aria-labelledby="projects-section"
      className="border-b border-neutral-900 pb-4"
    >
      <motion.h2
        id="projects-section"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        {t("projects_title")}{" "}
      </motion.h2>
      <div>
        {Object.keys(projects).map((projectKey) => {
          const { title, image, description, technologies } =
            projects[projectKey];
          return (
            <div
              key={projectKey}
              className="mb-8 flex flex-wrap lg:justify-center"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <img
                  src={image}
                  width={150}
                  height={150}
                  alt={title}
                  className="mb-6 rounded"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">{title}</h6>
                <p className="mb-4 text-neutral-400">{description}</p>
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

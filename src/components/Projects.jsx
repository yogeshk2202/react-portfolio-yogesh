import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:flex-nowrap lg:justify-center items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <div className="w-full lg:w-3/4 lg:ml-16 flex flex-col lg:flex-row-reverse">
              <div className="w-full max-w-xl mb-4 lg:mb-0">
                <motion.h6
                  className="mb-2 font-semibold text-black"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: index * 0.3 }}
                >
                  {project.title}
                </motion.h6>
                <motion.p
                  className="mb-4 text-neutral-400"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: index * 0.4 }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  className="flex flex-wrap"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.5 }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mb-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>

              <motion.div
                className="w-full lg:w-1/4 flex justify-center lg:justify-end lg:mr-16"
                initial="hidden"
                whileInView="visible"
                variants={imageVariants}
                transition={{ duration: 0.8, delay: index * 0.6 }}
              >
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="rounded"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

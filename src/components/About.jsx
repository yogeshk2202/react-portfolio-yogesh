import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const About = () => {
  return (
    <div className="pb-0 flex items-center justify-center min-h-screen px-8"> 
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          className="mt-20 mb-8 text-4xl"
          variants={fadeInUp}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-black font-[Times New Roman] text-justify mb-0"
          variants={fadeInUp}
          transition={{ delay: 0.2, duration: 1.2 }}
        >
          {ABOUT_TEXT}
        </motion.p>
      </motion.div>
    </div>
  );
}

export default About;

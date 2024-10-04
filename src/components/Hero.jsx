import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile copy.png";
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

const scaleOnHover = {
  hover: { scale: 1.1, transition: { duration: 0.5 } },
};

const textFadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, delay: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35 font-[Times New Roman] px-4"> 
      <div className="flex flex-wrap lg:flex-nowrap justify-between">
        <motion.div
          className="w-full lg:w-1/2 pl-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        > 
          <div className="flex flex-col items-left lg:items-start">
            <motion.h1
              variants={fadeInLeft}
              className="pb-12 text-6xl font-bold tracking-tight lg:mt-10 lg:text-6xl text-black"
            >
              Yogesh K
            </motion.h1>

            <motion.span
              variants={textFadeIn}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-light text-transparent"
            >
              Software Engineer | Frontend Developer
            </motion.span>

            <motion.p
              variants={fadeInRight}
              className="mt-4 text-black text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 lg:flex lg:justify-end lg:p-8 mb-0"
          whileHover="hover"
        >
          <motion.img
            src={profilePic}
            alt="Yogesh K"
            variants={scaleOnHover}
            className="max-w-full h-auto lg:w-3/4 transform transition-transform duration-700 ease-in-out hover:scale-110"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

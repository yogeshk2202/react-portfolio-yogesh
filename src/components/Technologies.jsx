import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiPython, SiMysql, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial : { y: -10 },
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
  return (
    <div className="pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }} 
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 transition-transform duration-500 ease-in-out hover:scale-110"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 transition-transform duration-500 ease-in-out hover:scale-110"
        >
          <SiJavascript className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 transition-transform duration-500 ease-in-out hover:scale-110"
        >
          <SiHtml5 className="text-7xl text-orange-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 transition-transform duration-500 ease-in-out hover:scale-110"
        >
          <SiCss3 className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 transition-transform duration-500 ease-in-out hover:scale-110"
        >
          <SiNodedotjs className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 transition-transform duration-500 ease-in-out hover:scale-110"
        >
          <SiPython className="text-7xl text-blue-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 transition-transform duration-500 ease-in-out hover:scale-110"
        >
          <SiMysql className="text-7xl text-orange-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 transition-transform duration-500 ease-in-out hover:scale-110"
        >
          <SiMongodb className="text-7xl text-green-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;



import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const bounceVariant = {
  hover: { y: -10, transition: { type: "spring", stiffness: 300 } },
};

const Contact = () => {
  return (
    <motion.div 
      className="border-b border-neutral-900 pb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h1
        variants={fadeInVariant}
        className="my-6 text-center text-4xl font-bold text-black"
      >
        Let’s Connect!
      </motion.h1>
      
      <motion.hr 
        variants={fadeInVariant}
        className="border-t border-gray-300 mb-6" 
      />
      <div className="text-center tracking-tighter">
        <motion.p
          variants={fadeInVariant}
          transition={{ delay: 0.1 }}
          className="my-4 text-lg text-black"
        >
          I’m just a message away!
        </motion.p>
        
        <motion.p
          variants={fadeInVariant}
          transition={{ delay: 0.2 }}
          className="my-4 text-sm text-gray-600"
        >
          {CONTACT.address}
        </motion.p>

        <motion.p
          variants={fadeInVariant}
          transition={{ delay: 0.3 }}
          className="my-4 text-sm text-gray-600"
        >
          {CONTACT.phoneNo}
        </motion.p>

        <motion.a
          href={`mailto:${CONTACT.email}`}
          className="text-cyan-400 text-lg hover:text-cyan-600 transition duration-300"
          whileHover="hover"
          variants={bounceVariant}
        >
          {CONTACT.email}
        </motion.a>
      </div>
      <motion.p
        variants={fadeInVariant}
        transition={{ delay: 0.4 }}
        className="mt-6 text-center text-sm text-gray-600"
      >
        {CONTACT.copyright}
      </motion.p>
    </motion.div>
  );
};

export default Contact;

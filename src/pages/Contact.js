// Animation
import { motion } from "framer-motion";
import { PageAnimation } from "../Animation";

const Contact = () => {
  return (
    <motion.div
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit={PageAnimation.exit}
    >
      <h1>Contact</h1>
    </motion.div>
  );
};

export default Contact;

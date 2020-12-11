// Components
import AboutMeSection from "../components/AboutMeSection";
import MySkillsSection from "../components/MySkillsSection";
import FaqSection from "../components/FaqSection";
// Animation
import { motion } from "framer-motion";
import { PageAnimation } from "../Animation";

const AboutMe = () => {
  return (
    <motion.div
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit={PageAnimation.exit}
    >
      <AboutMeSection />
      <MySkillsSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutMe;

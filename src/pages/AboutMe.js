// Components
import AboutMeSection from "../components/AboutMeSection";
import MySkillsSection from "../components/MySkillsSection";
import MyExperienceSection from "../components/MyExperienceSection";
import FaqSection from "../components/FaqSection";
// Animation
import { motion } from "framer-motion";
import { PageAnimation } from "../Animation";
import { StyledHide } from "../Styles";
import Testimonial from "../components/Testmonial";
import { useEffect } from "react";

const AboutMe = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);
  return (
    <motion.div
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit={PageAnimation.exit}
    >
      <StyledHide>
        <AboutMeSection />
        <MySkillsSection />
        <MyExperienceSection />
        <Testimonial />
        <FaqSection />
      </StyledHide>
    </motion.div>
  );
};

export default AboutMe;

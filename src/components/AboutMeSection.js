// Components
import Wave from "./Wave";
// Images
import abhishekShrivastava1 from "../img/abhishek-2.jpeg";
// Styles
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../Styles";
// Animation
import { motion } from "framer-motion";
import { slideUp, fadeIn, zoomOut } from "../Animation";
// Router
import { Link } from "react-router-dom";

const AboutMeSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <motion.h2 variants={slideUp}>Think twice</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={slideUp}>
              <span>code</span> once.
            </motion.h2>
          </StyledHide>
          {/* <StyledHide>
            <motion.h2 variants={slideUp}>once.</motion.h2>
          </StyledHide> */}
        </div>
        <motion.p variants={fadeIn}>
          Seasoned software developer adept at crafting scalable solutions. Proven track record in leading complex projects to success. Specializing in innovative designs and implementations that optimize performance and user experience.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fadeIn}>Contact Me</motion.button>
        </Link>
        <motion.a href="https://drive.google.com/uc?export=download&id=1QjuMeetjrEETgdgzMs5SOf-M6ODMDRt9">
          <motion.button variants={fadeIn}>Download my resume</motion.button>
        </motion.a>
      </StyledDescription>
      <StyledImage>
        <motion.img
          variants={zoomOut}
          src={abhishekShrivastava1}
          alt="Abhishek Shrivastava"
        />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutMeSection;

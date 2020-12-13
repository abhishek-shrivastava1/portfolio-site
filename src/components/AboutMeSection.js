// Components
import Wave from "./Wave";
// Images
import MyImage from "../img/home1.png";
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
            <motion.h2 variants={slideUp}>I work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={slideUp}>
              your <span>dreams</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={slideUp}>come true.</motion.h2>
          </StyledHide>
        </div>
        <motion.p variants={fadeIn}>
          I am a software engineer, a passionate coding enthusiast, in love with
          solving real world problems with the power of coding since i was 13. I
          am highly organized, I take my time to analyze before I move forward
          and I aspire to utilize my skills in an organization which gives me an
          opportunity to learn and grow.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fadeIn}>Contact Me</motion.button>
        </Link>
      </StyledDescription>
      <StyledImage>
        <motion.img
          variants={zoomOut}
          src={MyImage}
          alt="Abhishek Shrivastava"
        />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutMeSection;

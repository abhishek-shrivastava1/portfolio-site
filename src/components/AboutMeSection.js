// Components
import Wave from "./Wave";
// Images
import abhishekShrivastava1 from "../img/abhishek-shrivastava-1.jpg";
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
          I am a software engineer, a passionate coding enthusiast, in love with
          solving real world problems with the power of coding since i was 13. I
          am highly organized, I take my time to analyze before I move forward
          and I aspire to utilize my skills in an organization which gives me an
          opportunity to learn and grow.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fadeIn}>Contact Me</motion.button>
        </Link>
        <motion.a href="https://drive.google.com/u/1/uc?id=1_BT_guPhyfwGn4Eq3LlzpJBEX4cvWGAU&export=download">
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

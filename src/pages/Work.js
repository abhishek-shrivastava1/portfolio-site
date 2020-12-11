// Router
import { Link } from "react-router-dom";
// Images
import AthleteImage from "../img/athlete-small.png";
import GoodTimesImage from "../img/goodtimes-small.png";
import TheRacerImage from "../img/theracer-small.png";
// Styles
import { StyledHide } from "../Styles";
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
import {
  PageAnimation,
  rotateContainer,
  fadeIn,
  zoomOut,
  slideRight,
  rotate,
} from "../Animation";

const Work = () => {
  return (
    <StyledWork
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit={PageAnimation.exit}
      style={{ backgroundColor: "#fff" }}
    >
      <motion.div variants={rotateContainer}>
        <Frame1 variants={rotate} />
        <Frame2 variants={rotate} />
        <Frame3 variants={rotate} />
        <Frame4 variants={rotate} />
      </motion.div>
      <StyledProject>
        <motion.h2 variants={fadeIn}>Project title</motion.h2>
        <motion.div variants={slideRight} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <StyledHide>
            <motion.img variants={zoomOut} src={AthleteImage} alt="athlete" />
          </StyledHide>
        </Link>
      </StyledProject>

      <StyledProject>
        <motion.h2 variants={fadeIn}>Project title</motion.h2>
        <motion.div variants={zoomOut} className="line"></motion.div>
        <Link to="/work/good-times">
          <StyledHide>
            <motion.img variants={zoomOut} src={GoodTimesImage} alt="athlete" />
          </StyledHide>
        </Link>
      </StyledProject>

      <StyledProject>
        <motion.h2 variants={fadeIn}>Project title</motion.h2>
        <motion.div variants={zoomOut} className="line"></motion.div>
        <Link to="/work/the-racer">
          <StyledHide>
            <motion.img variants={zoomOut} src={TheRacerImage} alt="athlete" />
          </StyledHide>
        </Link>
      </StyledProject>

      <StyledProject>
        <motion.h2 variants={fadeIn}>Project title</motion.h2>
        <motion.div variants={fadeIn} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <StyledHide>
            <motion.img variants={zoomOut} src={AthleteImage} alt="athlete" />
          </StyledHide>
        </Link>
      </StyledProject>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 7rem;
  /* background: white; */
  h2 {
    padding: 1rem 0;
  }
`;

const StyledProject = styled.div`
  padding-bottom: 7rem;
  overflow: hidden;
  .line {
    height: 0.3rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
  }
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 90vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8ebf;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default Work;

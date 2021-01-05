// Animation
import { motion } from "framer-motion";
import { fadeIn, zoomOut, slideRight } from "../Animation";
// Hooks
import { useScroll } from "../hooks/useScroll";
// Styles
import { StyledHide } from "../Styles";
import styled from "styled-components";
// Router
import { Link } from "react-router-dom";

const WorkSummary = ({ id, title, mainImg, url }) => {
  const [element, controls] = useScroll();
  return (
    <StyledProject variants={fadeIn} animate={controls} ref={element}>
      <motion.h2 variants={fadeIn}>{title}</motion.h2>
      <motion.div variants={slideRight} className="line"></motion.div>
      <Link to={url}>
        <StyledHide>
          <motion.img variants={zoomOut} src={mainImg} alt="athlete" />
        </StyledHide>
      </Link>
    </StyledProject>
  );
};
const StyledProject = styled(motion.div)`
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
    border: 1px solid #a7a5a5;
  }
`;

export default WorkSummary;

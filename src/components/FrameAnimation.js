// Styles
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { rotateContainer, rotate } from "../Animation";

const FrameAnimation = () => {
  return (
    <motion.div variants={rotateContainer} initial="hidden" animate="show">
      <Frame1 variants={rotate} />
      <Frame2 variants={rotate} />
      <Frame3 variants={rotate} />
      <Frame4 variants={rotate} />
    </motion.div>
  );
};

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
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

export default FrameAnimation;

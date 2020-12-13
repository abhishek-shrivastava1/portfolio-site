// Data
import { projectData } from "../Data";
// Styles
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
import { PageAnimation } from "../Animation";
import FrameAnimation from "../components/FrameAnimation";
// Components
import WorkSummary from "../components/WorkSummary";

const Work = () => {
  return (
    <StyledWork
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ backgroundColor: "#fff" }}
    >
      <FrameAnimation />
      {projectData.map((project) => (
        <WorkSummary
          key={project.id}
          id={project.id}
          title={project.title}
          mainImg={project.mainImg}
          url={project.url}
        />
      ))}
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 7rem;
  h2 {
    padding: 1rem 0;
  }
  @media (max-width: 1290px) {
    padding: 2rem 2rem;
  }
`;

export default Work;

// Styles and Animations
import styled from "styled-components";
import { motion } from "framer-motion";

const ExperienceCard = ({ id, from, to, designation, company, onClick }) => {
  return (
    <StyledExperienceCard onClick={onClick} layoutId={id.toString()}>
      <div className="content">
        <h2>{designation}</h2>
        <h3>{company}</h3>
        <p>{`${from} - ${to}`}</p>
      </div>
      <div className="time">{from}</div>
    </StyledExperienceCard>
  );
};

const StyledExperienceCard = styled(motion.div)`
  padding: 2rem;
  cursor: pointer;
  /* border-radius: 1rem; */
  background-color: #2a2a2a;
  color: #d3d3d3;
  @media (min-width: 768px) {
    width: 75vh;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    margin: 0.5rem 0 0.2rem;
    color: #d3d3d3;
    font-size: 1.3rem;
    font-weight: lighter;
  }
  p {
    padding: 0;
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
`;

export default ExperienceCard;

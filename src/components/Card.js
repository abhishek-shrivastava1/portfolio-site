// Styles
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
import { fadeIn } from "../Animation";

const Card = ({ icon, name, percentage }) => {
  return (
    <StyledCard variants={fadeIn}>
      <div className="icon">
        <i className={icon}></i>
        <h3>{name}</h3>
      </div>
      <StyledLine
        variants={{
          hidden: { width: 0 },
          show: { width: percentage, transition: { duration: 2 } },
        }}
      />
      <div className="background-line"></div>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  /* border: 1px solid #353535; */
  /* overflow: hidden; */
  width: 50%;
  display: relative;
  padding: 1rem;
  @media (max-width: 400px) {
    width: 100%;
  }
  .background-line {
    position: relative;
    z-index: 1;
    top: -5px;
    width: 230px;
    background-color: #353535;
    height: 0.4rem;
    @media (max-width: 400px) {
      width: 290px;
    }
  }
  i {
    color: #23d997;
  }
  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      padding: 1rem;
    }
  }
`;

const StyledLine = styled(motion.div)`
  height: 0.3rem;
  position: relative;
  background: #23d997;
  margin-top: 1rem;
  width: 0;
  z-index: 2;
`;

export default Card;

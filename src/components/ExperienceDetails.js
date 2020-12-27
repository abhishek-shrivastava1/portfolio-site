import styled from "styled-components";
import { motion } from "framer-motion";
import { experienceData } from "../Data";

const ExperienceDetails = ({ id, close }) => {
  // Handler
  const exitGameDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      close();
    }
  };
  return (
    <StyledCardShadow className="shadow" onClick={exitGameDetailHandler}>
      <StyledExperienceDetails layoutId={id.toString()} layout>
        <p>{experienceData.filter((x) => x.id === id)[0].id}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam cum
          pariatur sapiente harum quo provident. Quisquam ducimus quae deserunt
          sunt, debitis ipsam dignissimos laboriosam voluptas minima, ipsa
          aliquam eligendi itaque.
        </p>
        <button onClick={close}>X</button>
      </StyledExperienceDetails>
    </StyledCardShadow>
  );
};

const StyledCardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100%;
  overflow-y: hidden;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
`;

const StyledExperienceDetails = styled(motion.div)`
  padding: 3rem;
  width: 83%;
  background-color: #2a2a2a;
  border-radius: 1rem;
  z-index: 5;
  position: fixed;
  top: 15%;
  overflow: scroll;
  overflow-x: hidden;
  bottom: 2.5%;
  left: 8%;
  /* transform: translateX(50%); */

  @media (max-width: 768px) {
    bottom: 1%;
    top: 20%;
    width: 88%;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #23d997;
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-track {
    background: #353535;
  }
`;

export default ExperienceDetails;

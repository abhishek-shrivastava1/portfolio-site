import styled from "styled-components";
import { motion } from "framer-motion";
import { experienceData } from "../Data";

const ExperienceDetails = ({ id, close }) => {
  const experience = experienceData.filter((x) => x.id === id)[0];
  // Handler
  const exitGameDetailHandler = (e) => {
    console.log(e);
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      close();
    }
  };
  let i = 1;
  return (
    <StyledCardShadow className="shadow" onClick={exitGameDetailHandler}>
      <StyledExperienceDetails layoutId={id.toString()} layout>
        <h2>{experience.designation}</h2>
        <h3>
          <span>{experience.company}</span>
        </h3>
        <p>{`${experience.from} - ${experience.to}`}</p>
        <hr />
        {experience.description.map((des) => (
          <p key={i++} style={{ color: "white" }}>
            {des}
          </p>
        ))}
        <button
          className="shadow"
          onClick={(e) => {
            close(e);
            exitGameDetailHandler(e);
          }}
        >
          X
        </button>
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
  h2 {
    margin-bottom: 1rem;
  }
  z-index: 6;
  padding: 3rem 5rem;
  width: 83%;
  background-color: #2a2a2a;
  border-radius: 1rem;
  position: fixed;
  top: 18%;
  overflow: scroll;
  overflow-x: hidden;
  bottom: 2.5%;
  left: 8%;
  p {
    padding: 0;
    line-height: 20px;
  }

  button {
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    bottom: 1%;
    top: 20%;
    width: 87%;
    padding: 1rem;
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

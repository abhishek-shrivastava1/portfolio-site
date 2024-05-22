// images
import abhishekShrivastava2 from "../img/abhishek-1.jpeg";
// Styled Component
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledCards,
} from "../Styles";
import styled from "styled-components";
// Hooks
import { useScroll } from "../hooks/useScroll";
// Animations
import { scrollReveal } from "../Animation";
// Data
import { skillsDetails } from "../Data";
// Components
import Card from "../components/Card";

const MySkillsSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledSkills
      variants={scrollReveal}
      ref={element}
      initial="hidden"
      animate={controls}
    >
      <StyledDescription>
        <h2>
          My <span>skills</span>.
        </h2>
        <StyledCards>
          {skillsDetails.map((skill) => (
            <Card
              key={skill.id}
              icon={skill.icon}
              name={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={abhishekShrivastava2} alt="Abhishek Shrivastava" />
      </StyledImage>
    </StyledSkills>
  );
};

// Styled Components
const StyledSkills = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 250px;
    padding: 0.5rem;
    @media (max-width: 1290px) {
      width: 350px;
    }
  }
`;

export default MySkillsSection;

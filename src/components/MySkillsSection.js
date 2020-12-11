// images
import HomeImage from "../img/home2.png";
// Styled Component
import { StyledAbout, StyledDescription, StyledImage } from "../Styles";
import styled from "styled-components";

const MySkillsSection = () => {
  return (
    <StyledSkills>
      <StyledDescription>
        <h2>
          My <span>skills</span>.
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <i className="fab fa-java fa-3x "></i>
              <h3>Java</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </StyledCard>

          <StyledCard>
            <div className="icon">
              <i className="fab fa-js-square fa-3x"></i>
              <h3>JavaScript</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </StyledCard>

          <StyledCard>
            <div className="icon">
              <i className="fas fa-leaf fa-3x"></i>
              <h3>Spring boot</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </StyledCard>

          <StyledCard>
            <div className="icon">
              <i className="fab fa-react fa-3x"></i>
              <h3>React</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={HomeImage} alt="camera" />
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
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
  padding: 1rem 0;

  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      /* background: white;
      color: black; */
      padding: 1rem;
    }
  }
`;

export default MySkillsSection;

// Images
import MyImage from "../img/home1.png";
// Styles
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../Styles";

const AboutMeSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>I work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span>
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>come true.</h2>
          </StyledHide>
        </div>
        <p>
          I am a software engineer, a passionate coding enthusiast, in love with
          solving real world problems with the power of coding since i was 13. I
          am highly organized, I take my time to analyze before I move forward
          and I aspire to utilize my skills in an organization which gives me an
          opportunity to learn and grow.
        </p>
        <button>Contact Me</button>
      </StyledDescription>
      <StyledImage>
        <img src={MyImage} alt="Abhishek Shrivastava" />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutMeSection;

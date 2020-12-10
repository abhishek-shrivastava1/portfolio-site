// Router
import { Link } from "react-router-dom";
// Images
import AthleteImage from "../img/athlete-small.png";
import GoodTimesImage from "../img/goodtimes-small.png";
import TheRacerImage from "../img/theracer-small.png";
// Styles
// import { StyledAbout } from "../Styles";
import styled from "styled-components";

const Work = () => {
  return (
    <StyledWork>
      <h1>Work</h1>
      <StyledProject>
        <h2>Project title</h2>
        <div className="line"></div>
        <Link>
          <img src={AthleteImage} alt="athlete" />
        </Link>
      </StyledProject>

      <StyledProject>
        <h2>Project title</h2>
        <div className="line"></div>
        <Link>
          <img src={GoodTimesImage} alt="athlete" />
        </Link>
      </StyledProject>

      <StyledProject>
        <h2>Project title</h2>
        <div className="line"></div>
        <Link>
          <img src={TheRacerImage} alt="athlete" />
        </Link>
      </StyledProject>

      <StyledProject>
        <h2>Project title</h2>
        <div className="line"></div>
        <Link>
          <img src={AthleteImage} alt="athlete" />
        </Link>
      </StyledProject>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 7rem;
  background: white;
  h2 {
    padding: 1rem 0;
  }
`;

const StyledProject = styled.div`
  padding-bottom: 7rem;
  .line {
    height: 0.3rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }

  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
  }
`;

export default Work;

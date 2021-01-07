// Styles
import styled from "styled-components";
// Component
import { slideUp } from "../Animation";
const Footer = () => {
  return (
    <StyledSocials variants={slideUp}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          // margin: "0 15rem",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p style={{ textAlign: "center", padding: "0" }}>
          developed by Abhishek Shrivastava
        </p>
        <p style={{ textAlign: "center", padding: "0" }}>Software Engineer</p>
      </div>
    </StyledSocials>
  );
};

const StyledSocials = styled.div`
  @media (max-width: 1290px) {
    display: block;
  }
  ul {
    list-style-type: none;
    i {
      color: #cecece;
    }
  }
  p {
    display: inline;
    font-size: 13px;
    line-height: 1.7rem;
  }
  padding: 1rem 1rem;
  h5 {
    color: white;
    margin-bottom: 1rem;
  }
  p {
    width: 250px;
    padding: 0.5rem;
    @media (max-width: 1290px) {
      width: 350px;
    }
    @media (max-width: 400px) {
      width: 200px;
    }
  }
`;

export default Footer;

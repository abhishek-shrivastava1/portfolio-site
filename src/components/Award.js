import styled from "styled-components";

const Award = ({ title, description }) => {
  return (
    <AwardStyle className="award">
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

const AwardStyle = styled.div`
  padding: 2rem;
  h3 {
    font-size: 1.2rem;
  }

  .line {
    width: 75%;
    background: #23d997;
    height: 0.2rem;
    margin: 1rem 0;
  }

  p {
    padding: 1.5rem 0;
  }
`;

export default Award;

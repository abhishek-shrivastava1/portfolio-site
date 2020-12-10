// Styles
import { StyledAbout } from "../Styles";
import styled from "styled-components";

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            sed?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>How much experience do I have?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            sed?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>When can I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            sed?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </StyledFaq>
  );
};
const StyledFaq = styled(StyledAbout)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }

  .question {
    padding: 2rem 0;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0;

    p {
      padding: 1rem 0;
    }
  }
`;
// const StyledQuestion =

export default FaqSection;

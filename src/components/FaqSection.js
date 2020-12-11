// Styles
import { StyledAbout } from "../Styles";
import styled from "styled-components";
// Data
import { FaqData } from "../Data";
import Faq from "./Faq";
// Animate
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        {FaqData.map((data) => (
          <Faq question={data.question} answer={data.answer} />
        ))}
      </AnimateSharedLayout>
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
`;
// const StyledQuestion =

export default FaqSection;

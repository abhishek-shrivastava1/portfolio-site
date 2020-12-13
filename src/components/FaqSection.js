// Styles
import { StyledAbout } from "../Styles";
import styled from "styled-components";
// Data
import { FaqData } from "../Data";
import Faq from "./Faq";
// Animate
import { AnimateSharedLayout } from "framer-motion";
import { scrollReveal } from "../Animation";
// Hooks
import { useScroll } from "../hooks/useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledFaq
      variants={scrollReveal}
      ref={element}
      initial="hidden"
      animate={controls}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        {FaqData.map((data) => (
          <Faq key={data.id} question={data.question} answer={data.answer} />
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

export default FaqSection;

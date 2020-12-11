import { useState } from "react";
// styles
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledFaq layout onClick={() => setIsOpen(!isOpen)}>
      <motion.h4 layout>{question}</motion.h4>
      {isOpen && (
        <div className="answer">
          <p>{answer}</p>
        </div>
      )}
      <div className="faq-line"></div>
    </StyledFaq>
  );
};
const StyledFaq = styled(motion.div)`
  cursor: pointer;

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }

  .answer {
    padding: 2rem 0;

    p {
      padding: 1rem 0;
    }
  }
`;
export default Faq;

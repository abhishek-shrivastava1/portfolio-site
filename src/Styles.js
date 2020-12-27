// Styled Component
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";

// Styled Component
export const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  top: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 7rem;
  color: white;

  button {
    margin-right: 0.7rem;
  }

  @media (max-width: 1290px) {
    display: block;
    padding: 2rem;
    text-align: center;
  }
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 3rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1290px) {
    padding: 0;
    button {
      margin: 2rem 0 5rem 0;
    }
  }
`;

export const StyledImage = styled(motion.div)`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;

export const StyledCards = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 2rem;
  position: relative;
`;

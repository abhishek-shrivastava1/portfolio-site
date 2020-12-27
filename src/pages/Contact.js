// Animation
import { motion } from "framer-motion";
import { PageAnimation, slideUp } from "../Animation";
// Styles
import styled from "styled-components";
import { StyledHide, StyledCards } from "../Styles";
// Component
import SocialCard from "../components/SocialCard";
import ContactDetail from "../components/ContactDetail";
// Data
import { socialDetails, contactInformation } from "../Data";
// react
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);
  return (
    <StyledContact
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ backgroundColor: "#fff" }}
    >
      <StyledTitle>
        <StyledHide>
          <motion.h2 variants={slideUp}>Get in touch.</motion.h2>
        </StyledHide>
      </StyledTitle>
      <StyledHide>
        <motion.h3 variants={slideUp}>Useful Links</motion.h3>
      </StyledHide>
      <StyledHide>
        <StyledSocials variants={slideUp}>
          {socialDetails.map((social) => (
            <SocialCard
              key={social.id}
              icon={social.icon}
              name={social.name}
              link={social.link}
            />
          ))}
        </StyledSocials>
      </StyledHide>
      <StyledHide>
        <motion.table variants={slideUp}>
          <caption>
            <strong>Personal Details</strong>
          </caption>
          {contactInformation.map((contact) => (
            <ContactDetail
              key={contact.id}
              title={contact.title}
              information={contact.information}
            />
          ))}
        </motion.table>
      </StyledHide>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  h3 {
    color: #353535;
  }
  padding: 0.05rem 7rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1290px) {
    padding: 1rem;
  }

  table {
    table-layout: fixed;
    width: 100%;
    padding: 1rem 7rem 1rem 0;
    td {
      width: 100%;
    }
  }
`;

const StyledTitle = styled(motion.div)`
  margin: 4rem;
  color: black;
`;

const StyledSocials = styled(StyledCards)`
  text-align: center;
  padding: 2rem 0 3rem;
  h3 {
    padding: 0;
    color: #353535;
  }
  p {
    width: 250px;
    padding: 0.5rem;
    @media (max-width: 1290px) {
      width: 350px;
    }
  }
  @media (max-width: 1290px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: left;
  }
`;
export default Contact;

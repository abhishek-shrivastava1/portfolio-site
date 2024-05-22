// Styles
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
import { fadeIn } from "../Animation";

const SocialCard = ({ icon, name, link }) => {
  return (
    <StyledCard variants={fadeIn}>
      <a href={link}>
        <div className="icon">
          <i className={icon}></i>
          <h3>{name}</h3>
        </div>
      </a>
      {/* <p>{description}</p> */}
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  padding: 0;
  cursor: pointer;
  width: 25%;
  a {
    text-decoration: none;
  }
  i {
    color: #182485;
  }
  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      padding: 1rem;
      font-size: 1rem;
    }
  }
  @media (max-width: 1290px) {
    padding: 1rem;
    flex: 0 50%;
  }
`;

export default SocialCard;

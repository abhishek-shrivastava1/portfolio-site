// Styles
import { StyledAbout } from "../Styles";
import styled from "styled-components";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { fadeIn, popUp } from "../Animation";
// Data
import { experienceData } from "../Data";
// Components
import ExperienceCard from "./ExperienceCard";
// React
import { useState } from "react";
import ExperienceDetails from "./ExperienceDetails";

const MyExperienceSection = () => {
  const [experienceId, setExperienceId] = useState(null);

  return (
    <>
      <StyledMyExperience>
        <h2>
          My <span>experience</span>.
        </h2>
        <motion.div className="timeline">
          <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
              {experienceId && (
                <ExperienceDetails
                  variants={popUp}
                  id={experienceId}
                  close={() => {
                    console.log("clicked");
                    setExperienceId(null);
                  }}
                />
              )}
            </AnimatePresence>
            <motion.ul className="all-exp" layout>
              {experienceData.map((experience) => (
                <motion.li key={experience.id}>
                  <ExperienceCard
                    variants={fadeIn}
                    onClick={() => {
                      setExperienceId(experience.id);
                    }}
                    id={experience.id}
                    from={experience.from}
                    to={experience.to}
                    designation={experience.designation}
                    company={experience.company}
                  />
                </motion.li>
              ))}
            </motion.ul>
          </AnimateSharedLayout>
        </motion.div>
        <div style={{ clear: "both" }}></div>
      </StyledMyExperience>
    </>
  );
};

const StyledMyExperience = styled(StyledAbout)`
  h2 {
    margin-bottom: 2rem;
  }
  display: block;

  @media (min-width: 768px) {
    li:nth-child(odd) {
      float: left;
      clear: right;
      background-color: black;
      border-radius: 1rem 1rem 0 1rem;
      overflow: hidden;
    }
    li:nth-child(even) {
      float: right;
      clear: left;
      border-radius: 1rem 1rem 1rem 0rem;
      overflow: hidden;
    }
    .timeline::before {
      content: "";
      position: absolute;
      left: 50%;
      height: 100%;
      width: 2px;
      background-color: gray;
    }
  }
  li {
    list-style: none;
    position: relative;
    margin: 1rem 0;
    box-sizing: border-box;
  }

  .timeline {
    position: relative;
    overflow: hidden;
  }
`;

const StyledTimeline = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 2px;
  background-color: gray;
  z-index: 1;
  margin: 50px auto;
`;

export default MyExperienceSection;

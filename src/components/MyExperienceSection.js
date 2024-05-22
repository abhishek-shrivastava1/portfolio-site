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
        <p>
          I currently have total experience of
          {` ${new Date().getFullYear() - 2019} Years`} and
          {` ${new Date().getMonth()} months`}. Click on cards below to know
          more about each of my roles so far.
        </p>
        <motion.div className="timeline">
          <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
              {experienceId && (
                <ExperienceDetails
                  variants={popUp}
                  id={experienceId}
                  close={() => setExperienceId(null)}
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
                      document.body.style.overflow = "hidden";
                    }}
                    id={experience.id}
                    from={experience.from}
                    to={experience.to}
                    designation={experience.designation}
                    company={experience.company}
                    timelineDate={experience.timelineDate}
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
    margin-bottom: 3rem;
  }
  display: block;

  @media (min-width: 768px) {
    li:nth-child(odd) {
      float: left;
      clear: right;
      .time {
        position: absolute;
        bottom: -0.4rem;
        right: -12rem;
        font-weight: bold;
        @media (max-width: 1290px) {
          right: -10rem;
        }
      }
    }
    li:nth-child(odd):before {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      background: #fffade;
      border-radius: 50%;
      right: -4.5rem;
      box-shadow: 0 0 0 3px rgb(35, 217, 151, 0.2);
      bottom: 0;
      @media (max-width: 950px) {
        right: -1.2rem;
      }
      @media (max-width: 1290px) {
        right: -11rem;
      }
    }
    li:nth-child(even) {
      float: right;
      clear: left;
      .time {
        position: absolute;
        bottom: -0.4rem;
        left: -12rem;
        font-weight: bold;
        @media (max-width: 1290px) {
          left: -10rem;
        }
      }
    }

    li:nth-child(even):before {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      background: #fffade;
      border-radius: 50%;
      left: -4.5rem;
      box-shadow: 0 0 0 3px rgb(35, 217, 151, 0.2);
      bottom: 0;
      @media (max-width: 1290px) {
        left: -1.2rem;
      }
      @media (max-width: 1290px) {
        left: -11rem;
      }
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
    border-radius: 1;
  }

  .timeline {
    position: relative;
    overflow: hidden;
  }
`;

export default MyExperienceSection;

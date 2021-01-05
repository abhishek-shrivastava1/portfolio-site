import { useState } from "react";
// Styles
import styled from "styled-components";
// Router
import { useParams } from "react-router-dom";
// Data
import { projectData } from "../Data";
// Component
import Award from "../components/Award";
// Animation
import { motion } from "framer-motion";
import { PageAnimation } from "../Animation";
import { useEffect } from "react";

const ProjectDetail = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);
  const param = useParams();
  const [project] = useState(
    projectData.filter((p) => p.url === `/work/${param.id}`)[0]
  );
  return (
    <>
      {!project ? (
        <p>Not Found</p>
      ) : (
        <StyledProject
          variants={PageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <StyledHeadline>
            <h2>{project.title}</h2>
            <img src={project.mainImg} alt={project.title} />
          </StyledHeadline>
          <AwardsStyle>
            {project.awards.map((award) => (
              <Award
                key={award.id}
                title={award.title}
                description={award.description}
              />
            ))}
          </AwardsStyle>
          <div className="center-button">
            <a href={project.githubUrl}>
              <button>View Source Code</button>
            </a>
          </div>
          {project.secondaryImg && (
            <StyledSecondaryImage>
              <img src={project.secondaryImg} alt={project.title} />
            </StyledSecondaryImage>
          )}
        </StyledProject>
      )}
    </>
  );
};

const StyledProject = styled(motion.div)`
  color: white;
  .center-button {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;

const StyledHeadline = styled.div`
  /* min-height: 90vh; */
  padding-top: 5vh;
  position: relative;

  h2 {
    /* position: absolute; */
    /* top: 10%; */
    /* left: 50%; */
    /* transform: translate(-50%, -10%); */
    @media (max-width: 1290px) {
      width: 300px;
      font-size: 2rem;
    }
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    /* @media (min-width: 1290px) {
      width: 100%;
      height: 70vh;
      object-fit: cover;
    } */
  }
`;

const AwardsStyle = styled.div`
  min-height: 60vh;
  display: flex;
  margin: 3rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1290px) {
    display: block;
    margin: 2rem;
  }
`;

const StyledSecondaryImage = styled.div`
  /* min-height: 50vh; */
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    /* @media (min-width: 1290px) {
      width: 100%;
      height: 70vh;
      object-fit: cover;
    } */
  }
`;

export default ProjectDetail;

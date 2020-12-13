// Router
import { useLocation } from "react-router-dom";
// Styles
import styled from "styled-components";
// Router
import { Link } from "react-router-dom";
// Animation
import { motion } from "framer-motion";
const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h3>
        <Link id="logo" to="/">
          Abhishek Shrivastava
        </Link>
      </h3>
      <ul>
        <li>
          <Link to="/">1. About Me</Link>
          <StyledLine
            initial={{ width: 0 }}
            animate={{ width: pathname === "/" ? "100%" : "0" }}
            transition={{ duration: 1 }}
          />
        </li>
        <li>
          <Link to="/work">2. My Work</Link>
          <StyledLine
            initial={{ width: 0 }}
            animate={{ width: pathname === "/work" ? "100%" : "0" }}
            transition={{ duration: 1 }}
          />
        </li>
        <li>
          <Link to="/contact">3. Contact Me</Link>
          <StyledLine
            initial={{ width: 0 }}
            animate={{ width: pathname === "/contact" ? "100%" : "0" }}
            transition={{ duration: 1 }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  margin: auto;
  min-height: 10vh;
  justify-content: space-between;
  align-items: center;
  padding: 0 7rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      margin: 2rem;
      position: relative;
    }
  }
  #logo {
    font-size: 1.5rem;
    font-weight: lighter;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
    font-family: "Lobster", sans-serif;
  }

  @media (max-width: 1290px) {
    flex-direction: column;
    padding: 2rem 0 0;
    ul {
      /* padding: 2rem; */
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
    #logo {
      display: inline-block;
      margin-top: 2rem;
    }
  }
`;
const StyledLine = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0;
  position: absolute;
  /* bottom: 10px; */
  top: 120%;
  @media (max-width: 1290px) {
    overflow-x: hidden;
  }
`;

export default Nav;

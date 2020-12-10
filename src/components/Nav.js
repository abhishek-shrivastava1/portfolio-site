// Styles
import styled from "styled-components";
// Router
import { Link } from "react-router-dom";

const Nav = () => {
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
        </li>
        <li>
          <Link to="/skills">2. My Skills</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Me</Link>
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
    font-family: "Lobster", sans-serif;
  }
`;

export default Nav;

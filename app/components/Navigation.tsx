import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  margin-right: 1rem;
  text-decoration: none;
  color: #333;
  padding: 0.5rem;

  &.active {
    font-weight: bold;
    color: #0066cc;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/form">Form</StyledLink>
      <StyledLink to="/profile">Profile</StyledLink>
    </Nav>
  );
};

export default Navigation;

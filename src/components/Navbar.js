import { Link } from "react-router-dom";

import {
  StyledNavbar,
  StyledLogo,
  StyledLinkContainer,
  StyledLogoDiv,
} from "../styles.js/Navbar.styled";

const Navbar = (props) => {
  return (
    <StyledNavbar>
      <nav className="navbar">
        <StyledLogoDiv>
          <StyledLogo src={props.logo} alt="Jessica Pohl Logo" />
        </StyledLogoDiv>
        <StyledLinkContainer>
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link> <Link to="/shop">Shop</Link>{" "}
          <Link to="/commissions">Commissions</Link>{" "}
          <Link to="/about">About</Link>
        </StyledLinkContainer>
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;

import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  ResumeLink,
} from "./NavbarElements";

import Pdf from "../../Assets/sangok-resume.pdf";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars size="35px" />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
              <NavLinks to="/projects">Projects</NavLinks>
              <NavLinks to="/blog">Blog</NavLinks>
              <ResumeLink href={Pdf} target="_blank">
                Resume
              </ResumeLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

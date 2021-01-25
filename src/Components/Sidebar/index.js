import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  ResumeLink,
} from "./SidebarElements";

import Pdf from "../../Assets/sangok-resume.pdf";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon size="40px" />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/">Home</SidebarLink>
          <SidebarLink to="projects">Projects</SidebarLink>
          <SidebarLink to="blog">Blog</SidebarLink>
          <ResumeLink href={Pdf} target="_blank">
            Resume
          </ResumeLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

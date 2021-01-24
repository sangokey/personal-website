// Add Active State on Navigation to Indicate which Page an User is in

import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: white;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: black;

    &:hover {
      color: gray;
    }
  }
`;

function NavigationBar() {
  return (
    <Styles>
      <Navbar expand="sm">
        <Nav className="m-auto">
          <Nav.Item>
            <Nav.Link href="/" activeClassName="nav-link--active">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </Styles>
  );
}

export default NavigationBar;

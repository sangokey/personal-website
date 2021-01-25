import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

function Projects({ isOpen, toggle }) {
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      Projects
    </div>
  );
}

export default Projects;

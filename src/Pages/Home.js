import React from "react";
import portrait from "../Assets/placeholder.png";
import { SiLinkedin, SiGithub } from "react-icons/si";

function Home() {
  return (
    <div className="homeHeader">
      <img src={portrait} alt="HomeImage" className="homeImage" />
      <h1 className="h1Home">SANG OK SUH</h1>
      <h2 className="h2Home">ASPIRING SOFTWARE ENGINEER</h2>
      <div className="homeAbout">About Me</div>
      <footer>
        <a href="https://www.linkedin.com/in/sangoksuh/">
          <SiLinkedin></SiLinkedin>
        </a>
        <span>&nbsp;</span>
        <a href="https://github.com/sangokey">
          <SiGithub></SiGithub>
        </a>
      </footer>
    </div>
  );
}

export default Home;

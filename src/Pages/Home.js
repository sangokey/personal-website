import React from "react";

//Image
import portrait from "../Assets/portraitv2.png";

// Navbar, sidebar
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

// Icons
import {
  SiLinkedin,
  SiGithub,
  SiPython,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiJava,
  SiReact,
  SiTableau,
  SiGit,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiCoinStack } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { TiLocation } from "react-icons/ti";

function Home({ isOpen, toggle }) {
  return (
    <div className="home">
      <header className="homeHeader">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <section className="header-section">
          <img src={portrait} alt="HomeImage" className="homeImage" />
          <h1 className="h1Home">SANG OK SUH</h1>
          <h2 className="h2Home">ASPIRING SOFTWARE ENGINEER</h2>
        </section>
      </header>
      <section className="aboutme">
        <h3>about.</h3>
        <p>
          Hi, I'm Sang Ok.
          <br />
          Full-time data analyst.
          <br />
          Part-time computer science undergraduate student.
          <br />
          On my way to become a Good Software Engineer.
        </p>
        <p>
          <TiLocation style={{ fill: "white" }} /> <br />
          Los Angeles, California
        </p>
      </section>
      <section className="skill">
        <h3>languages.</h3>
        <table>
          <tr>
            <td>
              <SiPython />
              Python
            </td>
            <td>
              <SiHtml5 />
              HTML
            </td>
          </tr>
          <tr>
            <td>
              <SiJava />
              Java
            </td>
            <td>
              <SiCss3 />
              CSS
            </td>
          </tr>
          <tr>
            <td>
              <SiJavascript />
              JavaScript
            </td>
            <td>
              <BiCoinStack />
              SQL
            </td>
          </tr>
        </table>
        <h3>technologies.</h3>
        <table>
          <tr>
            <td>
              <SiReact />
              ReactJS
            </td>
            <td>
              <SiTableau />
              Tableau
            </td>
          </tr>
          <tr>
            <td>
              <FaNodeJs />
              NodeJS
            </td>
            <td>
              <SiGit />
              Git
            </td>
          </tr>
        </table>
      </section>
      <footer>
        <h3>connect.</h3>
        <div className="footerIcons">
          <a href="mailto:sangoksuh@hotmail.com">
            <GrMail></GrMail>
          </a>
          <a href="https://www.linkedin.com/in/sangoksuh/">
            <SiLinkedin></SiLinkedin>
          </a>
          <a href="https://github.com/sangokey">
            <SiGithub></SiGithub>
          </a>
        </div>
        <p>sangoksuh@hotmail.com</p>
        <p>Copyright @ 2021 Sang Ok Suh</p>
      </footer>
    </div>
  );
}

export default Home;

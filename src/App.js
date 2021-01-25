import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

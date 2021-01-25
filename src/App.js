import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Blog from "./Pages/Blog";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home isOpen={isOpen} toggle={toggle} />
        </Route>
        <Route path="/projects">
          <Projects isOpen={isOpen} toggle={toggle} />
        </Route>
        <Route path="/blog">
          <Blog isOpen={isOpen} toggle={toggle} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

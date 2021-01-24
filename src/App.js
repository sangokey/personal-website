import React from "react";
import "./App.css";

//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Layout
import Layout from "./Components/Layout";
//Pages
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Blog from "./Pages/Blog";
import NavigationBar from "./Components/NavigationBar";

function App() {
  return (
    <Layout>
      <Router>
        <NavigationBar />
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
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;

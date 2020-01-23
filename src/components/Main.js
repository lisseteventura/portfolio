import React from "react";
import Landing from "./Landing.js";
import Aboutme from "./Aboutme.js";
import Projects from "./Projects.js";
import Resume from "./Resume.js";
import Contact from "./Contact.js";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/aboutme" component={Aboutme} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Main;

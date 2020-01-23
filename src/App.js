import React from "react";
import "./App.css";
import { Layout, Drawer, Navigation, Content, Header } from "react-mdl";
import Main from "./components/Main.js";
import { Link } from "react-router-dom";

function App() {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <Layout
        style={{
          background:
            "url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover"
        }}
      >
        <Header transparent title="Lissete Ventura" style={{ color: "white" }}>
          <Navigation>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Main />
        <Content />
      </Layout>
    </div>
  );
}

export default App;

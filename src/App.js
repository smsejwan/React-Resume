import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import arrow from './images/arrow.gif';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Welcome />
          <div className="down-arrow">
          <img src={arrow} alt="Sroll"  width="50px"/>
          </div>
        <h2 className="heading" id="about"><strong>ABOUT</strong></h2>
        <About />
        <h2 className="heading" id="projects"><strong>PROJECTS</strong></h2>
        <Projects />
        <h2 className="heading" id="about"><strong>SKILLS</strong></h2>
        <Skills />

        <h2 className="heading" id="footer"><strong>CONTACT</strong></h2>
          <Contact />

      </div>
    );
  }
}

export default App;

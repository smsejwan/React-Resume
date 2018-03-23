import React, { Component } from 'react';
import resume from '../images/React.png';
import UVPCE from '../images/UVPCE.png';
import tutorial from '../images/360-tutorial.png';
import Webelight from '../images/Webelight.png';

class Projects extends Component {
	render(){
		return(
			<div className="Projects section flex-container"> 
			<div className="item">
			    <img src={resume} className="thumb"/>
			    <div className="overlay">
				    <div className="text">
				    <h3> React Resume </h3>
				    <p><strong>My first React Project</strong></p>
	              	<p>JavaScript, React, CSS, HTML</p>
	             	<p><a href="https://github.com/smsejwan/Personal-Resume.git" target="_blank" rel="noopener noreferrer">Repo <i className="fa fa-github" aria-hidden="true"/></a></p>
	            	</div>
            	</div>
			</div>
		  <div className="item">
          <img src={Webelight} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>Webeligh Solutions</h3>
              <p><strong>Website for the company I Co-founded</strong></p>
              <p>Drupal, PHP, HTML/CSS, JS/jquery, Bootstrap UI</p>
              <p><a href="http://webelight.co.in/" target="_blank" rel="noopener noreferrer">Explore App  <i className="fa fa-external-link"></i></a></p>
              </div>
          </div>
        </div>
        <div className="item">
          <img src={UVPCE} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>College Website</h3>
              <p><strong>CMS site for my alma-matter</strong></p>
              <p>Drupal, PHP, HTML/CSS, JS/jquery</p>
              <p><a href="http://www.uvpce.ac.in/" target="_blank" rel="noopener noreferrer">Explore App  <i className="fa fa-external-link"></i></a></p>
              </div>
          </div>
        </div>
        <div className="item">
          <img src={tutorial} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>WebVR Literate Tutorial</h3>
              <p><strong>360 Gallery + Learn WebVR Tutorial</strong></p>
              <p>Afarme JS, Three.js, HTML5/CSS3, Webgl</p>
              <p><a href="https://github.com/smsejwan/360-tutorial/blob/master/ReadMe.md" target="_blank" rel="noopener noreferrer">Explore Tutorial  <i className="fa fa-external-link"></i></a></p>
              <p><a href="https://smsejwan.github.io/aframe/homepage.html" target="_blank" rel="noopener noreferrer">App<i className="fa fa-github" aria-hidden="true"/></a></p>
            </div>
          </div>
        </div>
			</div>
			);
	}
}
export default Projects;
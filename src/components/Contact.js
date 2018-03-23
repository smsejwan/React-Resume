import React, { Component } from 'react';
import gif from '../images/sm.jpg'

class Contact extends Component {
  render() {
    return (
      <div className="Footer">
      <div> </div>
        <div className="footer-1">
          <img src={gif} />
        </div>
        <div className="footer-2">
          <h3>Contact</h3>
          <p><a href="mailto:smsejwan@ncsu.edu?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/> smsejwan@ncsu.edu</a></p>
          <p><a href="https://linkedin.com/in/shalinisejwani" target="_blank" rel="noopener noreferrer" className="footer-link"><i className="fa fa-linkedin-square i-hov" aria-hidden="true"/> Linkedin</a></p>
          <p><a href="https://github.com/smsejwan" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/> Github</a></p>
          <h3>This Site</h3>
          <p>Made by <strong>Shalini Sejwani ❤️ </strong> using React, JavaScript and custom CSS</p>
          <p>Check out the repo <strong><a href="https://github.com/smsejwan/Personal-Resume.git" target="_blank" rel="noopener noreferrer">here on github</a></strong> © 2018</p>
        </div>
      </div>
    );
  }
}

export default Contact;
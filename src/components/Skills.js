import React, { Component } from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

class Skills extends Component {
	render(){
		return(
			<div className="Skills section flex-container">

				
				<h3>Languages </h3>
					<div align="center">
					<span align="center"><Progress className="skill-item overlay" percent={70}  type="circle"
					  theme={{
					    default: {
					      symbol: 'hello',
					      color: '#fbc630'
					    }
					  }} />

					  </span>
					  <h5> Java</h5>
				  </div>

				  <div align="center">
					<span align="center"><Progress className="skill-item overlay" percent={80}  type="circle"
					  theme={{
					    default: {
					      symbol: 'hello',
					      color: '#fbc630'
					    }
					  }} />

					  </span>
					  <h5> JavaScript</h5>
				  </div>

				  <div align="center">
					<span align="center"><Progress className="skill-item overlay" percent={50}  type="circle"
					  theme={{
					    default: {
					      symbol: 'hello',
					      color: '#fbc630'
					    }
					  }} />

					  </span>
					  <h5> C/C++ </h5>
				  </div>

				  <div align="center">
					<span align="center"><Progress className="skill-item overlay" percent={60}  type="circle"
					  theme={{
					    default: {
					      symbol: 'hello',
					      color: '#fbc630'
					    }
					  }} />

					  </span>
					  <h5> Python </h5>
				  </div>
				  <div align="center">
					<span align="center"><Progress className="skill-item overlay" percent={50}  type="circle"
					  theme={{
					    default: {
					      symbol: 'hello',
					      color: '#fbc630'
					    }
					  }} />

					  </span>
					  <h5> React</h5>
				  </div>



				  {"\n"}

				  <h3>Front-end</h3>
					<div align="center">
					<span align="center"><Progress className="skill-item overlay" percent={90}  type="circle"
					  theme={{
					    default: {
					      symbol: 'hello',
					      color: '#fbc630'
					    }
					  }} />

					  </span>
					  <h5> HTML5</h5>
				  </div>

				  <div align="center">
					<span align="center"><Progress className="skill-item overlay" percent={80}  type="circle"
					  theme={{
					    default: {
					      symbol: 'hello',
					      color: '#fbc630'
					    }
					  }} />

					  </span>
					  <h5> CSS3</h5>
				  </div>

				  <div align="center">
					<span align="center"><Progress className="skill-item overlay" percent={50}  type="circle"
					  theme={{
					    default: {
					      symbol: 'hello',
					      color: '#fbc630'
					    }
					  }} />

					  </span>
					  <h5> jquery </h5>
				  </div>

				  <div align="center">
					<span align="center"><Progress className="skill-item overlay" percent={50}  type="circle"
					  theme={{
					    default: {
					      symbol: 'hello',
					      color: '#fbc630'
					    }
					  }} />

					  </span>
					  <h5> React </h5>
				  </div>

				  <div align="center">
					<span align="center"><Progress className="skill-item overlay" percent={60}  type="circle"
					  theme={{
					    default: {
					      symbol: 'hello',
					      color: '#fbc630'
					    }
					  }} />

					  </span>
					  <h5> Angular </h5>
				  </div>

				  <br/>


			</div>
		)
	}
}

export default Skills
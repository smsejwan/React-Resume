import React, { Component } from 'react';
import {CLIENT_ID,CLIENT_SECRET} from '../secret.js'

class Welcome extends Component {
	state = {
    	current: 'none'
  	}

  	fetchWeather = () => {
  		return fetch(`http://api.aerisapi.com/observations/80003?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`).
  		then((res)=>res.json())
  	}

  componentDidMount = () => {
    this.fetchWeather()
    .then((json) => {
      json.success ? this.setState({ current: json.response.ob }) : null
    })
  }

  formatCurrentWeather = (currentWeather) => {
    let current = ''
    if (currentWeather.toLowerCase().charAt(currentWeather.length-1) === 'y') {
      current = currentWeather.toLowerCase() + ' '
    } else if (currentWeather.toLowerCase() === 'clear') {
      current = 'cloudless '
    } else if (currentWeather.toLowerCase() === 'freezing fog') {
      current = 'freezing '
    } else if (currentWeather.toLowerCase().charAt(currentWeather.length-1) === 'g') {
      current = currentWeather.toLowerCase() + 'gy '
    } else {
      current = currentWeather.toLowerCase() + 'y '
    }
    return current
  }

  importAll = (r) => {
    let icons = {};
    r.keys().map((item, index) => { icons[item.replace('./', '')] = r(item); });
    return icons;
  }



  	render(){
  		console.log(this.state.current)
	    const icons = this.importAll(require.context('../images/icons', false, /\.(png|jpe?g|svg)$/));
	    let currentWeather = '🌃'
	    this.state.current === 'none' ? null : currentWeather = this.formatCurrentWeather(this.state.current.weatherPrimary)

  		return <div className="Welcome section">

        <h1 className="welcome-intro"><strong>Shalini Sejwani</strong> is a <strong>full stack web developer</strong>&<strong> a great person</strong> living in {currentWeather}<img src={icons[this.state.current.icon]} alt='' className='weatherIcon'/>Denver,CO 
        <br/>
        <br/>
          <a href="https://linkedin.com/in/shalinisejwani" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square i-hov" aria-hidden="true"/></a>  <a href="https://github.com/smsejwan" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/></a>  <a href="mailto:smsejwan@ncsu.edu?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/></a>
        <br/>
          <a href="https://drive.google.com/file/d/1vsSlxf_eY3qPuRrV29F6D0zEp2QO80kg/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="button resume-button">Resume <i className="fa fa-file-pdf-o" aria-hidden="true"/></button></a>


        </h1>
        <img src={require('../images/me.jpg')} className="main-pic" alt-text="Shalini's Picture"/>
      
  		</div>
  	}



}
export default Welcome;


/* `http://api.aerisapi.com/observations/80003?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
*/
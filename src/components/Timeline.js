import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Timeline extends Component{
	render(){
		return(
			<div>
			<VerticalTimeline>
  			<VerticalTimelineElement className="vertical-timeline-element--work" 
  			date="2011 - present" iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} icon={<WorkIcon />}>
    		<h3 className="vertical-timeline-element-title">Creative Director</h3>
    		<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
		    <p>
		      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
		    </p>
 			 </VerticalTimelineElement>
 			 </VerticalTimeline>

			</div>

			)
	}


}

export default Timeline;
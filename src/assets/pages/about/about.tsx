import './about.css'
import "bootstrap/dist/css/bootstrap.css"
// import { useState } from 'react'
// import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function PAbout() {

  return (
    <>
	<div className="container">
        <p className="fs-1 fw-bold text-decoration-underline">About Me</p>
	</div>
	<br/>
	<div className="container bg-dark fs-4">
        <h1 className="fs-1">Introductions</h1>
    	<p>Hi, my name is Daniel Byrd. I'm an Engineer and Data Analyst with a strong foundation in full-stack development, data engineering, and workflow automation. I build solutions with modern technologies including React, Python, and automation tools such as Zapier, and I'm passionate about creating scalable systems that improve efficiency and enable data-driven decision making.</p>
		<p>In addition to engineering, I bring experience in technical support, where I resolved thousands of issues across enterprise systems and developed tools that streamlined operations. This background gives me a unique perspective on both building and supporting the technologies that organizations rely on.</p>
	</div>
	<br/>
	<div className="container bg-dark fs-4">
        <h1>Skills</h1>
		<ul className="list-unstyled">
			<li className="fs-3 text-decoration-underline">Core Engineering & Development</li>
			<ul>
				<li>Python (Advanced): Built multiple projects including API integrations, handling complex JSON payloads, and data workflows</li>
				<li>SQL / Snowflake: Query optimization, data modeling, and analytics integration</li>
				<li>React, TypeScript, JavaScript (Basic): Frontend development experience for full-stack projects</li>
				<li>AI Development: Implemented image recognition and explored applied AI solutions</li>
			</ul>
			<li><br/></li>
			<li className="fs-3 text-decoration-underline">Workflow Automation & Data Tools</li>
			<ul>
				<li>Zapier: Designing and maintaining workflow automation</li>
				<li>Looker & Amplitude: Data analysis, visualization, and product metrics</li>
				<li>Incident.IO, Gladly, ServiceNow: Incident management and support optimization</li>
				<li>Datadog (Certified): Monitoring with StatsD metrics</li>
			</ul>
			<li><br/></li>
			<li className="fs-3 text-decoration-underline">Collaboration & Productivity</li>
			<ul>
				<li>Slack, Notion, Microsoft Teams: Team communication, knowledge management, and documentation</li>
				<li>Super.com: Familiarity with product offerings and customer experience</li>
			</ul>
			<li><br/></li>			
			<li className="fs-3 text-decoration-underline">Engineering Practices & Tooling</li>
			<ul>
				<li>Git & GitLab: Version control and collaborative development</li>
				<li>VS Code, Cursor, Coder: Leveraging AI-powered development environments (Cursor, ChatGPT)</li>
				<li>Strong ability to conduct deep dives into complex issues by integrating multiple tools and perspectives</li>
			</ul>
			
		</ul>
	</div>
	<br/>
	<div className="container bg-dark fs-4">
        <h1 className="fs-1">Work History</h1>
        <ul className="list-unstyled">
			<li className="fs-3 text-decoration-underline">Service Desk Analyst (Pomeroy)</li>
			<li>January 2020 - October 2023</li>
			<ul>
				<li>Resolved over 10,000+ technical issues for UMB Bank, boosting client satisfaction and maintaining high SLA compliance</li>
				<li>Developed an incident documentation tool that automated work note creation, reducing ticket resolution time by 15%</li>
				<li>Provided technical support for operating systems, proprietary software, and custom applications</li>
			</ul>
			<li><br/></li>
			<li className="fs-3 text-decoration-underline">Computer Programmer Intern (Budget Ninjas)</li>
			<li>June 2018 - October 2019</li>
			<ul>
				<li>Assisted in modernizing company website using ASP.NET and C#, enhancing user interface and backend efficiency</li>
				<li>Designed and implemented SSRS reports to streamline operational data access and improve decision-making</li>
			</ul>
			<li><br/></li>			
		</ul>
	</div>
    </>
  )
}

export default PAbout
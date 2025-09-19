import './navigation.css'
import "bootstrap/dist/css/bootstrap.css"
import { Link } from 'react-router-dom';
// import { useState } from 'react'
// import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function PNavigation() {

  return (
    <>
		<div className="container-fluid px-4 py-5 my-5 text-center">
			<div className="lc-block d-block mx-auto mb-4">
				<img className="img-header" src="./images/Profile1.jpg" />
				
			</div>

			<br/>

			<div className="lc-block">
				<div>
					<h2 className="display-4 fw-bold">Daniel Byrd</h2>
				</div>
			</div>

			<div className="lc-block">
				<div>
					<h2 className="fs-3 fw-bold">Software Engineer, Data Analyst, Help Desk Support</h2>
				</div>
			</div>	
					
			<br/>

			<div className="lc-block">
				<div>
					<h2 className="display-5">Welcome to my portfolio!</h2>
				</div>
			</div>

			<div className="lc-block  mx-auto mb-4">
				<div>
					<p className="lead fs-4">Here you can see my professional history, look through several of the projects I have worked on over the years, explore how those projects fit into the overall timeline of events for me, and even browse resumes custom fitted for different jobs.</p>
				</div>
			</div>

			<div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center">
				<Link className="btn btn-outline-primary btn-lg px-4 gap-3 fs-1" to={"/about"}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
						<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
					</svg>
					About
				</Link>
				<Link className="btn btn-outline-info btn-lg px-4 gap-3 fs-1" to={"/projects"}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-kanban" viewBox="0 0 16 16">
						<path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
						<path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"/>
					</svg>
					Projects
				</Link>
				<Link className="btn btn-outline-primary btn-lg px-4 gap-3 fs-1" to={"/timeline"}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
						<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
					</svg>
					Timeline
				</Link>
				<Link className="btn btn-outline-info btn-lg px-4 gap-3 fs-1" to={"/resume"}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-pdf" viewBox="0 0 16 16">
						<path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
						<path d="M4.603 14.087a.8.8 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.7 7.7 0 0 1 1.482-.645 20 20 0 0 0 1.062-2.227 7.3 7.3 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a11 11 0 0 0 .98 1.686 5.8 5.8 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.86.86 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.7 5.7 0 0 1-.911-.95 11.7 11.7 0 0 0-1.997.406 11.3 11.3 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.8.8 0 0 1-.58.029m1.379-1.901q-.25.115-.459.238c-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361q.016.032.026.044l.035-.012c.137-.056.355-.235.635-.572a8 8 0 0 0 .45-.606m1.64-1.33a13 13 0 0 1 1.01-.193 12 12 0 0 1-.51-.858 21 21 0 0 1-.5 1.05zm2.446.45q.226.245.435.41c.24.19.407.253.498.256a.1.1 0 0 0 .07-.015.3.3 0 0 0 .094-.125.44.44 0 0 0 .059-.2.1.1 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a4 4 0 0 0-.612-.053zM8.078 7.8a7 7 0 0 0 .2-.828q.046-.282.038-.465a.6.6 0 0 0-.032-.198.5.5 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822q.036.167.09.346z"/>
					</svg>
					Resume
				</Link>
			</div>
			
			<br/>
			<br/>
			<br/>
			<br/>

			<div className="lc-block  mx-auto mb-4">
				<div>
					<p className="lead fs-4">Built using React and Bootstrap.</p>
				</div>
			</div>
		</div>
    </>
  )
}

export default PNavigation
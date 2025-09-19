import "bootstrap/dist/css/bootstrap.css"
import {NavLink, Link} from 'react-router-dom';
import { Outlet } from 'react-router-dom'

function NavBar() {


	return (
	<>
		<nav className="navbar sticky-top navbar-expand-lg navbar-inverse">
			<div className="container-fluid">
				<div className="navbar-header">
					<p className="navbar-text fs-1"><Link to={"/"} className="link-underline-dark">Daniel Byrd</Link></p>
				</div>
				<ul className="nav navbar-nav">
					<li><p className="navbar-text fs-3 text-light">(864) 363-7021</p></li>
					<li><p className="navbar-text fs-3 text-light">daniel.byrd1999@gmail.com</p></li>
					<li><p className="navbar-text fs-3 text-light"><a className="text-decoration-underline" href="https://www.linkedin.com/in/daniel-byrd-090004170/">Find me on LinkedIn</a></p></li>
				</ul>
				<ul id="/navBarLink" className="nav navbar-nav navbar-right fs-3">
					<li id="/about" className="nav-item"><NavLink to={"/about"} className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>About</NavLink></li>
					<li id="/projects" className="nav-item"><NavLink to={"/projects"} className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>Projects</NavLink></li>
					<li id="/timeline" className="nav-item"><NavLink to={"/timeline"} className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>Timeline</NavLink></li>
					<li id="/resume" className="nav-item"><NavLink to={"/resume"} className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>Resume</NavLink></li>
				</ul>
			</div>
		</nav>
		<main>
			<Outlet />
		</main>
	</>
  )
}

export default NavBar
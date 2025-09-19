import './App.css'
import "bootstrap/dist/css/bootstrap.css"
// import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './assets/components/navbar/navbar'
import PAbout from './assets/pages/about/about'
import PResume from './assets/pages/resume/resume'
import PTimeline from './assets/pages/timeline/timeline'
import PProjects from './assets/pages/projects/projects'
import PNavigation from './assets/pages/navigation/navigation'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PNavigation />} /> 
          <Route element={<NavBar />}>
            <Route path="/about" element={<PAbout />} />
            <Route path="/projects" element={<PProjects />} />
            <Route path="/timeline" element={<PTimeline />} />
        	<Route path="/resume" element={<PResume />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
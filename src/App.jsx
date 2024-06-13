import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProjectsContext } from '../src/pages/Projectcontext'; // Assurez-vous que le chemin d'importation est correct

import Home from "./pages/Home";
import Error from "./pages/Error";
import Projects from './pages/Projects';
import ProjectDetails from '../src/components/ProjectDetails';
import projectsData from '../src/about.json';

const App = () => {


  return (
    <ProjectsContext.Provider value={projectsData}>
      <Router>
        <Routes>
          <Route path="/P12_Portfolio/" element={<Home />} />
          <Route path="/P12_Portfolio/projects" element={<Projects />} />
          <Route path="/P12_Portfolio/projects/:id" element={<ProjectDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </ProjectsContext.Provider>
  );
}

export default App;
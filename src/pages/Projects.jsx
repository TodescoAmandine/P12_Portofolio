import React, { useContext } from 'react';
import { ProjectsContext } from '../pages/Projectcontext';
import Navigation from '../components/Navigation';




const Projects = () => {
  const { id } = useParams();//useParams est un hook qui permet de récupérer les paramètres de l'URL
  const projectsData = useContext(ProjectsContext);//useContext est un hook qui permet de récupérer les données du contexte
  const project = projectsData.find(project => project.id === id);//On récupère le projet qui correspond à l'id

  return (
    <div >
      <Navigation />
      <ProjectDetails project={project} />
    </div>
  );
};

export default Projects;
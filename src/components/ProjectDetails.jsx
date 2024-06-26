import React from 'react';
import projectsData from '../about.json';
import { useParams } from 'react-router-dom';
import IconeGit from '../assets/img/Octicons-mark-github.png';
import { Link } from 'react-router-dom';
import Error404 from '../components/Error404'; 


const ProjectDetails = () => {
    const { id } = useParams();//useParams est un hook qui permet de récupérer les paramètres de l'URL
    const project = projectsData.find(project => project.id === id);//On récupère le projet qui correspond à l'id

    if (!project) {
        return <Error404 />; 
      }

    const { image_details, title, url, content, tags } = project;

    return (
        <div id='details_page'>
        <div className='projectdetails__container'>
        <Link className='button' to="/">
    <i id='arrow__back' className="fa-solid fa-arrow-up"></i>Retour
</Link>
        <img className='projectdetails__image' src={image_details} alt="" />
            <div className='projectdetails__content'>
            
                    <h3 className='projectdetails__content--title'>{title}</h3>
               
                    <div className='projectdetails__contents'> 
                    <p className='projectdetails__content--p'>{content}</p>
                    <div className='projectdetails__links'>
                        <p >
                            <a className='projectdetails__content--link' href={url} target='_blank'> Voir sur Github <i className="fa-solid fa-arrow-up"></i>
                            </a>
                        </p>
                        <a href={url} target='_blank'>
                        <img className='projectdetails__content--git' src={IconeGit} alt="" />
                        </a>
                        </div>
                        
                  </div>
                  <div className='projectdetails_content--tags'>
                    {tags.split(', ').map((tag, index) => (
                        <button key={index} className='tag-button'>
                        {tag}
                        </button>
                    ))}
                    </div>
            </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
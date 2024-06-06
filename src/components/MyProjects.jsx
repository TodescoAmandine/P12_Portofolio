import React from 'react';
import Card from './Card';
import CardGrid from './CardGrid';

const MyProjects = () => {
    return (
        
        <section id='projects' className='projects__container'>        
            <div className='projects__content'>
                <h2 className='projects__content--title'>Mes Projets</h2>
                <p className='projects__content--p'>Voici quelques projets que j'ai réalisés lors de ma formation avec OpenClassroom. J'ai plaisir à vous les présenter car chacun d'entre eux m'a permis de développer et d'améliorer mes compétences.</p>
            </div>
            <div className='projects__cards'>
              <CardGrid />
            </div>
        </section>
    );
};

export default MyProjects;
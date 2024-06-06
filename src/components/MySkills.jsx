import React from 'react';
import html from '../assets/img/HTML5_logo_and_wordmark.png';
import css from '../assets/img/CSS3_logo_and_wordmark.png';
import sass from '../assets/img/768px-Sass_Logo_Color.png';
import js from '../assets/img/JavaScript-logo.png';
import reactapp from '../assets/img/React-icon.png';
import redux from '../assets/img/redux.svg';
import git from '../assets/img/Octicons-mark-github.png';


const MySkills = () => {
    return (
        <section id='skills'>
            <div>
                <h2 className='skills__content--title' >My Skills</h2>
                <p className='skills__content--p'>Lors de ma formation avec OpenClassroom, j'ai acquis diverses compétences liées au développement de sites Web. Je maîtrise la création de sites Web à partir de zéro et l'utilisation de frameworks tels que React. De plus, j'ai de l'expérience dans l'utilisation de préprocesseurs comme Sass, de systèmes de contrôle de version comme Git, de gestionnaires de packages comme npm et de bundlers de modules comme Webpack. Dans l’ensemble, je dispose d’un ensemble de compétences complètes qui me permettent de créer efficacement des sites Web de haute qualité.
                   </p>
                   <div id='skills_container--icones'> 
                   <img className='skills--icones' src={html} alt="" />
                   <img className='skills--icones' src={css} alt="" />
                   <img className='skills--icones' src={sass} alt="" />
                   </div>
                   <div id='skills_container--icones'> 
                   <img className='skills--icones' src={js} alt="" />
                   <img className='skills--icones' src={reactapp} alt="" />
                   <img className='skills--icones' src={redux} alt="" />
                   </div>
                   <div id='skills_container--icones'> 
                   <img className='skills--icones' src={git} alt="" />
                   </div>
            </div>
        </section>
    );
};

export default MySkills;
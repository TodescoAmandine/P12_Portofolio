import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const [activeLink, setActiveLink] = useState('');//useState() est un hook qui permet d'ajouter l'état à un composant fonctionnel

    const handleClick = (e) => {
        setActiveLink(e.target.name);//On met à jour l'état activeLink avec le nom de l'élément cliqué
    };

    return (
        <div className='navigation'>
            <ul className='navigation__ul'>
                <li className='navigation__li'>
                    <a href="#hero" className={activeLink === 'hero' ? "nav-active" : ""} onClick={() => handleClick({name: 'hero'})}>
                        Home
                    </a>
                </li>
                <li className='navigation__li'>
                    <a href="#projects" className={activeLink === 'projects' ? "nav-active" : ""} onClick={() => handleClick({name: 'projects'})}>
                        Mes projets
                    </a>
                </li>
                <li className='navigation__li'>
                    <a href="#skills" className={activeLink === 'skills' ? "nav-active" : ""} onClick={() => handleClick({name: 'skills'})}>
                        Skills
                    </a>
                </li>
                <li className='navigation__li'>
                    <a href="#footer" className={activeLink === 'footer' ? "nav-active" : ""} onClick={() => handleClick({name: 'footer'})}>
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
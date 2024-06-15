import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';


import aboutData from '../about.json'; 

const CardGrid = () => {
    const navigate = useNavigate();

    const handleCardClick = (data) => {
        navigate(`/projects/${data.id}`);// Data.id est l'identifiant de chaque projet dans le fichier about.json, pour pouvoir afficher les détails de chaque projet
    };
    console.log(aboutData);
    return (
        <div className='cards__container'>
            {aboutData.map((data, index) => (
                <Card key={index} image={data.image} title={data.title} content={data.short_content} tags={data.tags} onClick={() => handleCardClick(data)} />
            ))}
        </div>
    );
};

export default CardGrid;
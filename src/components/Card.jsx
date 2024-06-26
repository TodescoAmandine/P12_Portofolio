import React from 'react';
import IconeGit from '../assets/img/Octicons-mark-github.png';


const Card = ({ image, title, content, tags,url, onClick }) => {
    return (
        <div className='card' onClick={onClick}>
            <img className='card__image' src={image} alt="" />
            <div className='card__content'>
                <div> 
                    <h3 className='card__content--h3'>{title}</h3>
                        <p className='card__content--p'>{content}</p>
                </div>
                <div className='card__content--links'>  
                <div>  
                    <p className='card__content--link'>Plus en détail <i className="fa-solid fa-arrow-up"  ></i></p></div>
                    <div>  
                    </div>
                </div>
                    <p className='cards_content--tags'>{tags}</p>
            </div>
        </div>
    );
};

export default Card;
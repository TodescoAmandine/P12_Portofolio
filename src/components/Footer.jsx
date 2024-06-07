import React from 'react';
import amandine from '../assets/img/profile.png';

const Form = () => {
    return (
        <div id="footer">
            <h2 className='footer__title'>
            <a href="mailto:todescoamandine@gmail.com">Contactez moi pour vos nouveaux projets!</a></h2>
            <img className='footer_img' src={amandine} alt="" />          
        </div>
    );
};

export default Form;
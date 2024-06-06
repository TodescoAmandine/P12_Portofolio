import React from 'react';
import amandine from '../assets/img/profile.png';
 import imagecontact from '../assets/img/daniel-apodaca-NwCIEX2UIL0-unsplash.jpg';

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        // emailjs.sendForm('', '', event.target, '')
        // .then((result) => {
        //     console.log(result.text);
        //     event.target.reset();
        //     alert('Message envoyé !');
        // }, (error) => {
        //     console.log(error.text);
        //     alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
        // });
    };

    return (
        <div id="footer">
            <h2 className='footer__title'>
            <a href="mailto:todescoamandine@gmail.com">Contactez moi pour vos nouveaux projets!</a></h2>
            <img className='footer_img' src={amandine} alt="" />
            <p className='footer_email'>
                
            </p>            {/* <img className='footer_image' src={imagecontact} alt="" /> */}

{/* <form className='form__contenair' onSubmit={handleSubmit}>
  <label className='form__title' htmlFor="user_name">Name:</label>
  <input className='form__mail' type="text" id="user_name" name="user_name" required />

  <label className='form__title' htmlFor="user_email">Email:</label>
  <input className='form__mail' type="email" id="user_email" name="user_email" required />

  <label className='form__title' htmlFor="message">Message:</label>
  <textarea className='form__message' id="message" name="message" required />

  <button className='form__button' type="submit">Envoyer</button>
</form> */}
        </div>
    );
};

export default Form;
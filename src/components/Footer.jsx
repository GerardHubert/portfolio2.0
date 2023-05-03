import React from 'react';
import { useState } from 'react';
import '../styles/footer.css';

function Footer(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailErrors] = useState(null);
  const [contentError, setContentErrors] = useState(null);

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <section className="contact-form-container">
          <form className="contact-form">
            <div className="name-widget">
              <label className='name-label' htmlFor="name">votre nom</label>
              <input onChange={handleChange} type="text" name="name" id="name" className="name-input" />
            </div>
            <div className="email-widget">
              <label htmlFor="email" className="email-label">votre adresse mail</label>
              <input onChange={handleChange} type="email" name="email" id="email" className="email-input" />
            </div>
            <div className="content-widget">
              <label htmlFor="content" className="content-label">votre message</label>
              <textarea onChange={handleChange} name="content" id="content" cols="30" rows="10" className="textarea"></textarea>
            </div>
            <div className="controls">
              <button id='cancel' onClick={handleClick} className="cancel-button">annuler</button>
              <button type='submit' id='send' onClick={handleClick} className="send-button">envoyer</button>
            </div>
          </form>
        </section>
        <aside className="aside-container">
          <div className="coordonates-container">
            <div className="location-wrapper">
              <i className="fa-solid fa-location-dot"></i>
              <span className="location-content">graveson - france</span>
            </div>
          </div>
          <div className="mail-container">
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:gerard.hubert@mail.fr">ecrivez-moi directement</a>
          </div>
        </aside>
      </div>
    </footer>
  );

  function handleChange(e) {
    // sélectionner le label de l'input qui a le focus
    const label = e.target.offsetParent.children[0];

    //enregistrer les input
    switch (e.target.id) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'content':
        setContent(e.target.value);
        break;
      default:
        break
    }

    // on modifie le label
    if (e.target.value !== '') {
      label.classList.add('hide-label')
    };
    if (e.target.value === '') {
      label.classList.remove('hide-label')
    }
  }

  function handleClick(e) {
    switch (e.target.id) {
      case 'cancel':
        setName('');
        setEmail('');
        setContent('');
        break;
      case 'send':
        e.preventDefault();
        console.log(validation());
        break;
      default:
        break;
    }
  }

  function validation() {
    const nameExpr = /^[a-zéèçàâäêëîïôöòûüùñ]?[\s?\-?a-zéèçàâäêëîïôöòûüùñ]+?$/g;
    const emailExpr = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;
    const contentExpr = /[*$<>*/\\#]{1,}/g;

    if (nameExpr.test(name) === false) {
      setNameError('nom invalide');
    }
  }
}

export default Footer;
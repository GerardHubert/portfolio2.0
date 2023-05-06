import React, { useEffect } from 'react';
import { useState } from 'react';
import '../styles/footer.css';

function Footer(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [contentError, setContentError] = useState(null);

  return (

    <footer className="footer-section">
      <div className="footer-container">
        <section className="contact-form-container">
          <form className="contact-form">
            <div className="name-widget">
              <label className='name-label' htmlFor="name">votre nom</label>
              <input onChange={handleChange} type="text" name="name" id="name" className="name-input" />
              {nameError === true && nameError !== null ? <span className='invalid'>x</span> : null}
              {nameError === false && nameError !== null ? <i className="fa-solid fa-circle-check valid"></i> : null}
            </div>
            <div className="email-widget">
              <label htmlFor="email" className="email-label">votre adresse mail</label>
              <input onChange={handleChange} type="email" name="email" id="email" className="email-input" />
              {emailError === true && emailError !== null ? <span className='invalid'>x</span> : null}
              {emailError === true && emailError !== null ? <i className="fa-solid fa-circle-check valid"></i> : null}
            </div>
            <div className="content-widget">
              <label htmlFor="content" className="content-label">votre message</label>
              <textarea onChange={handleChange} name="content" id="content" cols="30" rows="10" className="textarea"></textarea>
              {contentError === true && contentError !== null ? <span className='invalid'>x</span> : null}
              {contentError === true && contentError !== null ? <i className="fa-solid fa-circle-check valid"></i> : null}
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
        nameValidation(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        emailValidation(e.target.value);
        break;
      case 'content':
        setContent(e.target.value);
        contentValidation(e.target.value);
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
        console.log('vérifier les validations et envoyer le message');
        break;
      default:
        break;
    }
  }

  function nameValidation(input) {
    const nameExpr = /^[a-zéèçàâäêëîïôöòûüùñ]?[\s?\-?a-zéèçàâäêëîïôöòûüùñ]+?$/g;
    nameExpr.test(input) === false ? setNameError(true) : setNameError(false);
    if (input === '') {
      setNameError(null);
    }
  }

  function emailValidation(input) {
    const emailExpr = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;
    emailExpr.test(input) === false ? setEmailError(true) : setEmailError(false);
    if (input === '') {
      setEmailError(null);
    }
  }
  function contentValidation(input) {
    const contentExpr = /[*$<>*/\\#]{1,}/g;
    contentExpr.test(input) === true ? setContentError(true) : setContentError(false);
    if (input === '') {
      setContentError(null)
    }
  }
}

export default Footer;
import React, { useEffect } from 'react';
import { useState } from 'react';
import '../styles/footer.css';

function Footer(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  // error initialisée à null, puis true ou false
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [contentError, setContentError] = useState(null);

  // confirmation ou echec de l'envoi de l'email
  const [mailStatusCode, setMailStatusCode] = useState(null);
  const [mailStatusMessage, setMailStatusMessage] = useState(null);

  return (

    <footer className="footer-section">
      <div className="footer-container">
        <section className="contact-form-container">
          <form className="contact-form">
            <div className="name-widget">
              <label className='name-label' htmlFor="name">votre nom</label>
              <input onChange={handleChange} type="text" name="name" id="name" className="name-input" value={name} />
              {nameError === true && nameError !== null && name !== '' ? <span className='invalid'>x</span> : null}
              {nameError === false && nameError !== null && name !== '' ? <i className="fa-solid fa-circle-check valid"></i> : null}
            </div>
            <div className="email-widget">
              <label htmlFor="email" className="email-label">votre adresse mail</label>
              <input onChange={handleChange} type="email" name="email" id="email" className="email-input" value={email} />
              {emailError === true && emailError !== null && email !== '' ? <span className='invalid'>x</span> : null}
              {emailError === false && emailError !== null && email !== '' ? <i className="fa-solid fa-circle-check valid"></i> : null}
            </div>
            <div className="content-widget">
              <label htmlFor="content" className="content-label">votre message</label>
              <textarea onChange={handleChange} name="content" id="content" cols="30" rows="10" className="textarea" value={content}></textarea>
              {contentError === true && contentError !== null && content !== '' ? <span className='invalid'>x</span> : null}
              {contentError === false && contentError !== null && content !== '' ? <i className="fa-solid fa-circle-check valid"></i> : null}
            </div>
            <div className="controls">
              <button id='cancel' onClick={handleClick} className="cancel-button">annuler</button>
              <button type='submit' id='send' onClick={handleClick} className="send-button">envoyer</button>
            </div>
          </form>
        </section>
        <aside className="aside-container">
          {mailStatusCode === 201 ?
            <span className='mail-confirm-success'>Le message a bien été envoyé</span> :
            null}
          {mailStatusCode === 501 ?
            <span className='mail-confirm-failure'>Désolé, une erreur est survenue</span> :
            null}
          <div className="location-aside-wrapper">
            <div className="coordonates-container">
              <i className="fa-solid fa-location-dot"></i>
              <span className="location-content">graveson - france</span>
            </div>
            <div className="mail-container">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:gerard.hubert@mail.fr">ecrivez-moi directement</a>
            </div>
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
    e.preventDefault();

    switch (e.target.id) {
      case 'cancel':
        resetForm();
        break;
      case 'send':
        if (nameError === false && emailError === false && contentError === false) {
          sendEmail();
        }
        break;
      default:
        break;
    }
  }

  // on communique avec la partie server pour l'envoi du mail
  async function sendEmail() {

    // on récupère les données du formulaire
    const message = {
      name: name,
      email: email,
      content: content
    }

    // on configure la requête post
    const response = await fetch('/sendmail', {
      method: 'post',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(message)
    });
    const data = await response.json();
    console.log(data.status);
    setMailStatusCode(data.status);

    // si le mail est bien envoyé on reset de le formulaire
    if (data.status === 201) {
      resetForm();
    }

  }

  function resetForm() {
    setName('');
    setEmail('');
    setContent('');
  }

  function nameValidation(input) {
    const nameExpr = /^[a-zéèçàâäêëîïôöòûüùñ]?[\s?\-?a-zéèçàâäêëîïôöòûüùñ]+?$/g;
    nameExpr.test(input.toLowerCase()) === false ? setNameError(true) : setNameError(false);
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
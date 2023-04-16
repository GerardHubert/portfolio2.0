import React from 'react';
import githubLogo from '../images/github.png';
import linkedinLogo from '../images/linkedin.png';
import emailLogo from '../images/mail.png';
import avatar from '../images/avatar.svg';
import '../styles/navbar.css';

function Navbar(props) {
  return (
    <nav>
      <img src={avatar} alt="avatar de gérard" />
      <div className="navlist">
        <div className="nav-item">
          <span className="nav-link">A propos de moi</span>
          <div className="arrow"></div>
        </div>
        <div className="nav-item">
          <span className="nav-link">Compétences</span>
          <div className="arrow"></div>
        </div>
        <div className="nav-item">
          <span className="nav-link">Portfolio</span>
          <div className="arrow"></div>
        </div>
        <div className="nav-item">
          <span className="nav-link">Contact</span>
          <div className="arrow"></div>
        </div>
      </div >
      <div className="network">
        <a href="https://www.linkedin.com/in/g%C3%A9rard-hubert-ab6213206/" target="_blank" rel="noopener noreferrer">
          <img className='network-logo' src={linkedinLogo} alt="logo de linkedin" />
        </a>
        <a href="https://github.com/GerardHubert" target="_blank" rel="noopener noreferrer">
          <img className='network-logo' src={githubLogo} alt="logo de gitHub" />
        </a>
        <a href="mailto:gerard.hubert@mail.fr">
          <img className='network-logo' src={emailLogo} alt="logo d'enveloppe" />
        </a>
      </div >
    </nav >
  );
}

export default Navbar;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import githubLogo from '../images/github.png';
import linkedinLogo from '../images/linkedin.png';
import emailLogo from '../images/mail.png';
import avatar from '../images/avatar.svg';
import '../styles/navbar.css';

function Navbar(props) {
  const location = useLocation();

  return (
    <nav>
      <img src={avatar} alt="avatar de gérard" />
      <div className="navlist">
        <Link to="/" className="nav-item">
          <span className="nav-link">A propos de moi</span>
          {location.pathname === '/' ? <div className="arrow"></div> : null}
        </Link>
        <Link to='/skills' className="nav-item">
          <span className="nav-link">Compétences</span>
          {location.pathname === '/skills' ? <div className="arrow"></div> : null}
        </Link>
        <Link to='/portfolio' className="nav-item">
          <span className="nav-link">Portfolio</span>
          {location.pathname === '/portfolio' ? <div className="arrow"></div> : null}
        </Link>
        <div className="nav-item">
          <span className="nav-link">Contact</span>
          {location.pathname === '/contact' ? <div className="arrow"></div> : null}
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
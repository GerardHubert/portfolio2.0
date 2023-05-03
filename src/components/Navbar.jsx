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
        <Link id='home' to="/" className={location.pathname === '/' ? ' nav-item nav-item-active' : 'nav-item'}>
          <span className="nav-link">A propos de moi</span>
        </Link>
        <Link id='skills' to='/skills' className={`nav-item ${location.pathname === '/skills' ? 'nav-item-active' : null}`} >
          <span className="nav-link">Compétences</span>
        </Link>
        <Link id='portfolio' to='/portfolio' className={`nav-item ${location.pathname === '/portfolio' ? 'nav-item-active' : null}`}>
          <span className="nav-link">Portfolio</span>
        </Link>
        <Link id='contact' to='/contact' className={`nav-item ${location.pathname === '/contact' ? 'nav-item-active' : null}`}>
          <span className="nav-link">Contact</span>
        </Link>
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
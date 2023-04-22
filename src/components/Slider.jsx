import React, { useState, useEffect } from 'react';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';
import '../styles/slider.css';

function Slider(props) {

  useEffect(() => {
    setInterval(() => {
      next()
    }, 5000);
  })

  const [positions, setPositions] = useState([1, 2, 3]);

  return (
    <div className="slider-section">
      <div className="slider-container">
        <div className={`one-slide slide${positions[0]}`} id='slide1'>
          <img src={slide1} className="slide" alt="illustration d'ordinateur" />
          <span className="slide-text">Front-end et développement d'interface utilisateur, single page application</span>
        </div>
        <div className={`one-slide slide${positions[1]}`} id='slide2'>
          <img src={slide2} className="slide" alt="illustration d'ordinateur" />
          <span className="slide-text">Back-end et développement full-stack d'applications dynamiques avec bases de données</span>
        </div>
        <div className={`one-slide slide${positions[2]}`} id='slide3'>
          <img src={slide3} className="slide" alt="illustration d'ordinateur" />
          <span className="slide-text">Responsive: applications adaptés aux écrans mobiles</span>
        </div>
        <div className="slider-controls">
          <i onClick={handleClick} id='previous-slide' className="fa-solid fa-chevron-up"></i>
          <i onClick={handleClick} id='next-slide' className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );

  function handleClick(e) {
    e.target.id === 'next-slide' ? next() : previous();
  }

  function next() {
    const newPositions = [];
    for (const position of positions) {
      let newPosition = position - 1;
      newPosition < 1 ? newPosition = 3 : newPosition = position - 1;
      newPositions.push(newPosition);
    }
    setPositions(newPositions);
  }

  function previous() {
    const newPositions = [];
    for (const position of positions) {
      let newPosition = position + 1;
      newPosition > 3 ? newPosition = 1 : newPosition = position + 1;
      newPositions.push(newPosition);
    }
    setPositions(newPositions);
  }

}

export default Slider;
import React, { useState, useEffect } from 'react';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';
import '../styles/slider.css';

function Slider(props) {

  const circles = document.getElementsByClassName('circle');
  const circle1 = document.getElementById('circle1');
  const circle2 = document.getElementById('circle2');
  const circle3 = document.getElementById('circle3');

  useEffect(() => {
    setInterval(() => {
      next()
    }, 5000);
  });

  const [positions, setPositions] = useState([1, 2, 3]);
  const [activeCircle, setActiveCircle] = useState(1);

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
        <div className="slider-position">
          <div id='circle1' className='circle circle-active'></div>
          <div id='circle2' className="circle"></div>
          <div id='circle3' className="circle"></div>
        </div>
      </div>
    </div>
  );

  function next() {
    const newPositions = [];
    for (const position of positions) {
      let newPosition = position - 1;
      newPosition < 1 ? newPosition = 3 : newPosition = position - 1;
      newPositions.push(newPosition);
    }

    document.getElementById(`circle${activeCircle}`).classList.remove('circle-active');
    let newActiveCircle;
    activeCircle + 1 > 3 ? newActiveCircle = 1 : newActiveCircle = activeCircle + 1;
    document.getElementById(`circle${newActiveCircle}`).classList.add('circle-active');

    setPositions(newPositions);
    setActiveCircle(newActiveCircle);
  }

}

export default Slider;
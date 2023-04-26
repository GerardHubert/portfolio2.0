import React from 'react';
import OneSkill from './OneSkill';
import '../styles/skills.css';

function Skills(props) {
  const skillNames = ['html', 'css', 'javascript', 'react.js', 'poo'];
  const skillsList = skillNames.map((skillName) => <OneSkill name={skillName} />)
  return (
    <section className="skills-section">
      <div className="skills-section-wrapper">
        <header className="skills-section-header">
          <h1 className="skills-section-title">Compétences</h1>
          <p className="skills-section-intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi tempore fugit error numquam saepe magnam, necessitatibus distinctio quas, cupiditate eaque quam neque corrupti debitis!</p>
        </header>
        <div className="skills-container">
          {skillsList}
        </div>
      </div >
    </section >
  )
}

export default Skills;
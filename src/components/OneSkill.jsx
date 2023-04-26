import React from 'react';

function OneSkill(props) {
  return (
    <div className="one-skill-wrapper">
      <div className="skill-check">
        <div className="skill-square">
          <i className="fa-solid fa-check"></i>
        </div>
      </div>
      <span className="skill-name">{props.name}</span>
    </div>
  );
}

export default OneSkill;
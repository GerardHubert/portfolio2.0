import React from 'react';

function Loading(props) {
  return (
    <section className='loading'>
      <div className="loading-wrapper">
        <span className="loading-text">Loading</span>
        <div className="loading-dots">
          <i class="fa-solid fa-square"></i>
          <i class="fa-solid fa-square"></i>
          <i class="fa-solid fa-square"></i>
        </div>
      </div>
    </section>
  )
}

export default Loading;
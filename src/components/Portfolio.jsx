import React from 'react';
import '../styles/portfolio.css';

function Portfolio(props) {
  return (
    <section className='portfolio-section'>
      <div className="portfolio-section-wrapper">
        <div className="portfolio-section-header">
          <h1 className="portfolio-section-title">portfolio</h1>
          <p className='portfolio-section-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quae laborum quo. Quam eligendi explicabo veritatis temporibus sint odio obcaecati doloribus magnam, fuga repellendus est reprehenderit. Beatae sunt expedita possimus.</p>
        </div>
        <div className="portfolio-section-portfolio">
          <div className="portfolio-work">
            <img src="https://picsum.photos/450/300" alt="capture du site game-quizz" />
            <div className='portfolio-work-technos'>
              <span className="one-techno">Html5</span>
              <span className="one-techno">Css3</span>
              <span className="one-techno">JavaScript</span>
              <span className="one-techno">React.JS</span>
            </div>
            <span className="one-work-title">Le nom du site ici</span>
          </div>
          <div className="portfolio-work">
            <img src="https://picsum.photos/450/300" alt="capture du site webagency" />
            <div className='portfolio-work-technos'>
              <span className="one-techno">Html5</span>
              <span className="one-techno">Css3</span>
              <span className="one-techno">JavaScript</span>
              <span className="one-techno">React.JS</span>
            </div>
            <span className="one-work-title">Le nom du site ici</span>
          </div>
          <div className="portfolio-work">
            <img src="https://picsum.photos/450/300" alt="capture du site ont mate quoi ?" />
            <div className='portfolio-work-technos'>
              <span className="one-techno">Html5</span>
              <span className="one-techno">Css3</span>
              <span className="one-techno">JavaScript</span>
              <span className="one-techno">React.JS</span>
            </div>
            <span className="one-work-title">Le nom du site ici</span>
          </div>
          <div className="portfolio-work">
            <img src="https://picsum.photos/450/300" alt="capture du site ont mate quoi ?" />
            <div className='portfolio-work-technos'>
              <span className="one-techno">Html5</span>
              <span className="one-techno">Css3</span>
              <span className="one-techno">JavaScript</span>
              <span className="one-techno">React.JS</span>
            </div>
            <span className="one-work-title">Le nom du site ici</span>
          </div>
          <div className="portfolio-work">
            <img src="https://picsum.photos/450/300" alt="capture du site ont mate quoi ?" />
            <div className='portfolio-work-technos'>
              <span className="one-techno">Html5</span>
              <span className="one-techno">Css3</span>
              <span className="one-techno">JavaScript</span>
              <span className="one-techno">React.JS</span>
            </div>
            <span className="one-work-title">Le nom du site ici</span>
          </div>
          <div className="portfolio-work">
            <img src="https://picsum.photos/450/300" alt="capture du site ont mate quoi ?" />
            <div className='portfolio-work-technos'>
              <span className="one-techno">Html5</span>
              <span className="one-techno">Css3</span>
              <span className="one-techno">JavaScript</span>
              <span className="one-techno">React.JS</span>
            </div>
            <span className="one-work-title">Le nom du site ici</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
import '../styles/about_me.css';

function AboutMe(props) {
  return (
    <section className='about-me-section'>
      <div className="presentation">
        <h1 className="presentation-title">
          <span className="letter">b</span>
          <span className="letter">o</span>
          <span className="letter">n</span>
          <span className="letter">j</span>
          <span className="letter">o</span>
          <span className="letter">u</span>
          <span className="letter">r</span>
          <span className="letter">,&ensp;</span>
          <span className="letter">j</span>
          <span className="letter">e&ensp;</span>
          <span className="letter">s</span>
          <span className="letter">u</span>
          <span className="letter">i</span>
          <span className="letter">s&ensp;</span>
          <span className="letter">G</span>
          <span className="letter">é</span>
          <span className="letter">r</span>
          <span className="letter">a</span>
          <span className="letter">r</span>
          <span className="letter">d,</span>
        </h1>
        <div className="presentation-text">
          <p>un développeur web compétent à la fois dans le front-end et dans le back-end. Avec cependant une appétence particulière pour le back-end.</p>
          <p>Organisé, méticuleux et autonome, j'accorde une importance particulière au code propre et aux bonnes pratiques</p>
          <p>A part rester devant un écran noir à créer des interfaces ou résoudre des problème, je suis amateur de cinéma, de jeux vidéo, et de randonnées.</p>
        </div>
      </div>
      <props.slider />
    </section>
  );
}

export default AboutMe;
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
          <span className="letter">d</span>
        </h1>
        <p className="presentation-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit sed et repellendus provident eius deleniti quod quasi laudantium ea consectetur quas animi, nemo nisi suscipit laborum libero distinctio dolorum sapiente aperiam? Sunt doloribus saepe nam! Qui optio fuga id cum!</p>
      </div>
      <props.slider />
    </section>
  );
}

export default AboutMe;
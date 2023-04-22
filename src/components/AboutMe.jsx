import Slider from './Slider';
import '../styles/about_me.css';

function AboutMe(props) {
  return (
    <section className='about-me-section'>
      <div className="presentation">
        <h1 className="presentation-title">Bonjour, je suis Gérard</h1>
        <p className="presentation-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit sed et repellendus provident eius deleniti quod quasi laudantium ea consectetur quas animi, nemo nisi suscipit laborum libero distinctio dolorum sapiente aperiam? Sunt doloribus saepe nam! Qui optio fuga id cum!</p>
      </div>
      <Slider />
    </section>
  );
}

export default AboutMe;
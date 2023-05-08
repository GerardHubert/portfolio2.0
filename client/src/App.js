import { Routes, Route } from 'react-router-dom';
import './styles/app.css';
import NotFound from './components/NotFound';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className='main'>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe slider={Slider} />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

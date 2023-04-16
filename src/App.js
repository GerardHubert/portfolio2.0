import { Routes, Route } from 'react-router-dom';
import './styles/app.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className='main'>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;

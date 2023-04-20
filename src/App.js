import { Routes, Route } from 'react-router-dom';
import './styles/app.css';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className='main'>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

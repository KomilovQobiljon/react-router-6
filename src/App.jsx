import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './layout/Home';
import About from './layout/About';

import logo from './assets/logoglogo.svg';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className='navbar'>
        <Link to="/">
          <img src={logo} alt='Logo' loading='lazy' className='navbar__img'/>
        </Link>
        <div className='navbar__group'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
      </Routes>

      <footer className='footer'>
        <p>&copy; 2022 #VANLIFE</p>
      </footer>
    </BrowserRouter>
  )
}

export default App

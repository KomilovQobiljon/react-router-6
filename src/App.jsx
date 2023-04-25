import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './layout/Home';
import About from './layout/About';
import Vans from './layout/Vans';

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
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </nav>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/vans" element={<Vans />} />
      </Routes>

      <footer className='footer'>
        <p>&copy; 2022 #VANLIFE</p>
      </footer>
    </BrowserRouter>
  )
}

export default App

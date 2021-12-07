import logo from './logo.svg';
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import Contact from './Components/Contact';
import About from './Components/About';
import Background from '../src/Images/Home.jpg';

function App() {
  return (
    
    <div class="bg_image"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPosition: 'center',
          backgroundSize: "cover",
          backgroundrepeat: "no-repeat",
          backgroundAttachment: "fixed",
          height: "100vh",
          width: '100vw',
          color: "white"
        }}>
      
      <>
      <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/services" element={<Services />}/>
      <Route exact path="/contact" element={<Contact />}/>
      <Route path="*" element={<Navigate to ="/" />}/>

    </Routes>
    </>
    </div>
      
    
  );
}

export default App;

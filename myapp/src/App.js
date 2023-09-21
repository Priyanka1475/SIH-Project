
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/header';
import Home from './pages/home';
import './s.css';
import Career from './pages/Career';


function App() {
  return (
    <Router>
    <Header />
    <Routes>
    <Route exact path="/" element={<Home/>} />
      <Route exact  path="/Career-Prediction" element={<Career />} />
      
    </Routes>
  </Router>
  );
}

export default App;

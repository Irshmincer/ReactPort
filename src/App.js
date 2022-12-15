import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

import "./App.css";
import Navbar from "./componets/Navbar";
import { About } from './pages/About';
import { Pricing } from './pages/Pricing';

import Home from "./pages/Home"


function App() {
  return (
    <Router>
      <Navbar />
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/pricing' element={<Pricing />}/>

       </Routes>
       
    </Router>
  );
}

export default App;

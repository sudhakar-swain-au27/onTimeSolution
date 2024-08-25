import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header';
import Footer from './components/Footer'
import Projects from './components/Projects';
import Content from './components/Content';
import Skills from './components/Skills';
import HomePage from './components/Home';
function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        
        <Navbar />
        <HomePage/>
        <Projects/>
        <Content/>
        <Skills/>
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;

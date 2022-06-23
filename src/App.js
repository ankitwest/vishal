import React from 'react';
import './App.css';

import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import Footer from './components/Footer.js';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from 'react-router-dom';

// Hey man
function App() {
  return (
    <div className="App">
      Hello
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

// const App = () => {};
export default App;



import './App.css';
import CommentForm from './pages/Comment';
import Hero from './pages/about_us_page';
import HelpAndSupportPage from './pages/help_and_support';
import PlanetWatch from './pages/planetwatch';


import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlanetWatch/>} />
        <Route path="/about" element={<Hero />} />
        <Route path="/help" element={<HelpAndSupportPage />} />
        <Route path="/connect" element={<CommentForm/> } />
      </Routes>
    </Router>
  );
}

 
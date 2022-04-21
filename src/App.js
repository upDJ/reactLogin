import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

import Register from './pages/registration';
import Login from './components/login';
import Blog from './pages/blog';
import React from 'react';
import NavBar from './components/navbar';
import Initialize from './pages/Initialize';

function App() {
  return (
    <div>
      <NavBar />
      <div className="App-header">
        <Routes>
          <Route exact path="/" element={<Login />}/>
          <Route exact path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/initialize" element={<Initialize/>}/>
        </Routes>
       
      </div>
    </div>
  );
}

export default App;

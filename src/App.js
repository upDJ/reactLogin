import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

import Register from './pages/registration';
import Login from './components/login';
import Blog from './pages/blog';
import Admin from './pages/admin';
import React from 'react';
import NavBar from './components/navbar';
import Initialize from './pages/Initialize';
import Settings from './pages/settings';

function App() {
  return (
    <div>
      <NavBar />
      <div className="App-header">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/initialize" element={<Initialize />} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

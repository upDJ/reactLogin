import './App.css';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

import Register from './pages/registration';
import LoginPage from './pages/login';
import React, { useEffect, useState } from 'react';
import Initialize from './components/button';
import axios from 'axios';

function App() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [loginStatus, setLogin] = useState(false);
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    axios.post('http://localhost:5000/login/', { email: details.email, password: details.password, name: details.name })
      .then(data => {
        console.log(data)
        setLogin(true); // JSON data parsed by `data.json()` call
      });

      setUser({
        name: details.name,
        email: details.email

      });
    
      
  }

  const Logout = () => {
    setUser({ name: "", email: "", password: "" });
    setLogin(false);
  }

  const navigate = useNavigate();

  const NavigateRegisterHandler = () => {
    navigate('/register');
  }

  useEffect(() => {
    if (loginStatus) {
      console.log("Logged in");
      
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  },[loginStatus]);


  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div>
          <LoginPage Login={Login} error={error} />
          <button onClick={NavigateRegisterHandler}>Register</button>
        </div>
      )}

      <Routes>
        <Route exact path="/" element={null} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/login" element={<LoginPage />} />  */}
      </Routes>
      <Initialize />
    </div>
  );
}

export default App;

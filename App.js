import './App.css';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

import Register from './pages/registration';
import LoginPage from './pages/login';
import React, { useState } from 'react';
import Initialize from './components/button';

function App() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [loginStatus, setLogin] = useState(false);
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: details
    };

    fetch('http://127.0.0.1:5000/login/', requestOptions)
      .then(response => response.json())
      .then(data => setLogin(true));

    if (loginStatus) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    setUser({ name: "", email: "", password: "" });
    setLogin(false);
  }

    const navigate = useNavigate();
 
    const NavigateRegisterHandler = () => {
        navigate('/register');
    } 



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
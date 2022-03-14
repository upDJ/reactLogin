import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

import Register from './pages/registration';
import LoginPage from './pages/login'; 
import React, { useState } from 'react';
import Initialize from './components/button';

function App() {

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""})
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
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
    setUser({name: "", email: ""});
  }


  return (
    <div className="App">
      {(user.email != "") ?(
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginPage Login={Login} error={error}/>
      )}

      <Routes>
        <Route exact path="/" element={null} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/login" element={<LoginPage />} />  */}
      </Routes>
      <Initialize/>
    </div>
  );
}

export default App;
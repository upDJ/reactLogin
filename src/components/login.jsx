import LoginPage from '../pages/LoginPage';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Login() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [loginStatus, setLogin] = useState(null);
  const [error, setError] = useState("");

  function processLogin(obj) {
    const userId = obj.data.username[0];
    const userName = obj.data.username[1];
    localStorage.setItem("user_id", userId);
    localStorage.setItem("username", userName);
    setLogin(true);
  }

  const Login = details => {
    console.log(details);

    axios.post('http://localhost:5000/login/', { email: details.email, password: details.password, name: details.name })
      .then(data => {
        console.log(data)
        data ? processLogin(data) : setLogin(false);
      })
      .catch(e => {
        console.log("error: " + e)
        setLogin(false)
      })

    setUser({
      name: details.name,
      email: details.email

    });
  }

  const Logout = () => {
    setUser({ name: "", email: "", password: "" });
    setLogin(null);
    setError("");
    localStorage.removeItem("user");
  }

  useEffect(() => {
    if (loginStatus) {
      console.log("Logged in");
    }
    else if (loginStatus == null) {
      console.log("do nothing: login status is null")
    }
    else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }, [loginStatus]);


  return (
    <div>
      {(loginStatus) ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div>
          <LoginPage Login={Login} error={error} />
        </div>
      )}
    </div>
  );
}

export default Login;

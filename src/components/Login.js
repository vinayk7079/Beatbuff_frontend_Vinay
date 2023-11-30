import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginResult, setLoginResult] = useState("");
  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoading(true);
    axios.post('http://localhost:5000/login', { email, password })
      .then((response) => {
        const result = response.data;
        setLoginResult(result.success ? "Login successful" : "Login unsuccessful");
        if (result.success) {
          // If login is successful, redirect to the dashboard
          navigate('/dashboard');
        }
      })
      .catch((error) => {
        console.error("Login request error:", error);
        setLoginResult("Something went wrong during login.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="container">
      <div>
        <h1>Login</h1>
        <form>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleLogin} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Login'}
          </button>
          <p>{loginResult}</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
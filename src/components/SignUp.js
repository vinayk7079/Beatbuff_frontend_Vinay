import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = () => {
    setIsLoading(true);
    axios.post('http://localhost:5000/register', {
      firstName,
      lastName,
      email,
      password,
      dob,
      gender
    })
      .then((response) => {
        const result = response.data;
        setAlertMessage(result ? "Data saved successfully" : "Failed to save data");
        if (result) {
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setDOB("");
          setGender("");
        }
      })
      .catch((error) => {
        console.error("POST request error:", error);
        setAlertMessage(`Error: ${error.message}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="container">
      <div>
        <h1>Sign Up</h1>
        <form>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
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
          <input
            type="date"
            placeholder="Date of Birth (DOB)"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
          />
          <input
            type="text"
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <button type="button" onClick={handleSignUp} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Sign Up'}
          </button>
          <p>{alertMessage}</p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
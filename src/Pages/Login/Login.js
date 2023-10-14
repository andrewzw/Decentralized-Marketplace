/* Name: Zhe Wei Yap */
/* ID: 103508895 */

/* Name: Vu Gia Thinh Dang:*/
/* ID: 103177240 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import "./login.css";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(""); //value name must be the same for object model in python
  const [password, setPassword] = useState("");

  async function handleLogin() {
    console.log("Username:", username);
    console.log("Password:", password);
    if (username && password) {
      try {
        const response = await axios.post("http://127.0.0.1:8000/login", { username, password }
        );
        if (response.data.status === "success") {
          localStorage.setItem("userId", response.data.user_id);
          console.log("Stored user_id:", response.data.user_id);
          localStorage.setItem("isLoggedIn", "true");
          const deployContract = await axios.get("http://127.0.0.1:8000/deployContract")
          navigate("/Dashboard");
        } else {
          alert("Invalid credentials. Enter again.");
        }
      }
      catch (error) {
        console.error("Error during login:", error);
        alert("Invalid credentials. Enter again");
      }
    } else {
      alert("Please enter your username and password");
    }
  }

  return (
    <div>
      <h1>Dashboard Login</h1>
      <div className="login">
        <div className="login-box">
          <h2>Login</h2>
          <p>Enter your account details</p>
          <input
            type="text"
            placeholder="Enter username"
            value={username} //value of the input is bound to 'username'
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <Button
            onClick={handleLogin}
            className="login-button"
            variant="contained"
            endIcon={<VpnKeyIcon />}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;

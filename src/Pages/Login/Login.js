import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [wallet, setWallet] = useState(""); // assuming a wallet string for prototype

  function handleLogin() {
    if (wallet) {
      // Just a simple check to see if something was entered
      localStorage.setItem("isLoggedIn", "true");
      navigate("/Dashboard");
    } else {
      alert(
        "Please enter your wallet info (it can be anything for this prototype)"
      );
    }
  }

  return (
    <div className="login">
      <h1>Dashboard Login</h1>

      <div className="login-box">
        <p>Enter your login details:</p>
        <input
          type="text"
          placeholder="Enter wallet to sign in..."
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
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
  );
}

export default Login;

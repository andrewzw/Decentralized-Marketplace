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
  const [wallet, setWallet] = useState(""); // assuming a wallet string for prototype

  async function handleLogin() {
    if (wallet) {
      try {
        console.log("Sending wallet:", wallet);
        // Send a POST request to the /verifyWallet endpoint with the wallet string
        const response = await axios.post("http://127.0.0.1:8000/verifyWallet", {
          wallet,
        });
        console.log("Response data:", response.data);
        // Check if the wallet exists in the database
        if (response.data.status === "success") {
          localStorage.setItem("isLoggedIn", "true");
          navigate("/Dashboard");
        } else {
          alert("Wallet does not exist. Please sign up.");
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          alert("Wallet does not exist. Please sign up.");
        } else {
          console.error("Error verifying wallet:", error);
          alert("Error verifying wallet. Please try again.");
        }
      }
    } else {
      alert("Please enter your wallet info");
    }
  };
  

  return (
    <div>
      <h1>Dashboard Login</h1>
      <div className="login">
        <div className="login-box">
          <h2>Login with MetaMask</h2>
          <p>Enter your account details</p>
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
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [wallet, setWallet] = useState(''); // assuming a wallet string for prototype

  function handleLogin() {
    if(wallet) {  // Just a simple check to see if something was entered
      localStorage.setItem('isLoggedIn', 'true');
      navigate("/Dashboard");
    } else {
      alert('Please enter your wallet info (it can be anything for this prototype)');
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '45vh' }}>
      <input 
        type="text" 
        placeholder="Enter wallet to sign in..." 
        value={wallet} 
        onChange={(e) => setWallet(e.target.value)} 
        style={{ padding: '10px', marginBottom: '20px', fontSize: '16px', width: '250px' }}
      />
      <button onClick={handleLogin} style={{ padding: '10px 20px', fontSize: '16px' }}>Login</button>
    </div>
  );
}

export default Login;

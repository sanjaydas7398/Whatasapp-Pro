

import React from 'react';
import {auth,provider} from "../Login/firebase";
import { signInWithPopup } from 'firebase/auth';
import "./Login.css";

const Login = ({ onLogin }) => {

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
     
      const userData = {
         id: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };

      onLogin(userData);


    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Sign in to continue to the chat app</p>
        <button className="google-signin-btn" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>
      </div>
    </div>
  );

}

export default Login;


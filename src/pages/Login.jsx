import React from "react";
import "./CSS/Loginsingup.css";

const Login = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsingup-felids">
          <input type="text" placeholder="Enter your Name" />
          <input type="email" placeholder="Enter your Email" />
          <input type="password" placeholder="Enter your Password" />
        </div>

        <button>Continue</button>
        <p className="loginsingup-login">
          Already have an account ? <span>Login</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the term of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

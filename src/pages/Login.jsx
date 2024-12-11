import React, { useState } from "react";
import "./CSS/Loginsingup.css";

const Login = () => {
  const [name, setName]= useState();
  const [email,setEmail]=useState();
  const[password, setPassword] =useState();

  const handlesubmit = (e) =>{
e.preventDefault()
  }
 
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsingup-felids">
          <form onSubmit={handlesubmit}>
          <input type="text" placeholder="Enter your Name" name="Name " onChange={(e)=> setName(e.target.value)}/>
          <input type="email" placeholder="Enter your Email" name="Email" onChange={ (e)=> setEmail (e.target.value)} />
          <input type="password" placeholder="Enter your Password"  name="password" onChange={(e)=>setPassword (e.target.value)}/>
          <button>Continue</button>
          </form>

          
        </div>
  
       
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

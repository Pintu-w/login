import React from "react";
import { Input } from "../Login/Input";
import logo from '../assets/logo.png';




export const ResetPassword = () => {
  return (
    <div className="main-container" >
      <div className="logo-container"> <img className="logo" src={logo} alt="" /> </div>
      <div className="container">
        <div className="text-center mb-10">
          
          <h2>Reset Password</h2>
          <p >Reset Your Password To Continue</p>
        </div>
        <form className="flex flex-col " action="">
          <label htmlFor="email">EMAIL ADDRESS</label>
                    <div className="input-container"> <Input  type={"email"} /></div>

          <button  >Log in</button>

          <div className="flex flex-col text-center mt-10">
            <p>Login Account</p>
            <p> Sinup !</p>
          </div>
        </form>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Input } from "./Input";
import { Link } from "react-router";
import logo from '../assets/freefire.png';

export const Login = () => {
  const [show, setShow] = useState(true);
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [link,setLink] = useState()
useEffect(()=>{

  if(email=="user"){
    setLink('/tournament')
  }else if (email=='admin'){
    setLink('/adminpanel')
  }
},[email])
 console.log(link);
  const PasswordHandler = (e) => {
    setShow((prev) => !prev);
  };

    
  return (
    <>
      <div
      className="main-container"
      >
        <div className="  logo-container"> 
          <img className="logo" src={logo} alt="" />
        </div>
        <div
          className="container"
        >
          <div className="text-center mb-10 ">
            <h2  >Login</h2>
            <p >sing in to continue</p>
          </div>
          <form className="flex flex-col justify-center items-center" action="">
            <div className="flex flex-col mb-3 ">
              <label className="label" htmlFor="email">EMAIL ADDRESS</label>
            <div className="input-container"><input type="text" onChange={(e)=>{setEmail(e.target.value)}} /></div>
            </div>
            <div className="flex flex-col">
              <label className="label" htmlFor="password">PASSWORD</label>
              <div className="input-container  ">
               <input type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                <div className="w-10 h-10 flex justify-center items-center" onClick={PasswordHandler}>
                  {show ? (
                      <i className="fa-solid fa-eye-slash"></i>
                    ) : (
                      <i className="fa-solid fa-eye "></i>
                    )}
                </div>
              </div>
            </div>
            <Link to={link}>
            <button
              onClick={(e) => {
              }}
            >
              Log in
            </button></Link>
          </form>

          <div className="flex flex-col justify-center items-center mt-2">
            <Link to="/resetPasswrd"><p>forgot password?</p></Link>
            <Link to='/createaccount'><p>singup !</p></Link>
          </div>
        </div>
      </div>
    </>
  );
};

import React, { useEffect, useState } from "react";
import { Input } from "./Input";
import { Link } from "react-router";
import logo from '../assets/Logo.png';

export const Login = () => {
  const [show, setShow] = useState(true);
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [link,setLink] = useState()
  const [emailError,setEmailError] = useState(true)
  const [passwordError,setPasswordError] = useState(true)

useEffect(()=>{

  if(email=="user" && password == "123"){
  }else if (email=="admin" && password == "123"){
  }
},[email,password])
  const PasswordHandler = () => {
    setShow((prev) => !prev);
  };

const ClickHandler=()=>{
!email? setEmailError(false): ""
!password? setPasswordError(false): ""

const getData = JSON.parse(localStorage.getItem("user"))
 getData.map((ele)=>{
  if(email==ele.email && password==ele.password && password.includes("user")){
    setLink('/tournament')

  }else if(email==ele.email && password==ele.password && password.includes("admin")){
    setLink('/adminpanel')

  }else {
    alert('Invalid password or email')
  }
 })
}  



    
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
              <div className={`${emailError? "hidden": "block"} text-red-700 text-sm  ` }>please enter email address</div>
            <div className="input-container"><input type="text" onChange={(e)=>{
              setEmail(e.target.value) 
              setEmailError(true)

            }} required/></div>
            </div>
            <div className="flex flex-col">
              <label className="label" htmlFor="password">PASSWORD</label>
              <div className={`${passwordError? "hidden": "block"} text-red-700 text-sm  ` }>please enter password</div>
              <div className="input-container  ">
               <input type={show?"password": "text"} onChange={(e)=>{setPassword(e.target.value)
                 setPasswordError(true)}} required />
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
                ClickHandler()
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

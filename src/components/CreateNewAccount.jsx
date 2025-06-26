import React, { useState } from 'react'
import { Input } from '../Login/Input'
import { Link, useNavigate } from 'react-router'

export const CreateNewAccount = () => {

  const navigate = useNavigate()

const userDetails = {
  name:"",
  email:"",
  password:"",
  id:""
}

const [data,setData]=useState(userDetails)


const clickHandler = (e)=>{
  const name = e.target.name
  const value = e.target.value
  setData({...data,[name]:value})
}

const submitHandler=(e)=>{
  e.preventDefault()

  if(data.name == "" || data.email == "" || data.password == "" || data.id == "" ){
    alert('Please Enter All Details')
  } else{
const getData =JSON.parse( localStorage.getItem("user")||"[]");
let arr = [];
arr = [...getData];
arr.push(data)
 localStorage.setItem("user",JSON.stringify(arr))  
 alert(" Singup Successfull")
 navigate("/")
  }

}




  return (
    <div  className='main-container text-white'>
    <div  className='p-2  ' ><i  className="fa-solid fa-arrow-left-long fa-xl"></i></div>
    <div   className='container'>
      <div className='flex flex-col text-center'>
        <h2 className='text-4xl font-bold'>Create new Account</h2> 
        <p>Already Registred ? Log in here</p></div>  

        <form className='flex flex-col  ' action=""  >
            <label htmlFor="name">NAME</label>
          <div className="input-container"> <input name="name"  type="text" onChange={(e)=>{clickHandler(e)}} /></div>
            <label htmlFor="email">EMAIL</label>
                    <div className="input-container"> <input name="email"  type="email"  onChange={(e)=>{clickHandler(e)}} /></div>

            <label htmlFor="password">PASSOWRD</label>
                    <div className="input-container"> <input name="password" type="password"  onChange={(e)=>{clickHandler(e)}} /></div>

            <label htmlFor="ID" >FREEFIRE ID</label>
                       <div className="input-container"> <input name="id" type="text"  onChange={(e)=>{clickHandler(e)}}/></div>


            <button  className='bg-gray-300 w-80 mt-5' onClick={submitHandler}>sign up</button>
        </form>


        </div>
    </div>
  )
}

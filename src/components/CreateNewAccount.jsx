import React from 'react'
import { Input } from '../Login/Input'
import { Link } from 'react-router'

export const CreateNewAccount = () => {
  return (
    <div  className='main-container text-white'>
    <div  className='p-2  ' ><i  className="fa-solid fa-arrow-left-long fa-xl"></i></div>
    <div   className='container'>
      <div className='flex flex-col text-center'>
        <h2 className='text-4xl font-bold'>Create new Account</h2> 
        <p>Already Registred ? Log in here</p></div>  

        <form className='flex flex-col  ' action="">
            <label htmlFor="name">NAME</label>
          <div className="input-container"> <Input  type={"text"} /></div>
            <label htmlFor="email">EMAIL</label>
                    <div className="input-container"> <Input  type={"email"} /></div>

            <label htmlFor="password">PASSOWRD</label>
                    <div className="input-container"> <Input  type={"password"} /></div>

            <label htmlFor="ID" >FREEFIRE ID</label>
                       <div className="input-container"> <Input  type={"text"} /></div>


            <Link to='/'><button  className='bg-gray-300 w-80 mt-5'>sign up</button></Link>
        </form>


        </div>
    </div>
  )
}

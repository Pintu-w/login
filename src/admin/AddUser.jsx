import React from 'react'
import { Input } from '../Login/Input'
import { Link } from 'react-router'

export const AddUser = () => {
  return (
    <div  className='main-container'>
        <div className='container'>
            <h2 className='mb-3 text-3xl font-bold' >Add User</h2>
            <form className='flex flex-col  ' action="">
            <label htmlFor="name">NAME</label>
           <div className="input-container"> <Input  type={"text"} /></div>
            <label htmlFor="email">EMAIL</label>
         <div className="input-container"> <Input  type={"email"} /></div>
            <label htmlFor="password">PASSOWRD</label>
            <div className="input-container"> <Input  type={"password"} /></div>
            <label htmlFor="ID" >FREEFIRE ID</label>
           <div className="input-container"> <Input  type={"text"} /></div>

            <Link to="/adminpanel"><button  className='bg-gray-300 w-80 mt-5'>Add User</button></Link>
        </form>
        </div>
    </div>
  )
}

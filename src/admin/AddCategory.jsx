import React from 'react'
import { Input } from '../Login/Input'
import { Link } from 'react-router'

export const AddCategory = () => {
  return (
    <div className='main-container'>
        <div className="container">
            <h2>Add Category</h2>
            <label htmlFor="" className='text-start w-full ml-8'>CATEGORY NAME</label>
            <div className="input-container"><Input typr={"text"}/></div>
            <Link><button>Add</button></Link>
        </div>
    </div>
  )
}

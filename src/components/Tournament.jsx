import React from 'react'
import { Link } from 'react-router'

export const Tournament = () => {
  return (
      <div className='main-container  text-white ' >
        <div className='container'>
             <div className='w-full mb-2 '> 
              <h3  >20 RUPEES CHALNGE</h3>
             </div>
            <div className=' w-full flex   ' >
             <div>
               <span  >Winning Price</span>
            <p className='text-xs'>Rs 200</p></div>
           <Link to='/home' className=' ml-10 mt-4 bg-indigo-700 h-10 w-50 text-md flex items-center justify-center  rounded-2xl'>Check Tournaments</Link>
           </div>

            </div>
         </div>
  )
}

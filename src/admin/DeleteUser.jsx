import React from 'react'
import { Link } from 'react-router'

export const DeleteUser = () => {
  return (
    <div className='main-container'> 

    <Link to="/adminpanel" > <p className='text-end p-3 w-full '><i class="fa-solid fa-angles-left"></i></p>
</Link>
    <div id='' className=' container'> <h2 className='w-full  '> Delete user </h2>
     <div className='w-full px-5'>
      <div className='flex justify-between w-full '>
        <span>SL</span>
        <span>User</span>
        <span>Action</span>
      </div>
       <div className='flex justify-between w-full text-center mt-2'>
        <p>1</p>
        <p className='ml-7'>Rahul</p>
       <Link to=""> <p className='bg-indigo-700 rounded-2xl w-15 mr-[-8px]'>Delete</p></Link>
      </div>
       <div className='flex justify-between w-full text-center mt-2'>
        <p>2</p>
        <p className='ml-7'>Pintu</p>
        <Link to=""> <p className='bg-indigo-700 rounded-2xl w-15 mr-[-8px]'>Delete</p></Link>
      </div>

     </div>
     
   
  
    </div>
    </div>
  )
}

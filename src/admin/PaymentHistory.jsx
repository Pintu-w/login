import React from 'react'
import { Link } from 'react-router'

export const PaymentHistory = () => {
  return (
    <div className='main-container'> 

    <Link to="/adminpanel" > <p className='text-end p-3 w-full '><i class="fa-solid fa-angles-left"></i></p>
</Link>
    <div id='' className=' container'> <h2 className='w-full  '> Edit user </h2>
     <div className='w-full px-5'>
      <div className='flex justify-between w-full '>
        <span>User</span>
        <span>Amount</span>
        <span>Status</span>
      </div>
       <div className='flex justify-between w-full text-center mt-2'>
        <p>Rahul</p>
        <p className='ml-7'>200</p>
       <Link to=""> <p className='bg-green-700 rounded-2xl w-20 mr-[-8px]'>Paid</p></Link>
      </div>
       <div className='flex justify-between w-full text-center mt-2'>
        <p>Rohit</p>
        <p className='ml-7'>300</p>
        <Link to=""> <p className='bg-red-700 rounded-2xl w-20 mr-[-8px]'>Pandding</p></Link>
      </div>

     </div>
     
   
  
    </div>
    </div>
  )
}

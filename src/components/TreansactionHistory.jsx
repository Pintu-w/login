import React from 'react'

export const TransectionHistory =()=>{
    return (
       <div className='main-container text-white'>
        <div className="list-container"> <div >
       <h2>Transaction History</h2>
   </div>
  <table className='text-center  ml-[-30px]' >
    <tr className='mb-10' >
        <th>Date</th>
        <th>Amount</th>
        <th>Status</th>
    </tr>
    <tr>
        <td>2021-01-01</td>
        <td>1000</td>
        <td className='w-10 bg-green-600 rounded-4xl'>Paid</td>
    </tr>
    <tr>
        <td>2021-01-01</td>
        <td>1000</td>
        <td className='w-10 bg-green-600 rounded-4xl'>Paid</td>
    </tr>
  </table></div>

   </div>
    )
}
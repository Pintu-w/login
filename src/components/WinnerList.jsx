import React from 'react'

export const WinnerList  = () => {

    const ClickHandler = ()=>{
        window.history.back()
    }
  return (
    <div className='main-container text-white'>
<div className='list-container'><div className='text-end p-3' onClick={ClickHandler}>
<i className="fa-solid fa-angles-left"></i>
    back
</div>
<h3 className='text-xl'>LIST OF WINNERS</h3>

<div >
    <table >
        <tr  >
            <th >SL</th>
            <th>Winner Name</th>
            <th>Winning Amount</th>
        </tr>
        <tr className='text-center'>
            <td>1</td>
            <td>Rohit</td>
            <td> <i className="fa-solid fa-indian-rupee-sign fa-xs"></i>100</td>
        </tr>
        <tr className='text-center'>
            <td>2</td>
            <td>Rohit</td>
            <td> <i className="fa-solid fa-indian-rupee-sign fa-xs"></i>100</td>
        </tr>
    </table>
</div></div>
    </div>
  )
}

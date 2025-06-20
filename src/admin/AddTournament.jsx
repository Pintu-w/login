import React from 'react'
import { Input } from '../Login/Input'
import { Link } from 'react-router'

export const AddTournament = () => {
  return (
    <div className='main-container'>
        <div className="container">
            <h2 >Add Tournament</h2>
            <form action="">
                <div> <label htmlFor="name">Tournament Name</label> <div className="input-container"> <Input  type={"text"} /></div></div>

                <div className='flex flex-col'> <label htmlFor="date "> Date</label> <div className="input-container"> <Input  type={"date"} /></div>
                <label htmlFor="time">Time</label><div className="input-container"> <Input  type={"time"} /></div>
                <label htmlFor="price">Price Pool</label> <div className="input-container"> <Input  type={"nnumber"} /></div>
                <label htmlFor="perkill">Per Kill</label>  <div className="input-container"> <Input  type={"nnumber"} /></div>
                <label htmlFor="fee"> Entry Fee</label>  <div className="input-container"> <Input  type={"nnumber"} /></div>
                <label htmlFor="type">Type</label>  <select type="text" id='type' className='input h-10 rounded-xl' />
                <label htmlFor="version">Version</label>  <select type="text" id='version' className='input h-10 rounded-xl'/>
                <label htmlFor="map"> Map</label> <select type="text" id='map' className='input h-10 rounded-xl' />
                </div>

                <div> <label htmlFor="name"> Total Players</label> <input type="text" id='name' /></div>

<Link to="/adminpanel"><button>Add Tournament</button></Link>
                 </form>
        </div>
    </div>
  )
}

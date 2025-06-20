import { useState } from "react"

export const Input = ( {type})=>{
    const[data,setData]= useState()

    return(
        <>
        <input type={type}  onClick={(e)=>{
setData(e.target.value)
        }}/>
        </>
    )
}
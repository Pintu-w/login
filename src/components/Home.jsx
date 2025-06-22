import React from "react";
import { Input } from "../Login/Input";
import { Link } from "react-router";

export const Home = () => {
  return (
    <div className="main-container text-white text-sm">
      

      <div className="container mb-5 ">
        <div className=" w-full text-start" >
          <span >GIGA SOLO CHAMPIONSHIP</span>
          <p className="text-xs">2.04.2025 | 12:00 PM</p>
        </div>

        <div className="w-full py-2  " >
          <div className="flex justify-between mb-2 ">
            <div>
              <span  >
                PEIZE POOL <i className="fa-solid fa-caret-down"></i>
              </span>
              <p  className="text-xs">
                <i className="fa-solid fa-indian-rupee-sign"></i> 200
              </p>
            </div>
            <div>
              <span >PER KILL</span>
              <p className="text-xs" >
                <i className="fa-solid fa-indian-rupee-sign"></i> 200
              </p>
            </div>
            <div>
              <span >ENTRY FEE</span>
              <p className="text-xs">
                <i className="fa-solid fa-indian-rupee-sign"></i> 200
              </p>
            </div>
          </div>

          <div className="flex justify-between mb-2"  >
            <div>
              <span >TYPE</span>
              <p className="text-xs">SOLO</p>
            </div>
            <div className="ml-15" >
              <span >VERSION</span>
              <p className="text-xs">TPP</p>
            </div>
            <div className="mr-8">
              <span >MAP</span>
              <p className="text-xs"> ERANCE</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="w-35  px-2  rounded-2xl" >
                  <input type="range" min="0"  max="100"/>
          </div>
          <Link to="/winnerlist" className="w-25 h-5 text-center rounded-2xl text-sm bg-indigo-700">WINNERLIST</Link>
          <Link  to="/payamount" className="w-18 h-5 text-center rounded-2xl text-sm bg-indigo-700">ENTER</Link>
        </div>

        <div className=" text-start w-full mt-2 text-xs"> 
          <p >only 49 left</p>
        </div>
      </div>


      
    </div>
  );
};

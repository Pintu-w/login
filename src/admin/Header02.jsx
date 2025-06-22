import React from "react";
import logo from '../assets/Logo.png';

export const Header02 = () => {
  return (
    <div className="flex justify-between p-2 bg-indigo-900 text-white">
      <div className="flex gap-2 items-center">
        <div className="w-10 h-10"><img className="w-[100%]" src={logo} alt="" /></div>
        <div className="text-xl font-extrabold">Admin Panel</div>
      </div>
      <div className="flex justify-center items-center px-2 ">
      
      </div>
    </div>
  );
};

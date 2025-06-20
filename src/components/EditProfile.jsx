import React from "react";
import { Input } from "../Login/Input";
import { Link } from "react-router";

export const EditProfile = () => {
  return (
    <div
      className="main-container "
    >
      <div
        className=" container flex flex-col justify-center items-center h-140 rounded-2xl"
      >
        <div className="flex flex-col text-center mb-15">
          <h2>Edit Your Profile</h2>
          <p>Wrong information Edit your Profile</p>
        </div>

        <form className="flex flex-col justify-center " action="">
          <label htmlFor="name">NAME</label>
          <div className="input-container"><Input type={"text"} /></div>

          <label htmlFor="email">EMAIL</label>
          <div className="input-container"><Input type={"email"} /></div>

          <label htmlFor="password">PASSOWRD</label>
          <div className="input-container"><Input type={"password"} /></div>

          <label htmlFor="ID">FREEFIRE ID</label>
         <div className="input-container"><Input type={"text"} /></div>

          <Link to="/"><button className="bg-gray-300 w-80 mt-5">save</button></Link>
        </form>
      </div>
    </div>
  );
};

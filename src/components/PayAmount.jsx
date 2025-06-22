import React from "react";
import { Input } from "../Login/Input";
import { Link } from "react-router";
import qr from "../assets/qr2.png"

export const PayAmount = () => {
  return (
    <main className="main-container text-white ">
      <div className="container">
        <div className="mb-3 text-start w-full">
          <h3 className="text-xl">GIGA SOLO CHAMPIONSHIP</h3>
          <p >2.04.2025 | 12:00 PM</p>
        </div>
        <div className="flex flex-col  text-center">
          <div className="w-full p-7"><img className="w-full" src={qr} alt="" /></div>
          <h2> SCAN THE CODE AND PAY THE AMOUNT</h2>
          <div>OR PAY TO OUR UPI ID</div>
          <p>spectcorebusiness@0kaxis</p>

          <p>AFTER PAYMENT SHARE YOUR UTRN CODE FOR VERIFICATION</p>

          <form className="flex flex-col justify-center items-center mt-2" >
                     <div className="input-container "> <Input  type={"text"} /></div>

           <Link to="/roomid" > <button>SUBMIT YOUR UTRN</button></Link>
          </form>
        </div>
      </div>
    </main>
  );
};

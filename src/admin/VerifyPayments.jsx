import React from "react";
import { Link } from "react-router";

export const VerifyPayments = () => {
  return (
    <div className="main-container ">
      <div className="container ">
        <h2>Verify Payments</h2>
        <div className=" mb-4 flex justify-between gap-4 bg-indigo-900 rounded-2xl px-4 py-2  ">
          <div>
            <h3>Name</h3>
            <p>Keshab</p>
            <p className="px-1 bg-white rounded-2xl">APPROVED</p>
          </div>

          <div>
            <h3>UTRN</h3>
            <p>DTR35656RTFYDTY56</p>
            <Link to="/" className="py-1 px-2 bg-red-600 text-white rounded-2xl">
              NOT APPROVED
            </Link>
          </div>
        </div>

       <div className=" mb-4 flex justify-between gap-4 bg-indigo-900 rounded-2xl px-4 py-2  ">
          <div>
            <h3>Name</h3>
            <p>Keshab</p>
            <p className="px-1 bg-white rounded-2xl">APPROVED</p>
          </div>

          <div>
            <h3>UTRN</h3>
            <p>DTR35656RTFYDTY56</p>
            <Link to="/" className="py-1 px-2 bg-red-600 text-white rounded-2xl">
              NOT APPROVED
            </Link>
          </div>
        </div>
        <div className=" mb-4 flex justify-between gap-4 bg-indigo-900 rounded-2xl px-4 py-2  ">
          <div>
            <h3>Name</h3>
            <p>Keshab</p>
            <p className="px-1 bg-white rounded-2xl">APPROVED</p>
          </div>

          <div>
            <h3>UTRN</h3>
            <p>DTR35656RTFYDTY56</p>
            <Link to="/" className="py-1 px-2 bg-red-600 text-white rounded-2xl">
              NOT APPROVED
            </Link>
          </div>
        </div>
       <div className=" mb-4 flex justify-between gap-4 bg-indigo-900 rounded-2xl px-4 py-2  ">
          <div>
            <h3>Name</h3>
            <p>Keshab</p>
            <p className="px-1 bg-white rounded-2xl">APPROVED</p>
          </div>

          <div>
            <h3>UTRN</h3>
            <p>DTR35656RTFYDTY56</p>
            <Link to="/" className="py-1 px-2 bg-red-600 text-white rounded-2xl">
              NOT APPROVED
            </Link>
          </div>
        </div>
        <div className=" mb-4 flex justify-between gap-4 bg-indigo-900 rounded-2xl px-4 py-2  ">
          <div>
            <h3>Name</h3>
            <p>Keshab</p>
            <p className="px-1 bg-white rounded-2xl">APPROVED</p>
          </div>

          <div>
            <h3>UTRN</h3>
            <p>DTR35656RTFYDTY56</p>
            <Link to="/" className="py-1 px-2 bg-red-600 text-white rounded-2xl">
              NOT APPROVED
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

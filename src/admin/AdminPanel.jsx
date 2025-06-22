import React from "react";
import logo from '../assets/Logo.png';
import { Link } from "react-router";


export const AdminPanel = () => {
  return (
    <div className="main-container ">
      <div className="container ">
        <h2 className="text-5xl"> Admin Panel</h2>
       <div className="w-full py-5">
        <div>
          <h3 className="text-xl mb-1 mt-3">User Managment</h3>
          <Link to="/AddUser"><p>Add User</p></Link>
          <Link to="/EditUser"><p>Edit User</p></Link>
          <Link to="/DeleteUser"><p>Delete User</p></Link>
        </div>

        <div className="">
          <h3 className="text-xl mb-1 mt-5">Tournament Managment</h3>
          <Link to="/AddTournament"><p>Add Tournament</p> </Link>
          <Link to="/EditTournament"><p>Edit Tournament</p></Link>
          <Link to="/DeleteTournament"><p>Delete Tournament</p></Link>
        </div>

        <div className="mb-2">
          <h3 className="text-xl  mb-1 mt-5">Payment Managment</h3>
          <Link to="/VerifyPayments"><p>Varify Payment</p></Link>
          <Link to="/PaymentHistory"><p>Payment History</p></Link>
        </div>

        <div className="mb-2">
          <h3 className="text-xl  mb-1 mt-5">Category Managment</h3>
          <Link to="/AddCategory"><p>Add Category</p></Link>
          <Link to="/DeleteCategory"><p>Delete Category</p></Link>
        </div>
          <h3 className="text-xl   mb-1 mt-5">Submit Winners List</h3>
</div>
      
      </div>
    </div>
  );
};

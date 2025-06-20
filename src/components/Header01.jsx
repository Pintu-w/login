import logo from '../assets/freefire.png';
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router";

export const Header01 = () => {
  return (
    <div className="flex justify-between p-2 bg-indigo-900 text-white">
      <div className="flex gap-2 items-center">
        <div className="w-10 h-10"><img className="w-[100%]" src={logo} alt="" /></div>
        <div className="text-xl font-extrabold">User Panel</div>
      </div>
      <div className="flex justify-center items-center px-2 ">
       <Link to="/editprofile"> <FaUserCircle  className="text-2xl"/></Link>
      </div>
    </div>
  );
};

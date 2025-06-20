import { useState } from "react";
import { Outlet } from "react-router";
import { Header02 } from "./admin/Header02";
import { Header01 } from "./components/Header01";




export const App =()=> {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header01/>
  <Outlet/>
    </>
  );
}


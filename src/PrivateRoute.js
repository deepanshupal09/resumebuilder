import { Navigate, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { getCookie } from "./cookies";

export default function PrivateRoute() {

    const [user, setUser] = useState(getCookie("auth"));
    useEffect(()=>{
        // console.log("user ", user)
    },[user])
//   setUser(getCookie("auth"));
//   if (user === undefined) return null;

    return (
        user ? <Outlet /> : <Navigate to="/login" />
    )

//   return user ? (
//     <>
//       <Navbar />
//       <Outlet />
//     </>
//   ) : (
//     <Navigate to="/login" />
//   );
}
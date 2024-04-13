import { Navigate, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./components/pages/Navbar";
import { getCookie } from "./cookies";

export default function PrivateRoute() {

    const user = getCookie("auth");
    return (
        user ? <Outlet /> : <Navigate to="/login" />
    )

}
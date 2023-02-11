import React from "react";
import { Outlet } from "react-router-dom";
import  './NavBar.css'
function NavBar () {
    return (
        <>
            <nav>
                <div className="logo">
                    FATELA 
                </div>
                <div className="platform">
                    Record Académico 📓
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export {NavBar}
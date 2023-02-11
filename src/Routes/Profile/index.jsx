import React from "react";
import { Student } from "./Student";
import { Outlet } from "react-router-dom";

function Profile (props) {
    return (
        <>
            {props.children}
            <Student />
            <Outlet />
        </>
    );
}


export {Profile}
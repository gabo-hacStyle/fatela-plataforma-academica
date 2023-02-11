import React from "react";
import { Student } from "./Student";

function Profile (props) {
    return (
        <>
            {props.children}
            <Student /> 
        </>
    );
}


export {Profile}
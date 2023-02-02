import React from "react";

function Header (props) {
    return (
        <header className="Header-container"> 
            {props.children}
        </header>
    );
}

export {Header}
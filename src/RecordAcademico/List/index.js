import React from "react";
import './List.css'
function List (props) {

    return (
        <div className="list-container">
            <ul>
                <li>{props.render()}</li>
            </ul>
        </div>
    );
}

export {List}
import React from "react";
import './Searcher.css'

function Searcher () {
    return (
        <div className="Searcher-container">
            <input
                placeholder="Buscar curso"
            />
            <button> Buscar </button>
        </div>
    );
}

export {Searcher}
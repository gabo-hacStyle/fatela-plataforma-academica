import React from "react";
import './Item.css'

function Item (props) {
    return (
        <div className="Item-container">
            <div className="Item-title--container">
                <h3 className="Item-title">{props.nombre}</h3>
            </div>
            <div className="Item-content--container">
                <div className="Item-content--info Item-content">
                    <p>Profesor: <span>{props.profesor}</span></p>
                    <p>Programa: <span>{props.programa}</span></p>
                </div>
                <div className="Item-content--grades Item-content">
                    <table>
                        <tbody>
                            <tr>
                                <td><p>Talleres</p></td>
                                {props.tallerGrades()}
                            </tr>
                            <tr>
                                <td><p>Evaluacion</p></td>
                                {props.evaluacionGrades()}
                                
                            </tr>
                            
                        </tbody>
                        
                        
                    </table>

                </div>
            </div>
        </div>
    );
}

export {Item}
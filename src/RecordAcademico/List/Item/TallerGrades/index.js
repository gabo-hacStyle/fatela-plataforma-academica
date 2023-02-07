import React from "react";

function TallerGrades (props) {
    console.log('Grades: ' + props.grades)
    return (
        <td>{props.grades}</td>
    );
}
export {TallerGrades}
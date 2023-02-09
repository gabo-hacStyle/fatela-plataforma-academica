import React from "react";
import {List} from './List/index'
import {Item} from './List/Item/index'
import {Taller} from './List/Item/Taller'
import {Evaluacion} from './List/Item/Evaluacion'
import { students } from "../../Hooks/data"; 
import { useParams } from "react-router-dom";
function Notas () {
    const {slug} =  useParams();
    const person = students.find(student => student.slug === slug);

    return (
        <>
            <List 
                render={
                    () => person.courses.map((course, index) => (
                            <Item
                                nombre={course.nombre}
                                profesor={course.profesor}
                                programa={course.programa}
                                tallerGrades={() =>  
                                    course.workGrades.map((grade, index) => ( 
                                        <Taller 
                                            key={index}
                                            grades={grade.value}
                                        />
                                    ))}     
                                evaluacionGrades={ () => 
                                    course.examGrades.map((grade, index) => (
                                        <Evaluacion 
                                            key={index}
                                            grades={grade.value}
                                        />
                                    ))}                       
                                key={index}
                            />)
                )}
            />
        </>
    )
}

export {Notas}
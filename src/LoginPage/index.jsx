import React from "react";
import './LoginPage.css'
import { students } from "../data";
import {Link, Outlet} from 'react-router-dom'

function LoginPage () {
    return (
        <>
        <Outlet />
            <h1>Bienvenido!</h1>
            <div className="form-login--container">
            <form>
                <label>Login</label>
                <input placeholder="Usuario" type="email" name="" id="" />
                <input placeholder="Contraseña" type="password" name="" id="" />
                <button>Entrar</button>
                {students.map(student => (
                    <StudentLink key={student.slug} student={student} />
                ))}
            </form>
            </div>            
        </>
    )
}

function StudentLink ({student}) {
    return (
        <p>
            <Link to={`/${student.slug}`}>{student.name}</Link>
        </p>
    )
}
export {LoginPage}
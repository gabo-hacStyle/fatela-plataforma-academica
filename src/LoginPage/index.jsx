import React from "react";
import './LoginPage.css'
import { students } from "../data";
import {Link } from 'react-router-dom'

function LoginPage () {
    const [user, setUser] = React.useState('');
    const userRegistration = (event) => {
        return setUser(event.target.value)
    }

    return (
        <>
            <div id="welcome">
                <h1>Bienvenido!</h1>
            </div>
            
            <div className="form-login--container">
            <form>
                <label>Login</label>
                <input 
                    placeholder="Usuario" 
                    type="email"
                    onChange={userRegistration}    
                />
                <input placeholder="Contraseña" type="password" name="" id="" />
                <button
                    onClick={console.log(user)}
                >Entrar</button>
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
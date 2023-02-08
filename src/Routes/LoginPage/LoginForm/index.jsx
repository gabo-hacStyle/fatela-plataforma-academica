import React from "react";
import './LoginForm.css'
import { useNavigate } from 'react-router-dom'
import { students } from "../../../Hooks/data";

function LoginForm () {
    const navigate = useNavigate();
    const [user, setUser] = React.useState('')
    const verification = () =>
     (students.findIndex((student) => {
        if(student.name === user) {
            navigate('/'+ student.slug)
        } else {
            //alert('Usuario incorrecto')
            setUser('');
        }
    }));
    return (
        <> 
            <div id="welcome">
                <h1 id="welcome-text">Bienvenido!</h1>
            </div>
            <div className="form-login--container">
            <form>
                <label>Login</label>
                <input 
                    placeholder="Usuario" 
                    type="text"
                    onChange={(event) => setUser(event.target.value)}    
                />
                <input placeholder="Contraseña" type="password" name="" id="" />
                <button onClick={verification}>Entrar</button>
               </form>
            </div>            
        </>
    )
}

export {LoginForm}
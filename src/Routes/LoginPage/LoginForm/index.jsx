import React from "react";
import './LoginForm.css'
import { useNavigate } from 'react-router-dom'

function LoginForm () {
    const navigate = useNavigate()
    const [user, setUser] = React.useState('');
    const userRegistration = (event) => {
        return setUser(event.target.value)
    }
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
                    onChange={userRegistration}    
                />
                <input placeholder="Contraseña" type="password" name="" id="" />
                <button onClick={() => navigate('/alfredo-murcia/')}>Entrar</button>
               </form>
            </div>            
        </>
    )
}

export {LoginForm}
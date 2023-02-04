import React from "react";
import './LoginPage.css'

function LoginPage () {
    return (
        <>
            <h1>Bienvenido!</h1>
            <div className="form-login--container">
            <form>
                <label>Login</label>
                <input placeholder="Usuario" type="email" name="" id="" />
                <input placeholder="Contraseña" type="password" name="" id="" />
                <button>Entrar</button>
            </form>
            </div>            
        </>
    )
}

export {LoginPage}
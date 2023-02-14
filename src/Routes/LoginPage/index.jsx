import React from "react";
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'
import { students } from "../../Hooks/data";
import { ErrorPage } from "./Error";

function LoginPage ({submitEvent, slug}) {
    //Para que nos lleve a la pagina correspondiente
    const navigate = useNavigate();
    //Estado Local para el usuario 
    const [user, setUser] = React.useState('')

    //Función para guardar el valor del input en user
    const onChange = (event) => setUser(event.target.value);
    
    //Funcion para verificar buscar el user 
    const verify = students.find((student) => student.name === user)
    //función al llenar el formulario para verificar si el user existe
    
    const onSubmit = (event) => {
        event.preventDefault();
        if(!!verify){
            console.log(user)
            console.log(verify.slug)
            submitEvent(verify.slug)
            navigate('/' + slug) 
        } else{
            setUser('')
            console.log('Error')
            return (<ErrorPage />)
        }
    }

    return (
        <> 
            <div id="welcome">
                <h1 id="welcome-text">Bienvenido!</h1>
            </div>
            <div>Usuarios para probar:
                <ul>
                    <li>Alfredo Murcia</li>
                    <li> Diego Papaya</li>
                    <li>Alex Fajardo</li>
                    <li>Gabo</li>
                </ul>
            </div>
            <div className="form-login--container">
            <form onSubmit={onSubmit}>
                <label>Login</label>
                <input 
                    placeholder="Usuario" 
                    type="text"
                    onChange={onChange} 
                />
                <input placeholder="Contraseña" type="password" name="" id="" />
                <button type="submit">Entrar</button>
                
               </form>
            </div>            
        </>
    )
}

export {LoginPage}
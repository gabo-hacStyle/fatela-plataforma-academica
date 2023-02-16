import React from "react";
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'
import { students } from "../../Hooks/data";
import { useForm } from "../../Hooks/useForm";
//import { ErrorPage } from "./Error";

function LoginPage () {
    //Para que nos lleve a la pagina correspondiente
    const navigate = useNavigate();
    //Estado Local para el usuario 
    //const [user, setUser] = React.useState('')

    //Función para guardar el valor del input en user
    //const onChange = (event) => setUser(event.target.value);
    const { name, password, onInputChange, onResetForm } = useForm({
        name:'',
        password: '',
    });


    //Funcion para verificar buscar el user 
    const verify = students.find((student) => student.name === name)
    //función al llenar el formulario para verificar si el user existe
    
    const login = (event) => {
        event.preventDefault();
        if(verify){
            navigate('/' + verify.slug, {
                replace: true,
                state: {
                    logged: true,
                }
            }) 
            onResetForm();

        } else{
            onResetForm();
            console.log('Usuario no existe')
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
            <form onSubmit={login}>
                <h2>Login</h2>
                <input 
                    placeholder="Usuario"
                    name="name" 
                    type="text"
                    value={name}
                    onChange={onInputChange} 
                />
                
                <input 
                    placeholder="Contraseña" 
                    type="password" 
                    name='password' 
                    value={password} 
                    onChange={onInputChange} 
                />
                
                <button>Entrar</button>
                
               </form>
            </div>            
        </>
    )
}

export {LoginPage}
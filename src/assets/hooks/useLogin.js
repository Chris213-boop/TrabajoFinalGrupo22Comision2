import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAut from './useAut'; //llamado a las autorizaciones

function useLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    //contiene la funcion de login, estado de aut y user
    const { login, isAuthenticated, user } = useAut();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("useEffect disparado"); //verificamos que useEffect se este ejecutando
        console.log("isAuthenticated:", isAuthenticated); //verifica si el usuario esta logueado o no
        console.log("user:", user); // verifica que user existe y tiene un rol valido como "ADMINISTRATIVO" o "CLIENTE"

        if (isAuthenticated) { //solo entra aqui si el usuario esta autenticado
            if (user?.rol === 'ADMINISTRATIVO') {
                console.log("Redirigiendo a /home"); //verifica que el rol es "ADMINISTRATIVO"
                navigate('/home', { replace: true });
            } else if (user?.rol === 'CLIENTE') { //verifica que el rol es "CLIENTE"
                console.log("Redirigiendo a /nosotros");
                navigate('/home', { replace: true });
            } else {
                console.log("Rol desconocido, redirigiendo a /error"); //muestra este mensaje en otro caso
                navigate('/error', { replace: true });
            }
        }
    }, [isAuthenticated, user, navigate]);

    const Enviar = (e) => {
        e.preventDefault();
        console.log("Formulario enviado"); // verifica que el formulario se envio
        setLoginError(''); //Limpiar errores anteriores

        if (!username || !password) {
            setLoginError('Por favor, ingresa usuario y contraseña.');
            return;
        }

        const result = login({ username, password });
        console.log("Resultado login:", result);

        if (!result.success) {
            setLoginError(result.message || 'Error de autenticacion desconocido.')
        }
    };
    return {
        username,
        setUsername,
        password,
        setPassword,
        loginError,
        Enviar
    };
}
export default useLogin;
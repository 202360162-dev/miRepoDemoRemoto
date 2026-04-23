import { use, useState } from "react";

export default function AppCookieHttpOnly() {
    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("1234");
    const [mensaje, setMensaje] = useState("");

    const login = () => {
        const rest= await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {"content-type": "application/json"},
            credentials: "include",
            body: JSON.stringify({ username, password })
        });
        const data = await rest.json();
        setMensaje(data.message);
    };
        const obtenerPerfil = async () => {
        const rest = await fetch("http://localhost:3000/perfil", {
            credentials: "include"
        });
        const data = await rest.json();
        setMensaje(data.message);
    };

    const logout = async () => {
        await fetch("http://localhost:3000/logout", {
            method: "POST",
            credentials: "include"
        });
        const data = await rest.json();
        setMensaje(data.message);
    };
}

return (
    <div>
        <h2>Autenticacion con cookie segura</h2>
        <input
        value = {username}
        onChange = {(e) => setUsername(e.target.value)}
        placeholder="Username"
        type="password"
        />
        <button onClick= {login}>
            Login
        </button>
        <button onClick={obtenerPerfil}>
            Obtener Perfil
        </button>
        <button onClick={logout}>
            Logout
        </button>

        <div>
            <strong>Respuesta:</strong>
            <p>{mensaje}</p>
        </div>
    
    </div>
)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const ingresar = (e) => {
    e.preventDefault();
    navigate("/tareas");
  };

  return (
    <form onSubmit={ingresar}>
      <h2>Iniciar Sesión</h2>
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Ingresar</button>
    </form>
  );
}
export default Login;

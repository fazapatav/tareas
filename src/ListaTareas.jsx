import React, { useState, useEffect } from "react";
import Tarea from "./Tarea";

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState({ title: "", description: "" }); //2

  //obtener tareas
  useEffect(() => {
    // Fetch de tareas desde MockAPI
    fetch("https://672f84b966e42ceaf15df49b.mockapi.io/tareas")
      .then((response) => response.json())
      .then((data) => setTareas(data));
  }, []);

  // Añadir nueva tarea
  const añadirTarea = (e) => {
    e.preventDefault();
    fetch("https://672f84b966e42ceaf15df49b.mockapi.io/tareas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevaTarea),
    })
      .then((response) => response.json())
      .then((tarea) => setTareas([...tareas, tarea]));
    setNuevaTarea({ titulo: "", descripcion: "" });
  };

  return (
    <div>
      <h2>Mis Tareas</h2>
      <form onSubmit={añadirTarea}>
        <input
          type="text"
          placeholder="Título"
          value={nuevaTarea.titulo}
          onChange={(e) =>
            setNuevaTarea({ ...nuevaTarea, titulo: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Descripción"
          value={nuevaTarea.descripcion}
          onChange={(e) =>
            setNuevaTarea({ ...nuevaTarea, descripcion: e.target.value })
          }
          required
        />
        <button type="submit">Agregar Tarea</button>
      </form>
      {tareas.map((tarea) => (
        <Tarea key={tarea.id} miTarea={tarea} />
      ))}
    </div>
  );
}
export default ListaTareas;

import React from "react";

function Tarea({ miTarea }) {
  return (
    <div className="tarea">
      <h3>{miTarea.titulo}</h3>
      <p>{miTarea.descripcion}</p>
    </div>
  );
}
export default Tarea;

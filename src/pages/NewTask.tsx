import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Task } from "../types/task";

function NewTask() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  function handleAdd() {
    if (title.trim() === "") {
      alert("El título es obligatorio");
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      title: title.trim(),
      done: false
    };

    localStorage.setItem("task", JSON.stringify(newTask));
    navigate("/tasks");
  }

  return (
    <div>
      <h2>Crear Nueva Tarea</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título de la tarea"/>
      <button onClick={handleAdd}>Agregar</button>
    </div>
  );
}

export { NewTask };
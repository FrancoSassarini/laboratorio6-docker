import { useState, useEffect } from "react";
import type { Task } from "../types/task";

function Tasks() {
  
  const initialTask: Task = { 
    id: "", 
    title: "", 
    done: false 
  };

  const [task, setTask] = useState<Task>(initialTask);

  
  useEffect(() => {
    const saved = localStorage.getItem("task");
    if (saved) setTask(JSON.parse(saved) as Task);
  }, []);

  
  useEffect(() => {
    if (task.id !== "") {
      localStorage.setItem("task", JSON.stringify(task));
    }
  }, [task]);


  function handleDelete() {
    localStorage.removeItem("task");
    setTask(initialTask);
  }

 
  function handleConfirm() {
    const confirmedTask: Task = {
      id: task.id,
      title: task.title,
      done: true, 
    };
    setTask(confirmedTask);
  }

  return (
    <div>
      <h2>Lista de Tareas</h2>
      {task.id === "" ? (
        <p>No hay tarea</p>
      ) : (
        <div>
          <p><strong>ID:</strong> {task.id}</p>
          <p><strong>Título:</strong> {task.title}</p>
          <p><strong>Estado:</strong> {task.done ? "Completada" : "Pendiente"}</p>
          <button onClick={handleConfirm} disabled={task.done}> Confirmar tarea </button>
          <button onClick={handleDelete}>Eliminar</button>
        </div>
      )}
    </div>
  );
}

export { Tasks };
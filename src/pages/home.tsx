import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Bienvenido a la tarea 5</h1>
      <div>
        <button onClick={() => navigate("/tasks")}>Ver Tarea</button>
        <button onClick={() => navigate("/tasks/new")}>Crear Tarea</button>
      </div>
    </div>
  );
}

export { Home };

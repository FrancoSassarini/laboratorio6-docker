import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Tasks } from "./pages/Tasks";
import { NewTask } from "./pages/NewTask";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/new" element={<NewTask />} />
        </Routes> 
    </BrowserRouter>
  );
}

export default App;
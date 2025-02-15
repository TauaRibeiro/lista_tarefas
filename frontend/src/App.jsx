import "./App.css";
import Titulo from "./componentes/Titulo/Titulo";
import Tarefas from "./componentes/Tarefas/Tarefas.jsx";

function App() {
  return (
    <div>
      <Titulo>Lista de tarefas</Titulo>

      <Tarefas />
    </div>
  );
}

export default App;

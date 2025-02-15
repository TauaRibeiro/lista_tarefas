import Campo from "../Campo/Campo.jsx";
import "./EstilosTarefas.css";

function Tarefas() {
  return (
    <div className="container-tarefas">
        <div className="tarefas">
            <form action="post">
                <Campo type="text" placeholder="Digite o título do tarefa" />
            </form>
            <form action="post">
                <Campo type="text" placeholder="Digite o responsável da tarefa" />
            </form>
            <form action="post">
                <Campo type="text" placeholder="Selecione a prioridade da tarefa" />
            </form>
            <form action="post">
                <Campo type="area" placeholder="Digite o título do tarefa" />
            </form>
        </div>
    </div>
  );
}

export default Tarefas;

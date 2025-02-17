import Campo from "../Campo/Campo.jsx";
import AreaTexto from "../AreaTexto/AreaTexto.jsx";
import "./EstilosTarefas.css";

function Tarefas() {
  return (
    <div className="container-tarefas">
        <div className="tarefas">
            <form action="post">
                <Campo type="text" placeholder="Digite o título do tarefa" />

                <Campo type="text" placeholder="Digite o responsável da tarefa" />

                <Campo type="text" placeholder="Selecione a prioridade da tarefa" />

                <Campo type="area" placeholder="Digite o título do tarefa" />

                <AreaTexto rows={"4"} cols={"50"} placeholder="Digite a descrição da tarefa" maxlength={"200"}></AreaTexto>

                <Campo type="submit"></Campo>
            </form>
        </div>
    </div>
  );
}

export default Tarefas;

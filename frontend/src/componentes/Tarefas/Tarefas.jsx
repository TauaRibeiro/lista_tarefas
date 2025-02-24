import Campo from "../Campos/Campo.jsx";
import AreaTexto from "../AreaTexto/AreaTexto.jsx";
import Selecionar from "../Campos/Selecionar.jsx";
import "./EstilosTarefas.css";
import axios from 'axios';
import { useState } from "react";

function Tarefas({ criarTarefa}) {
  const [inputTitulo, setInputTitulo] = useState("");
  const [inputResponsavel, setInputResponsavel] = useState("");
  const [inputPrioridade, setInputPrioridade] = useState("0");
  const [inputDescricao, setInputDescricao] = useState("");
  
  const manuzearEnvio = async (e) => {
    e.preventDefault();

    const dadosForm = new FormData(e.currentTarget);

    const dados = Object.fromEntries(dadosForm.entries());

    try {
      const resposta = await axios.post('http://localhost:3000/tarefas/', dados);

      criarTarefa(dados);
    } catch(error) {
      console.error('Erro ao enviar o formulário', error);
    }finally {
      setInputTitulo("");
      setInputResponsavel("");
      setInputPrioridade("0")
      setInputDescricao("");
    }
    
  }

  return (
    <div className="container-tarefas">
        <div className="tarefas">
            <form onSubmit={manuzearEnvio} action="post">
                <Campo type="text" name="titulo" 
                  placeholder="Digite o título do tarefa" required
                  value={inputTitulo} onChange={(event) => setInputTitulo(event.target.value)}/>

                <Campo type="text" name="responsavel" 
                  placeholder="Digite o responsável da tarefa" required 
                  value={inputResponsavel} onChange={(event) => setInputResponsavel(event.target.value)}/>

                <Selecionar name="prioridade" required value={inputPrioridade} 
                  onChange={(event) => setInputPrioridade(event.target.value)}>
                  <option value="0">Selecione a prioridade da tarefa</option>
                  <option value="ALTA">Alta</option>
                  <option value="MÉDIA">Média</option>
                  <option value="BAIXA">Baixa</option>
                </Selecionar>

                <AreaTexto rows={"4"} cols={"50"} placeholder="Digite a descrição da tarefa" 
                  name="descricao" maxLength={"200"} required
                  value={inputDescricao} onChange={(event) => setInputDescricao(event.target.value)}></AreaTexto>

                <Campo type="hidden" name="status" value="pendente"></Campo>

                <Campo type="submit"></Campo>    
            </form>
        </div>
    </div>
  );
}

export default Tarefas;

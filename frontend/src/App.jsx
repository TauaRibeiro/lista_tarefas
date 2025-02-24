import "./App.css";
import Titulo from "./componentes/Titulo/Titulo";
import Tarefas from "./componentes/Tarefas/Tarefas.jsx";
import { useEffect, useState } from "react";
import Botao from "./componentes/Botao/Botao.jsx";

function App() {
  const [tarefas, setTarefas] = useState(JSON.parse(localStorage.getItem("tarefas")))
  
  useEffect(()=>{
    localStorage.setItem("tarefas", JSON.stringify(tarefas) || []);
  }, [tarefas]);

  useEffect(() => {
    async function getTarefas() {
      const resposta = await fetch("http://localhost:3000/tarefas", {method: "GET"});

      const dados = await resposta.json();

      setTarefas(dados);
    }

    getTarefas();
  }, []);

  function criarTarefa(novaTarefa){
    setTarefas([...tarefas, novaTarefa]);
  }

  return (
    <div>
      <Titulo>Lista de tarefas</Titulo>

      <Tarefas 
        criarTarefa= {criarTarefa}/>

      <Botao>Teste Botão</Botao>
    </div>
  );
}

export default App;

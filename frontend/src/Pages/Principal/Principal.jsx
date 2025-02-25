import Titulo from "../../componentes/Titulo/Titulo.jsx";
import Tarefas from "../../componentes/Tarefas/Tarefas.jsx";
import { useEffect, useState } from "react";
import Botao from "../../componentes/Botao/Botao.jsx";
import { Link } from "react-router-dom";
import "./EstilosPrincipal.css";

function Principal(){
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
  
        <Link id="botao-link" to='/tarefas'>
            <Botao><p>Teste Botão</p></Botao>
        </Link>
      </div>
    );
}

export default Principal;

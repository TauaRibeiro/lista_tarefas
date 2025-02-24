import "./EstilosBotao.css";

function Botao(props){
    return (
        <div className="container-botao">
            <div className="botao">
                <button {...props}>{props.children}</button>
            </div>
        </div>
    );
}

export default Botao;

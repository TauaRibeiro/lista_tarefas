/* eslint-disable react/prop-types */
import "./EstilosTitulo.css";

function Titulo(props){
    return (
        <div className="container-titulo">
            <h1 className="titulo">{props.children}</h1>
        </div>
    );
}

export default Titulo;
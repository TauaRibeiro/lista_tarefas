/* eslint-disable react/prop-types */
import "./EstilosAreaTexto.css";

function AreaTexto(props){
    return (
        <div id="container_descricao">
            <div id="area_texto">
                <textarea {...props}>{props.children}</textarea>
            </div>
        </div>
    );
}

export default AreaTexto;
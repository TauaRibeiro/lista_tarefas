import "./EstilosCampo.css";

function Selecionar(props) {
    return (
        <div className="container-campo">
            <div className="campo">
                <select {...props}>
                    {props.children}
                </select>
            </div>

        </div>
    );
}

export default Selecionar;
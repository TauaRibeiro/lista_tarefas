import "./EstilosCampo.css"

function Campo(props){
    return (
        <div className="container-campo">
            <div className="campo">
                <input {...props} />
            </div>
        </div>
    );
}

export default Campo;
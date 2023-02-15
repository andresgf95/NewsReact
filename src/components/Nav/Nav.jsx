import { useState } from "react";

function Nav() {
    const [Vista, setVista] = useState("principal")
    function manexadorClick(evento) {
        setVista(evento.target.id)
    }
    return (
        <>
            <nav>
                <a id="principal" onClick={manexadorClick}>Principal</a>
                <a id="Lugo" onClick={manexadorClick}>Lugo</a>
                <a id="rexistro" onClick={manexadorClick}>Rexistro</a>
            </nav>
            {Vista === "principal" && <p>Mostrando principal</p>}
            {Vista === "Lugo" && <p>Lugo</p>}
            {Vista === "rexistro" && <p>Mostrando rexistro</p>}
        </>
    )
  }
  
  export default Nav;
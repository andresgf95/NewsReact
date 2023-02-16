import { useState } from "react";
import AccesoAreaPersoal from "../Acceso Area Persoal/AccesoAreaPersoal";
import CuadroFooter from "../Footer/footer";
import FormularioRexistro from "../Formulario de Rexistro/FormularioRexistro";
import Header from "../Header/Encabezado";
import Newsletter from "../Newsletter/Newsletter";



function Navegador() {
    const [Vista, setVista] = useState("principal")
    function manexadorClick(evento) {
        setVista(evento.target.id)
    }
    return (
        <>
            <Header/>
            <nav>
                <a id="<principal>" onClick={manexadorClick}>Principal</a>
                <a id="Lugo" onClick={manexadorClick}>Lugo</a>
                <a id="rexistro" onClick={manexadorClick}>Rexistro</a>
            </nav>
            {Vista === "principal" && <p>Mostrando principal</p>}
            {Vista === "Lugo" && <p>Lugo</p>}
            {Vista === "rexistro" && <p>Mostrando rexistro</p>}
            <Newsletter/>
            <CuadroFooter/>
        </>
    )
  }
  
  export default Navegador;
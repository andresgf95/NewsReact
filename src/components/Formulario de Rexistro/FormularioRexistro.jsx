import styles from './FormularioRexistro.module.css'

function FormularioRexistro() {
    return (
      <div className={styles.FormularioRexistro}>
        <h1 className={styles.TituloFormularioRexistro}>REXÍSTRATE EN FOLLAS GALEGAS!!</h1>
        <fieldset className={styles.DatosPersoaisFormularioRexistro}>  
            <label>
                <input type="text" placeholder="Nome"/>
            </label>
            <label>
                <input type="text" placeholder="Apelidos"/>
            </label>
            <label>
                <input type="text" placeholder="DNI/NIF"/>
            </label>            
            <label>
                <input type="text" placeholder="Código Postal"/>
            </label>
        </fieldset>
        <fieldset className={styles.DatosRexistroFormularioRexistro}>    
            <label>
                <input type="email" placeholder="Dirección email"/>
            </label>
            <label>
                <input type="email" placeholder="Repite a dirección email"/>
            </label>
            <label>
                <input type="text" placeholder="Número de teléfono"/>
            </label>
            <label>
                <input type="password" placeholder="Crea unha contrasinal"/>
            </label>
            <label>
                <input type="password" placeholder="Repite a contrasinal"/>
            </label>
        </fieldset>
        <input className={styles.SubmitFormularioRexistro} type="submit"/>     
      </div>
    );
  }
  
  export default FormularioRexistro;
import styles from './AccesoAreaPersoal.module.css'

function AccesoAreaPersoal() {
    return (
      <div className={styles.AccesoAreaPersoal}>
            <h1 className={styles.TituloAccesoAreaPersoal}>AREA PERSOAL</h1>
            <label>
                <input className={styles.NomeUsuarioAccesoAreaPersoal} type="text" placeholder="Nome de Usuario"/>
            </label>
            <label>
                <input className={styles.ContrasinalAccesoAreaPersoal} type="password" placeholder="Contrasinal"/>
            </label>
            <label>
                <input className={styles.SubmitAccesoAreaPersoal} type="submit"/>
            </label>
      </div>
    );
  }
  
  export default AccesoAreaPersoal;
  
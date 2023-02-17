import Styles from './NovaPrincipalAutonomica.module.css'

function NovaPrincipalAutonomica(props) {
  return (
    <div className={Styles.CorpoNova}>
        <article>
            <h2 className={Styles.TituloNova}>{props.titulo}</h2>
            <p className={Styles.ContidoNova}>{props.contido}</p>
        </article>
    </div>
  );
}
  
  export default NovaPrincipalAutonomica;
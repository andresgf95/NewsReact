import Styles from './NovaPrincipalInternacional.module.css'

function NovaPrincipalInternacional(props) {
  return (
    <div className={Styles.CorpoNova}>
        <article>
            <h2 className={Styles.TituloNova}>{props.titulo}</h2>
            <p className={Styles.ContidoNova}>{props.contido}</p>
        </article>
    </div>
  );
}
  
  export default NovaPrincipalInternacional;
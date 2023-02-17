import Styles from './ArtigoPrincipalOpinion.module.css'

function ArtigoPrincipalOpinion(props) {
  return (
    <div className={Styles.CorpoArtigo}>
        <article>
            <h2 className={Styles.TituloArtigo}>{props.titulo}</h2>
            <p className={Styles.ContidoArtigo}>{props.contido}</p>
        </article>
    </div>
  );
}
  
  export default ArtigoPrincipalOpinion;
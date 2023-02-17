import NovaPrincipalAutonomica from '../Novas principais/NovaPrincipalAutonomica';
import ArtigoPrincipalOpinion from '../Novas principais/ArtigoPrincipalOpinion';
import NovaPrincipalInternacional from '../Novas principais/NovaPrincipalInternacional';
import Styles from './ColumnaPrincipal.module.css';

function ColumnaPrincipal() {
  return (
    <div className={Styles.CorpoColumnaPrincipal}>
      <div className={Styles.Internacional}>
        <NovaPrincipalInternacional titulo='Alberto Núñez Feijoo novo presidente de Marte'
        contido='Despois do fracaso nas eleccións estatais de 2023, e a posterior marcha a Marte, enmarcada na misión Spacex Nº666, Nuñez Feijoo convirtese no primeiro humano en liderar políticamente á colonia establecida. As suas palabras foron as seguintes: Non quero deixar este mundo sen probar as pipas facundo.'/>
      </div>
      <div className={Styles.Autonomica}>
        <NovaPrincipalAutonomica className={Styles.Autonomica} titulo='Abanca compra un 20% de accións da Xunta de Galicia'
        contido='É oficial, Abanca convírtese no primeiro accionista da Xunta de Galicia, adquirindo un paquete de accións por valor dun 20% do total da institución. Con esta acción, o popular edificio de San Caetano, en Santiago de Compostela, donde conflue a administración pública galega, pasa a chamarse "Edificio Administrativo Abanca San Caetano Xunta de Galicia"'/>
      </div>
      <div className={Styles.Opinion}>
        <ArtigoPrincipalOpinion className={Styles.Opinion} titulo='Ovnis, estamos a vivir unha invasión silenciosa?'
        contido='Cando tiña 5 anos, alá polo ano 2000, atopábame de excursión polos Cañóns do Sil, no eido dunha excursión familiar. Recordo que aquela noite, facendo acampada con apenas uns sacos de dormir e unha fogueira, vinme na necesidade de satisfacer á miña vexiga, a cal estaba ateigada de líquido, polo que me apartei un pouco da zona común buscando intimidade. Foi entón cando vin unha extraña luz, a cal se acercou e me dixo en baixiño: Neniño, tes fame? ven que che aso un ovo e un chourizo. 20 anos despois, cada vez escoito máis esta expresión. Estamos ante a invasión do Touciño.'/>
      </div>
    </div>
  );
}
  
  export default ColumnaPrincipal;
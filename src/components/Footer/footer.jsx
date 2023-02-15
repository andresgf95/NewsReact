
function CuadroFooter() {
  return (
    <footer className={Styles.Footer}>
        <div className={Styles.AvisoLegal}>
            <h2 className={Styles.TituloAvisoLegal}>Aviso Legal e Cookies</h2>
            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit consequuntur amet deserunt soluta, blanditiis nulla cupiditate laborum minima! Minus laboriosam corrupti aliquam assumenda voluptate reiciendis fugiat repellat voluptatum amet culpa.</p>
        </div>
        <div className={Styles.Contacto}>
            <h2 className={Styles.TituloContacto}>Contacto</h2>
            <p>dirección - Rua da editorial 66 S/N Santiago de Compostela</p>
            <p>teléfono de contacto - 666666666</p>
            <p>dirección email - contacto@follasgalegas.gal</p>
        </div> 
    </footer>
  );
}
  
  export default CuadroFooter;
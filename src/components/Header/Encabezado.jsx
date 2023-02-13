import logoFG from '../../img/LogoSenFondo.png';
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.Header}>
      <img src={logoFG} alt="logo" />
      <h1 className={styles.titulo}>Follas Galegas</h1>
    </div>
  );
}
  
  export default Header;
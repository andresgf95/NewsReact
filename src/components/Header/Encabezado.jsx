import logoFG from '../../img/FollasGalegas.png';
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.Header}>
      <img src={logoFG} alt="logo" />
    </div>
  );
}
  
  export default Header;
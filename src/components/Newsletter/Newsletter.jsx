import styles from './Newsletter.module.css'

function Newsletter() {
  return (
    <div className={styles.Newsletter}>
        <h1 className={styles.TituloNesletter}>SUSCRÍBETE Á NOSA NEWSLETTER!!</h1>
        <input className={styles.InputEmail} type="email" placeholder='Introduce o teu email' />
        <input className={styles.InputSubmit} type="submit" />
    </div>
  );
}
  
  export default Newsletter;
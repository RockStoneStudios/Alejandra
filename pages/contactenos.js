import styles from '../styles/Contactenos.module.css'

function contactenos() {
  return (
    <div className={styles.container}>
        <h1 className={styles.titulo}>Contactanos</h1>
        <h2 className={styles.correo}>ejemplo@gmail.com</h2>
        <h2 className={styles.telefono}>Tel : <b>310506037</b></h2>
    </div>
  )
}

export default contactenos
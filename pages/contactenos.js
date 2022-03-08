import styles from '../styles/Contactenos.module.css'

function contactenos() {
  return (
    <div className={styles.container}>
        <h1 className={styles.titulo}>CONTÁCTENOS</h1>
        <h2 className={styles.correo}><span>Para mayor información o cotización de nuestros servicios, nos puede escribir al siguiente correo</span></h2>
           <br/>
           <h2 className={styles.correoI}>mosst@outlook.es</h2>
        <h2 className={styles.telefono}>Celular : <b>3138952137</b></h2>
    </div>
  )
}

export default contactenos
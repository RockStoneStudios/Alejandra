import styles from '../styles/Blog3.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
const Blog = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
             <div className={styles.topRow}>
                 <h4>Resolución 0312 de 2019</h4>
             </div>
             <div className= {styles.content}>
               <h2 className={styles.titulo}></h2>
               <p>Estándares Mínimos del Sistema de Gestión en Seguridad y Salud en el Trabajo</p>
              <Link href="https://www.mintrabajo.gov.co/documents/20147/59995826/Resolucion+0312-2019-+Estandares+minimos+del+Sistema+de+la+Seguridad+y+Salud.pdf"><a className={styles.button}
              >Leer Mas</a></Link>
             </div>
            </div>
        </div>
    )
}

export default Blog;

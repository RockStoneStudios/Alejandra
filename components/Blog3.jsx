import styles from '../styles/Blog3.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
               <button className={styles.button}>Leer Mas</button>
             </div>
            </div>
        </div>
    )
}

export default Blog;

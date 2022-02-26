import styles from '../styles/Blog1.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Blog = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
             <div className={styles.topRow}>
                 <h4>COCOLAB</h4>
             </div>
             <div className= {styles.content}>
               <h2 className={styles.titulo}></h2>
               <p>Comité de Conveniencia Laboral</p>
               <button className={styles.button}>Leer Mas</button>
             </div>
            </div>
        </div>
    )
}

export default Blog;

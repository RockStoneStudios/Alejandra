import styles from '../styles/Blog5.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
const Blog = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
             <div className={styles.topRow}>
                 <h4>Normatividad</h4>
             </div>
             <div className= {styles.content}>
               <h2 className={styles.titulo}></h2>
               <p>Resoluciones, Circulares, Leyes, Decretos y Comunicados</p>
              <Link href="/normatividad"><button className={styles.button}>Leer Mas</button></Link> 
             </div>
            </div>
        </div>
    )
}

export default Blog;

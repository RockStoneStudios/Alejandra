import styles from '../styles/Blog1.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
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
             
               <Link href="https://www.mintrabajo.gov.co/documents/20147/45107/resolucion_00000652_de_2012.pdf/d52cfd8c-36f3-da89-4359-496ada084f20?fbclid=IwAR3lx3A6JcNl8lRkVoJHK5ch3j2tkXLrHyiwLQ0r6oAyREI7Nb7ssNlMEuA"><a className={styles.button}>Leer Mas</a></Link>
             </div>
            </div>
        </div>
    )
}

export default Blog;

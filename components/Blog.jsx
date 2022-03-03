import styles from '../styles/Blog.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import Link from 'next/link';
import Router from 'next/router';

const Blog = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
             <div className={styles.topRow}>
                 <h4>COPASST</h4>
             </div>
             <div className= {styles.content}>
               <h2 className={styles.titulo}></h2>
               <p>Comité Paritario en Seguridad y Salud en el Trabajo</p>
           <Link href="http://www.bogotajuridica.gov.co/sisjur/normas/Norma1.jsp?i=5411"><a className={styles.button}> Leer Mas </a></Link>
             </div>
            </div>
        </div>
    )
}

export default Blog;

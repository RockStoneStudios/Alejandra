import styles from '../styles/Blog4.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
const Blog = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
             <div className={styles.topRow}>
                 <h4>COVID-19 </h4>
             </div>
             <div className= {styles.content}>
               <h2 className={styles.titulo}></h2>
               <p>Protocolos para prevenir y mitigar el Covid-19</p>
              <Link href="/covid"><button className={styles.button}>Leer Mas</button></Link> 
             </div>
            </div>
        </div>
    )
}

export default Blog;

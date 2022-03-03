import styles from '../styles/Blog2.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
const Blog = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
             <div className={styles.topRow}>
                 <h4>Decreto 1072 de 2015</h4>
             </div>
             <div className= {styles.content}>
               <h2 className={styles.titulo}></h2>
               <p>Decreto Único Reglamento de Trabajo</p>
               <Link href="https://www.mintrabajo.gov.co/documents/20147/0/DUR+Sector+Trabajo+Actualizado+a+15+de+abril++de+2016.pdf/a32b1dcf-7a4e-8a37-ac16-c121928719c8?fbclid=IwAR1Zt2g2Z85dxI85AzsOdzfehknAuiPbK-a42LzyA5irYPpFAIo1x1Nsh_o"><a className={styles.button}>Leer Mas</a></Link>
             </div>
            </div>
        </div>
    )
}

export default Blog;

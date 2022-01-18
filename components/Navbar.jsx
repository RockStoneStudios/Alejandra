import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

 const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.itemL}>
              <h1 className={styles.logo}>M.O</h1>
            </div>
             <div className={styles.itemR}>
                 <ul className={styles.list}>
                     <li className = {styles.listItem}>Home</li>
                     <Link href= "/valores">
                     <li className = {styles.listItem}>Valores</li>
                     </Link>
                     <li className = {styles.listItem}>Quienes Somos</li>
                     <li className = {styles.listItem}>Planes SG-SST</li>
                     <li className = {styles.listItem}>Otros Servicios</li>
                     <li className = {styles.listItem}>Contactenos</li>
                 </ul>
            </div>          
        </div>
    )
}

export default Navbar;

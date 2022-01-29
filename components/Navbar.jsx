import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';
import DropDown from './DropDown'

 const Navbar = () => {
   
     const [open,setOpen] = useState(false);
    
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
                     <Link href="/sgsst">

                     <li className = {styles.listItem} onMouseEnter={()=> setOpen(!open)}>Planes SG-SST </li>
                     </Link>
                     
                    <Link href="/otros">
                     <li className = {styles.listItem}>Otros Servicios</li>
                    </Link>
                     <li className = {styles.listItem}>Contactenos</li>
                 </ul>
            </div>          
        </div>
    )
}

export default Navbar;

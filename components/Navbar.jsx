import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';
import DropDown from './DropDown';
import logo from '../public/img/logo22.png';
import Image from 'next/image';

 const Navbar = () => {
   
     const [open,setOpen] = useState(false);
    
    return (
        <div className={styles.container}>
            <div className={styles.itemL}>
           <h1>M.O</h1>
            </div>
             <div className={styles.itemR}>
                 <ul className={styles.list}>
                     <Link href="/">
                     <li className = {styles.listItem}>Home</li>
                     </Link>
                     <Link href= "/valores">
                     <li className = {styles.listItem}>Valores</li>
                     </Link>
                     <Link href="/QuienesSomos">
                     <li className = {styles.listItem}>Quienes Somos</li>
                     </Link>
                     <Link href="/sgsst">

                     <li className = {styles.listItem} onMouseEnter={()=> setOpen(!open)}>Planes SG-SST </li>
                     </Link>
                     
                    <Link href="/otros">
                     <li className = {styles.listItem}>Otros Servicios</li>
                    </Link>
                    <Link href="/contactenos">
                     <li className = {styles.listItem}>Contactenos</li>
                    </Link>
                 </ul>
            </div>          
        </div>
    )
}

export default Navbar;

import {useState} from 'react'
import Link from 'next/link';
import {FaTimes,FaBars} from 'react-icons/fa';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  const [open,setOpen] = useState(false);
  return (
    <>
      <div className={styles.menu}>
        <label className={styles.logo} >
          <Image src= "/img/logo22.png" width={100} height={92}/>
          </label>
          <ul className={open ?[styles.menu_items,styles.show].join(' ') : styles.menu_items}>
            <li onClick={()=>setOpen(false)}><Link href="/"><a>Home</a></Link></li>
            <li  onClick={()=>setOpen(false)}><Link href="/valores"><a>Valores</a></Link></li>
            <li onClick={()=>setOpen(false)}><Link href="/QuienesSomos"><a>Quiénes Somos</a></Link></li>
            <li onClick={()=>setOpen(false)}><Link href="/sgsst"><a>Planes SG-SST</a></Link></li>
            <li onClick={()=>setOpen(false)}><Link href="/otros"><a>Otros Servicios</a></Link></li>
            <li onClick={()=>setOpen(false)}><Link href="/contactenos"><a>Contactenos</a></Link></li>
          </ul>
      <span className= {styles.btn_menu} onClick={()=>setOpen(!open)}>
       {open? (<FaTimes size={20}/>):(<FaBars size={20}/>)} 
      </span>
      </div>
    </>
  )
}

export default Navbar

import styles from '../styles/Footer.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWhatsapp,faFacebook,faInstagram} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';


const Footer = () => {
    return (
        <div className={styles.container}>
           <div className={styles.informacion}>
              <h3 className={styles.titulo}>Direccion</h3>
              <p className={styles.parrafo}>
                  Cra 52 #51 47
                  <br/> Bello ant
                  <br/> Oficina 1804
              </p>
           </div>
           <div className={styles.redes}>
                <a href='https://api.whatsapp.com/send?phone=+573138952137&text= Hola Alejandra necesito mas informacion'>
                <div className={styles.whatsapp}>
                   <FontAwesomeIcon size='2x' icon={faWhatsapp}/>

               </div>
                </a>
               <div className={styles.facebook}>
                   <FontAwesomeIcon  size='2x' icon={faFacebook}/>

               </div>
               <div className={styles.instagram}>
                   <Link href="https://www.instagram.com/mo_ssst/?fbclid=IwAR3JUejh2mQuJS6RCaeqRTYe75c6jJG4SURUvVYEeb5CKNV-QfBnwK_rS-0"><a>
                   <FontAwesomeIcon size= "2x" icon={faInstagram}/>
                    </a></Link>
                   
                 

               </div>
           </div>
        </div>
    )
}

export default Footer;

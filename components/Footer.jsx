
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
                   <Link href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fmo_ssst%2F%3Ffbclid%3DIwAR3JUejh2mQuJS6RCaeqRTYe75c6jJG4SURUvVYEeb5CKNV-QfBnwK_rS-0&h=AT013lEAcCwxdHIalyF5a0hv58_vf4vb28gmv-xqkYvpZly08EujFqAmiCZk-59nRSFuBtRJyLXSabG3VcUiAT8p2E3H2D_ZYKEQ9dB0lZXSYDi4G9rleaufAajqfUo5-bY"><a>
                   <FontAwesomeIcon size= "2x" icon={faInstagram}/>
                    </a></Link>
                   
                 

               </div>
           </div>
        </div>
    )
}

export default Footer;

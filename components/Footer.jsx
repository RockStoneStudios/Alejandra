
import styles from '../styles/Footer.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWhatsapp,faFacebook,faInstagram} from '@fortawesome/free-brands-svg-icons';


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
                <a href='https://api.whatsapp.com/send?phone=+573046061784&text= Hola Alejandra necesito mas informacion'>
                <div className={styles.whatsapp}>
                   <FontAwesomeIcon icon={faWhatsapp}/>

               </div>
                </a>
               <div className={styles.facebook}>
                   <FontAwesomeIcon icon={faFacebook}/>

               </div>
               <div className={styles.instagram}>
                   <FontAwesomeIcon icon={faInstagram}/>

               </div>
           </div>
        </div>
    )
}

export default Footer;

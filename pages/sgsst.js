import styles from '../styles/SGSST.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWhatsapp,faFacebook,faInstagram} from '@fortawesome/free-brands-svg-icons';

const sgsst = () => {
  return(
       <div className = {styles.container}>
        <div className={styles.tituloI}>  
            <h1 className={styles.tituloE}>Planes SG-SST</h1>
            <p>M.O Seguridad y Salud en el Trabajo, tiene para usted los planes que se acomodan a tu medida, con el mismo compromiso, dedicación y calidad</p>
        </div>
         <div className={styles.targetas}>
             <div className={styles.card}>
                <div className={styles.cardEncabezado} >
                
                    <h1 className={styles.titulo}>Planes PH-Propiedad Horizontal</h1>
                    <img src ='/img/img0.jpg' alt='' ></img>
            

                </div>
            
                <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                     Diseño e implementación SG-SST             
                <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                  Diseño e implementación y Ejecución
                </div>
                <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                   Acompañamiento a la gestión mes a mes, evidencia y soporte
                </div>
               
                
                
            </div>
            
         </div>
        <div className={styles.card}>
            <h1 className={styles.titulo}>Planes Clase Riesgo I</h1>
            <div className={styles.cardEncabezado} >
                <img src ='/img/img1.jpg' alt='' ></img>
            </div>
            <div className={styles.contenido}>
                <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                Diseño e implementación SG-SST

                </div>
                <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                Diseño e implementación y Ejecución
                </div>
                <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                Acompañamiento a la gestión mes a mes, evidencia y soporte
                </div>
                


            </div>
            
        </div>
        <div className={styles.card}>
            <div className={styles.cardEncabezado} >
                <h1 className={styles.titulo}>Planes Clase Riesgo II</h1>
                <img src ='/img/img2.jpg' alt='' ></img>
            </div>
            <div className={styles.contenido}>
                <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                Diseño e implementación SG-SST

                </div>
                <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                Diseño e implementación y Ejecución
                </div>
                <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                Acompañamiento a la gestión mes a mes, evidencia y soporte
                </div>
                


            </div>
            
        </div>
        <div className={styles.card}>
            <div className={styles.cardEncabezado} >
                <h1 className={styles.titulo}>Planes clase Riesgo III</h1>
                <img src ='/img/img3.jpg' alt='' ></img>
            </div>
            <div className={styles.contenido}>
                <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                Diseño e implementación SG-SST

                </div>
                <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                Diseño e implementación y Ejecución
                </div>
                <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                Acompañamiento a la gestión mes a mes, evidencia y soporte
                </div>
                


            </div>
            
        </div>
      
       
    </div>
  </div>
  )
};

export default sgsst;


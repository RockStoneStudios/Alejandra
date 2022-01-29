import styles from '../styles/Otros.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWhatsapp,faFacebook,faInstagram} from '@fortawesome/free-brands-svg-icons';

const otros = () => {
  return( <div className = {styles.container}>
   
       <div className={styles.card}>
           <div className={styles.cardEncabezado} >
               <img src ='/img/elon.jpg' alt='' ></img>
           </div>
           <div className={styles.cardIconos}>
               <li className={styles.agrandar}><a href='#'><span>  <FontAwesomeIcon icon={faWhatsapp}/></span></a></li>
               <li className={styles.agrandar}><a href='#'><span>  <FontAwesomeIcon icon={faFacebook}/></span></a></li>
               <li className={styles.agrandar}><a href='#'><span>  <FontAwesomeIcon icon={faInstagram}/></span></a></li>

           </div>
           <div className={styles.contenido}>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                 Elon Musk
               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                    Austin Texas 
               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                 <p> CEO Tesla , SpaceX</p>
               </div>
           </div>
           <div className={styles.cardAcciones}>
               <button className={[styles.botones,styles.agrandar].join(' ')}>
                   <span></span> Enviar Correo
               </button>
           </div>
       </div>
       <div className={styles.card}>
           <div className={styles.cardEncabezado} >
               <img src ='/img/jeff.jpg' alt='' ></img>
           </div>
           <div className={styles.cardIconos}>
               <li className={styles.agrandar}><a href='#'><span>  <FontAwesomeIcon icon={faWhatsapp}/></span></a></li>
               <li className={styles.agrandar}><a href='#'><span>  <FontAwesomeIcon icon={faFacebook}/></span></a></li>
               <li className={styles.agrandar}><a href='#'><span>  <FontAwesomeIcon icon={faInstagram}/></span></a></li>

           </div>
           <div className={styles.contenido}>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                   Jeff Bezos
               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                    Seatle Washington
               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                 <p>CEO Amazon</p>
               </div>
           </div>
           <div className={styles.cardAcciones}>
               <button className={[styles.botones,styles.agrandar].join(' ')}>
                   <span></span> Enviar Correo
               </button>
           </div>
       </div>
       <div className={styles.card}>
           <div className={styles.cardEncabezado} >
               <img src ='/img/scarlet.jpg' alt='' ></img>
           </div>
           <div className={styles.cardIconos}>
               <li className={styles.agrandar}><a href='#'><span>  <FontAwesomeIcon icon={faWhatsapp}/></span></a></li>
               <li className={styles.agrandar}><a href='#'><span>  <FontAwesomeIcon icon={faFacebook}/></span></a></li>
               <li className={styles.agrandar}><a href='#'><span>  <FontAwesomeIcon icon={faInstagram}/></span></a></li>

           </div>
           <div className={styles.contenido}>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                   Scarlet Johannson
               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                    Malibu California
               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                 <p>Actriz de Cine</p>
               </div>
           </div>
           <div className={styles.cardAcciones}>
               <button className={[styles.botones,styles.agrandar].join(' ')}>
                   <span></span> Enviar Correo
               </button>
           </div>
       </div>
       <div className={styles.card}>
           <div className={styles.cardEncabezado} >
               <img src ='/img/larry.jpg' alt='' ></img>
           </div>
           <div className={styles.cardIconos}>
               <li className={styles.agrandar}><a href='#'><span>  <FontAwesomeIcon icon={faWhatsapp}/></span></a></li>
               <li className={styles.agrandar}><a href='#'><span>  <FontAwesomeIcon icon={faFacebook}/></span></a></li>
               <li className={styles.agrandar}><a href='#'><span>  <FontAwesomeIcon icon={faInstagram}/></span></a></li>

           </div>
           <div className={styles.contenido}>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                  Larry Ellison
               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                    Palo Alto. California
               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                 <p>CEO Oracle, Java Enterprise</p>
               </div>
           </div>
           <div className={styles.cardAcciones}>
               <button className={[styles.botones,styles.agrandar].join(' ')}>
                   <span></span> Enviar Correo
               </button>
           </div>
       </div>
       <div className={styles.card}>
           <div className={styles.cardEncabezado} >
               <img src ='/img/mark.jpg' alt='' ></img>
           </div>
           <div className={styles.cardIconos}>
               <li className={styles.agrandar}><a href='#'><span>  <FontAwesomeIcon icon={faWhatsapp}/></span></a></li>
               <li className={styles.agrandar}><a href='#'><span>  <FontAwesomeIcon icon={faFacebook}/></span></a></li>
               <li className={styles.agrandar}><a href='#'><span>  <FontAwesomeIcon icon={faInstagram}/></span></a></li>

           </div>
           <div className={styles.contenido}>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                   Mark Zuckemberg
               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                    Mountain View. California
               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                 <p>CEO Facebook Meta</p>
               </div>
           </div>
           <div className={styles.cardAcciones}>
               <button className={[styles.botones,styles.agrandar].join(' ')}>
                   <span></span> Enviar Correo
               </button>
           </div>
       </div>
       <div className={styles.card}>
           <div className={styles.cardEncabezado} >
               <img src ='/img/jack.jpg' alt='' ></img>
           </div>
           <div className={styles.cardIconos}>
               <li className={styles.agrandar}><a href='#'><span>  <FontAwesomeIcon className={styles.whatsapp} icon={faWhatsapp}/></span></a></li>
               <li className={styles.agrandar}><a href='#'><span>  <FontAwesomeIcon className={styles.facebook}icon={faFacebook}/></span></a></li>
               <li className={styles.agrandar}><a href='#'><span>  <FontAwesomeIcon className={styles.instagram}icon={faInstagram}/></span></a></li>

           </div>
           <div className={styles.contenido}>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                   
               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                    San Francisco California
               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                 <p>CEO Twitter</p>
               </div>
           </div>
           <div className={styles.cardAcciones}>
               <button className={[styles.botones,styles.agrandar].join(' ')}>
                   <span></span> Enviar Correo
               </button>
           </div>
       </div>
  </div>
  )
};

export default otros;



{/* <div className={styles.card}>
<div className={[styles.cardBody,styles.front].join(' ')}>
    <div className={styles.title}>
        <h3>Ideas Creativas </h3>
         <p>lorem Ipsum lorem lorem </p>
        <a href= "#">Conoce mas</a>
    </div>
</div>
<div className={[styles.cardBody, styles.back].join(' ')}>

        <div className= {styles.content}>
            <h1>Comienza</h1>
            <p>lorem Ipsum lorem Ipsum</p>
            <p>lorem Ipsum lorem Ipsum</p>
            <p>lorem Ipsum lorem Ipsum lorem</p>
            <a href="#">Regresar</a>
        </div>

</div>
</div> */}
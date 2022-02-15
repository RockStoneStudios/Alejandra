import styles from '../styles/Otros.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWhatsapp,faFacebook,faInstagram} from '@fortawesome/free-brands-svg-icons';

const otros = () => {
  return(
       <div className = {styles.container}>
   
       <div className={styles.card}>
           <div className={styles.cardEncabezado} >
            <h1 className={styles.titulo}>Servicios y Complementos</h1>

           </div>
          
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
               Protocolo de bioseguridad para todas las empresas clase de riesgo I, II, II, IV, V.             
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
               Capacitación con profesionales (psicólogos, fisioterapeutas, deportologos
               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
               Semana de la seguridad y salud en el trabajo
               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
               Afiliación a seguridad social, novedades y retiros de seguridad social.
               </div>
              <div className={[styles.infoPersonal,styles.desplazar].join(' ')}>
               Asesorías y acompañamiento al programa de SPA 
              </div>
            
               
           </div>
          
       </div>
       <div className={styles.card}>
           <h1 className={styles.titulo}>Psicologia</h1>
           <div className={styles.contenido}>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
               Medición de riesgo psicosocial

               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
               Sistemas de Vigilancia Epidemiológica
               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
               Análisis de puesto de trabajo para determinar patologías de origen laboral  por estrés   
               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                 Talleres vivenciales en intervención Psicosocial   
               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
               Asesorías y capacitación al Comité de Convivencia Laboral COCOLA 
               </div>

               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
               Asesorías y acompañamiento al programa de SPA 
               </div>


           </div>
          
       </div>
       <div className={styles.card}>
           <div className={styles.cardEncabezado} >
            <h1 className={styles.titulo}>Contaduria</h1>
           </div>
           <div className={styles.contenido}>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
               Asesorías contables

               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
               Declaraciones de renta 
               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                
               </div>
           </div>
          
       </div>
       <div className={styles.card}>
           <div className={styles.cardEncabezado} >
             <h1 className={styles.titulo}>Civiles</h1>
           </div>
           <div className={styles.contenido}>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
               Alquiler de maquinaria pesada.

               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
               Construcción de obras civiles
               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                Transporte de carga y movimiento de tierra.
               </div>
               <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
               Servicio de topografía
               </div>

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
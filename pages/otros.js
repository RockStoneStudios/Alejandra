import styles from '../styles/Otros.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWhatsapp,faFacebook,faInstagram} from '@fortawesome/free-brands-svg-icons';

const otros = () => {
  return(
       <div className = {styles.container}>
         
           
       <div className={styles.tituloI}>
           <h1>Servicios Estrategicos</h1>
           <p>Los servicios estratégicos que M.O Seguridad y Salud en el Trabajo ofrecen,  corresponden a  relaciones entre varios servicios, sistemas o procesos que son gestionados para dar respuestas a las necesidades de nuestros clientes. Es un plus que muestra cómo alcanzar una serie de objetivos y dar soporte a la consecución de los resultados deseados tanto por sus clientes como para nosotros mismos.</p>
        </div>
  
     <div className={styles.targetas}>

    
        <div className={styles.card}>
            <div className={styles.cardEncabezado} >
                <h1 className={styles.titulo}>Servicios y Complementos SST</h1>
            <img src ='/img/target0.jpg' alt='' ></img>
        

            </div>
            
                <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                Protocolos de bioseguridad para todas las empresas clase de riesgo I, II, III, IV, V.             
                <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                Capacitación con profesionales (psicólogos, fisioterapeutas, deportólogos)
                </div>
                <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                Semana de la seguridad y salud en el trabajo
                </div>
                <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                Afiliación aL sistema general de seguridad social, novedades y retiros de seguridad social.
                </div>
                <div className={[styles.infoPersonal,styles.desplazar].join(' ')}>
                 Asesorias por Horas
                </div>
                <div className={[styles.infoPersonal,styles.desplazar].join(' ')}>
                 Inspecciones de seguridad, con soporte y plan de acciones
                </div>
                <div className={[styles.infoPersonal,styles.desplazar].join(' ')}>
                   Plan de Emergencia
                </div>
                
                
            </div>
            
        </div>
        <div className={styles.card}>
        <div className={styles.cardEncabezado} >
                
            <h1 className={styles.titulo}>Psicología</h1>
        <img src ='/img/target1.jpg' alt='' ></img>
            </div>
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
                <h1 className={styles.titulo}>Contaduría</h1>
            <img src ='/img/target2.jpg' alt='' ></img>
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
                <h1 className={styles.titulo}>Obras Civiles y Eléctricas</h1>
            <img src ='/img/target3.jpg' alt='' ></img>
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
                Eléctricas
                </div>
                <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                 Interventoría
                </div>
                <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                 Construcción de alumbrado navideño
                </div>

            </div>
            
        </div>
        <div className={styles.card}>
            <div className={styles.cardEncabezado} >
                <h1 className={styles.titulo}>Topografía</h1>
            <img src ='/img/target4.jpg' alt='' ></img>
            </div>
            <div className={styles.contenido}>
                <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                Topografía y Agrimensura

                </div>
                
                <div className ={[styles.infoPersonal,styles.desplazar].join(' ')}>
                    
                </div>
            </div>
            
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
import styles from '../styles/SGSST.module.css';

 const SGSST = () => {
    return (
        <div className={styles.container}>
           <div className={styles.info}>
             
               <ul className= {styles.menuVertical}>
                   <li>  <h2 className= {styles.subtitulo}>Planes PH Propiedad Horizontal</h2></li>
                   <li className={styles.item}>Diseño e Implementacion SG-SST</li>
                   <li className= {styles.item}>Diseño , implementacion y ejecucion</li>
                   <li className= {styles.item}>Acompañamiento mes a mes evidencia y Soporte</li>
               </ul>
           </div>
           <div className={styles.info}>
             
             <ul className= {styles.menuVertical}>
                 <li>  <h2 className= {styles.subtitulo}>Planes Clase de riesgo I – empresas </h2></li>
                 <li className={styles.item}>Diseño e Implementacion SG-SST</li>
                 <li className= {styles.item}>Diseño , implementacion y ejecucion</li>
                 <li className= {styles.item}>Acompañamiento mes a mes evidencia y Soporte</li>
             </ul>
         </div>
         <div className={styles.info}>
             
             <ul className= {styles.menuVertical}>
                 <li>  <h2 className= {styles.subtitulo}>Planes Clase de riesgo II empresas textiles, confecciones </h2></li>
                 <li className={styles.item}>Diseño e Implementacion SG-SST</li>
                 <li className= {styles.item}>Diseño , implementacion y ejecucion</li>
                 <li className= {styles.item}>Acompañamiento mes a mes evidencia y Soporte</li>
             </ul>
         </div>
            
        </div>
    )
}

export default SGSST;



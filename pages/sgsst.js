import styles from '../styles/SGSST.module.css';

 const SGSST = () => {
    return (
        <div className={styles.container}>
            <div className={styles.Info}>
                <h1 className={styles.titulo}>Planes SG-SST a tu medida</h1>
                <h2 className={styles.subtitulos}>Planes PH- Propiedad Horizontal </h2>
                 <ul className={styles.listItem}>
                     <li className={styles.item}>Diseño e implementación SG-SST</li>
                     <li className={styles.item}> Diseño, implementación y ejecución </li>
                    <li className={styles.item}>Acompañamiento a la gestión mes a mes, evidencia y soporte . </li>


                 </ul>

                 <h2 className={styles.subtitulos}>Planes Clase de riesgo I – empresas comerciales, financieras, trabajo de oficina, centros educativos  peluquerías, barberías, centros de belleza, teatrales o artísticas </h2>
                  <ul className={styles.listItem}>
                      <li li className={styles.item}>Diseño e implementación SG-SST</li>
                     <li li className={styles.item}>Diseño, implementación y ejecución. </li>
                     <li li className={styles.item}>Acompañamiento a la gestión mes a mes, evidencia y soporte.</li> 

                  </ul>
                  <h2 className={styles.subtitulos}> Planes Clase de riesgo II empresas textiles, confecciones</h2>
                  <ul className={styles.listItem}>
                      <li className={styles.item}>Diseño e implementación SG-SST</li>
                      <li  className={styles.item}>Diseño, implementación y ejecución. </li>
                      <li  className={styles.item}>Acompañamiento a la gestión mes a mes, evidencia y soporte </li>
                  </ul>
                  <h2 className={styles.subtitulos}>Planes Clase de riesgo III empresas de fabricación de alimentos, alcoholes, agujas, automotores, productos de cuero , productos de tabaco, plástico presas de fabricación de alimentos, alcoholes, agujas, automotores, productos de cuero , productos de tabaco, plástico</h2>
                  <ul className={styles.listItem}>
                      <li className={styles.item}>Diseño e implementación SG-SST</li>
                      <li  className={styles.item}>Diseño, implementación y ejecución </li>
                      <li  className={styles.item}>Acompañamiento a la gestión mes a mes, evidencia y soporte</li>
                  </ul>
            </div>
            
        </div>
    )
}

export default SGSST;



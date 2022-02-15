import styles from '../styles/QuienesSomos.module.css';

const QuienesSomos = () => {
  return (
    <div className={styles.container}>
       <h1 className={styles.titulo}>Quienes Somos</h1>
       <ul className={styles.list}>
         <li className={styles.listItem}>M.O, es una empresa que idealiza en grande, que busca el bienestar laboral y financiero en todos los campos que ofrecen las empresas y que dejan que M.O trabaje con ellos brindando lo mejor de la seguridad y salud en el trabajo y demás servicios estratégicos que se ofrecen.</li>
         <li className={styles.listItem}>Con mas de 6 años de experiencia brindando la mejor satisfacción del cliente por recibir un producto y/o servicio de alta calidad</li>
         <li className={styles.listItem}>Actualmente, participa en categorías de diseño, implementación y ejecución de Seguridad y Salud en el Trabajo, en psicología, obras civiles, alquiler de maquinaria pesada, transporte de carga y movimiento de tierra, topografía, fisioterapeuta, asesorías contables, sistema de seguridad social y gestión ambiental.</li>
       </ul>
    </div>
  )
}

export default QuienesSomos;
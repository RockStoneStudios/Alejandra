import styles from '../styles/QuienesSomos.module.css';
import Image from 'next/image';
const QuienesSomos = () => {
  return (
    <div className={styles.container}>
       <div className={styles.imagen}>

         <Image className={styles.img} src="/img/quienes.jpg" width={1200} height={1250} objectFit='contain'/>
       </div>
       <div className={styles.containerTexto}>

       <h1 className={styles.titulo}>Quiénes Somos</h1>
       <ul className={styles.list}>
         <li className={styles.listItem}>M.O Seguridad y Salud en el Trabajo, es una empresa que idealiza en grande, que busca el bienestar laboral y financiero en todos los campos que ofrecen las empresas y que dejan que M.O trabaje con ellos brindando lo mejor de la seguridad y salud en el trabajo y demás servicios estratégicos que se ofrecen.</li>
         <li className={styles.listItem}>Con más de 6 años de experiencia brindando la mejor satisfacción del cliente por recibir un producto y/o servicio de alta calidad.</li>
         <li className={styles.listItem}>Actualmente, participa en categorías de diseño, implementación y ejecución de Seguridad y Salud en el Trabajo, en psicología, obras civiles, alquiler de maquinaria pesada, transporte de carga y movimiento de tierra, topografía, fisioterapeuta, asesorías contables, sistema general de seguridad social y gestión ambiental.</li>
       </ul>
       </div>
    </div>
  )
}

export default QuienesSomos;
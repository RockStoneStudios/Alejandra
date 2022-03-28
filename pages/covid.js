import React from 'react'
import styles from '../styles/Covid.module.css';
import Link from 'next/link';
const Covid = () => {
  return (
    <div className={styles.container}>
        <h1>Decretos</h1>
        <div className={styles.articulo}>
         <h1>Decreto 277/2021</h1>   
          <h6>Medidas de reactivación económica segura con ocasión de la emergencia sanitaria</h6>
           <Link href="https://bogota.gov.co/sites/default/files/inline-files/decreto-277-de-2021_0.pdf">
               <a>Leer mas</a>
            </Link>
        </div>
        <div className={styles.articulo}>
            <h1>Decreto 1615/2021</h1>   
             <h6>Instrucciones en virtud de la emergencia sanitaria</h6>
              <Link href="https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%201615%20DEL%2030%20DE%20NOVIEMBRE%20DE%202021.pdf">
                  <a>Leer mas</a>
               </Link>
           </div>
           <div className={styles.articulo}>
         <h1>Decreto 1408/2021</h1>   
          <h6>Instrucciones que deben ser tenidas en cuenta por los alcaldes y gobernadores en materia de orden público...</h6>
           <Link href="https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%201408%20DEL%2003%20DE%20NOVIEMBRE%20DE%202021.pdf">
               <a>Leer mas</a>
            </Link>
        </div>
        <div className={styles.articulo}>
            <h1>Decreto 580/2021</h1>   
             <h6>Aislamiento selectivo con distanciamiento individual responsable y la reactivación económica segura</h6>
              <Link href="https://bogota.gov.co/sites/default/files/inline-files/decreto-277-de-2021_0.pdf">
                  <a>Leer mas</a>
               </Link>
           </div>
           <div className={styles.articulo}>
            <h1>Decreto 109/2021</h1>   
             <h6>Plan nacional de vacunación contra el Covid-19 y se dictan otras disposiciones</h6>
              <Link href="https://dapre.presidencia.gov.co/normativa/normativa/DECRETO-109-29-ENERO-2021.pdf">
                  <a>Leer mas</a>
               </Link>
           </div>
           <div className={styles.articulo}>
            <h1>Decreto /2021</h1>   
             <h6>Medidas de reactivación económica segura con ocasión de la emergencia sanitaria</h6>
              <Link href="https://bogota.gov.co/sites/default/files/inline-files/decreto-277-de-2021_0.pdf">
                  <a>Leer mas</a>
               </Link>
           </div>
           <h1>Resoluciones</h1>
           <div className={styles.articulo}>
            <h1>Resolución 350/2022</h1>   
             <h6>Por medio de la cual se adopta el Protocolo general de bioseguridad para el desarrollo de las actividades ...</h6>
              <Link href="https://bogota.gov.co/sites/default/files/inline-files/decreto-277-de-2021_0.pdf">
                  <a>Leer mas</a>
               </Link>
           </div>
           <div className={styles.articulo}>
            <h1>Resolución 304/2022</h1>   
             <h6>Por la cual se prorroga la emergencia sanitaria por el coronavirus COVID-19</h6>
              <Link href="https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%20304%20de%202022.pdf">
                  <a>Leer mas</a>
               </Link>
           </div>
           <h1>Circulares</h1>
           <div className={styles.articulo}>
            <h1>Circular 35/2021</h1>   
             <h6>Aforo eventos públicos y privados y medidas de bioseguridad en bares y restaurantes</h6>
              <Link href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/circular-035-de-2021.pdf">
                  <a>Leer mas</a>
               </Link>
           </div>
           <div className={styles.articulo}>
            <h1>Circular 4/2022</h1>   
             <h6>Recomendaciones para la protección laboral durante el cuarto pico de la pandemia por sars-cov-2 (covid-19).</h6>
              <Link href="https://www.minsalud.gov.co/Normatividad_Nuevo/Circular%20Conjunta%20No.004%20de%202022-.pdf">
                  <a>Leer mas</a>
               </Link>
           </div>
           <div className={styles.articulo}>
            <h1>Circular 3/2022</h1>   
             <h6>Instrucciones para garantizar el acceso y continuidad en la prestación de los servicios de salud...</h6>
              <Link href="https://www.minsalud.gov.co/Normatividad_Nuevo/Circular%20Externa%20No.3%20de%202022.pdf">
                  <a>Leer mas</a>
               </Link>
           </div>
           <div className={styles.articulo}>
            <h1>Circular 47/2021</h1>   
             <h6>Aspecto a tener en cuenta en relación con la Vacuna contra el Covid-19</h6>
              <Link href="https://www.mintrabajo.gov.co/documents/20147/61442826/Circular+No.0047.pdf/b8853528-5e85-e707-95be-5865ff730357?t=1628277516117">
                  <a>Leer mas</a>
               </Link>
           </div>
           <div className={styles.articulo}>
            <h1>Circular 22/2021</h1>   
             <h6>Sobre la no exigencia de prueba de SARS-Cov-2 Covid-19 por parte del empleadora trabajadores ...</h6>
              <Link href="https://www.mintrabajo.gov.co/documents/20147/61442826/Circular+0022.PDF/a858d468-707f-8d13-2790-2b43839a7ea7?t=1615235618146">
                  <a>Leer mas</a>
               </Link>
           </div>
   
        

        
        
    </div>
  )
}

export default Covid
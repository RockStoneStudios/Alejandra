import styles from '../styles/Valores.module.css'

const Valores = () => {
    return (
        <div className={styles.container}>
       
             <div className={styles.sombras}>
           <div className={styles.listItem}>
            <div className={styles.item}>
             <h1 className ={styles.titulo}>Valores</h1>
            <p className= {styles.parrafo}>Trabajo en equipo: en M.O trabajar unidos es la mejor manera de lograr los objetivos y metas en común.</p>
            </div>
            <div className={styles.item}>
              
            <p className= {styles.parrafo}>Educación: M.O, se preocupa por que todos sus aliados aprendan, de esta manera se logra ser competitivo en el ámbito laboral, inspirar aprendizaje y mejorar el desempeño de todos los empleados de una empresa</p>
           </div>
           <div className={styles.item}>
              
            <p className= {styles.parrafo}>
            Aprendizaje: para M.O, es vital que todos los empleados y empleadores tengan una base amplia de conocimiento que podrían mejorar la forma en que tu empresa grande, mediana o pequeña hace negocios.

            </p>
           </div>
            
       
           </div>
             </div>
        </div>
    )
}

export default Valores;

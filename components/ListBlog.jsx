import styles from '../styles/ListBlog.module.css';
import Blog from './Blog';
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import Blog3 from './Blog3';
import Blog4 from './Blog4';
import Blog5 from './Blog5';
const ListBlog = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Articulos de Interes</h1>
             <p className={styles.desc}>La Seguridad y Salud en el Trabajo ha sido tema de interes y en los sigientes link encontraras actualizaciones que ha menudo el Ministerio de Trabajo, las Administraciones de Riesgos laborales ARL  y el Ministerio de Salud y Proteccion Social comparten con el fin de continuar con la promocion y prevencion de los empleadores y colaboradores de la empresa</p>
            <div className={styles.wrapper}>
                <Blog/>
                <Blog1/>
                <Blog2/>
                <Blog3/>
                <Blog4/>
                <Blog5/>
                

            </div>
            
        </div>
    )
}

export default ListBlog;

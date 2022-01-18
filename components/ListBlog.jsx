import styles from '../styles/ListBlog.module.css';
import Blog from './Blog';
const ListBlog = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Articulos de Interes</h1>
             <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ex accusamus, animi eveniet amet est! Exercitationem dicta placeat deleniti corporis architecto! Ea illum aut ut? Aperiam nihil inventore quae amet, optio, deserunt maxime numquam sit eius accusantium dolorem, non eum.</p>
            <div className={styles.wrapper}>
                <Blog/>
                <Blog/>
                <Blog/>
                <Blog/>
                <Blog/>
                <Blog/>
                

            </div>
            
        </div>
    )
}

export default ListBlog;

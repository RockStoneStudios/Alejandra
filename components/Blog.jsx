import styles from '../styles/Blog.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Blog = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
             <div className={styles.topRow}>
                 <h4>COVID</h4>
             </div>
             <div className= {styles.content}>
               <h2>Omicron</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cupiditate corrupti ad quae, laborum enim sapiente? Rerum nihil ex beatae?</p>
               <button className={styles.button}>Leer Mas</button>
             </div>
            </div>
        </div>
    )
}

export default Blog;

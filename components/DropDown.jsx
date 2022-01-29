import styles from '../styles/DropDown.module.css';
const DropDown = () => {
    return (
        <div className={styles.container}>
              <ul className={styles.menuVertical}>
                       <li><a>Planes PH- Propiedad Horizontal</a></li>
                       <li><a href=""> Planes Clase de riesgo I</a> </li>
                     </ul>
            
        </div>
    )
}

export default DropDown;

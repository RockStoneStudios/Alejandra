import styles from '../styles/Featured.module.css';
import Image from 'next/image';
import { useState } from 'react';
 const Featured = () => {
     const [index,setIndex] = useState(0);
  const images = [
      "/img/imagen11.jpg",
      "/img/imagen22.jpg",
      "/img/imagen33.jpg"
  ]

  const handleArrow = (direccion) =>{
      if(direccion=== "1"){
          setIndex(index!==0 ? index-1 : 2)
      }
      if(direccion==="2"){
          setIndex(index!=2 ? index+1 : 0)
      }
  }
     
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left :0}} onClick={()=>handleArrow("1")}>
             <Image src="/img/arrowl.png" alt='' layout='fill'/>
            </div>
            <div className={styles.wrapper} style={{transform :`translateX(${-90*index}vw)`}}>
              {images.map((img,i)=>(
                <div className={styles.imgContainer} key = {i}>
                     <Image src={img}  alt= "" layout='fill' objectFit='contain'/>  
                </div>
              ))}
            </div>
            <div className={styles.arrowContainer} style={{right : 0}} onClick={()=>handleArrow("2")}>
            <Image src="/img/arrowr.png" alt='' layout='fill'/>
            </div>
        </div>
    )
    
}

export default Featured;
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Featured  from '../components/Featured';

import ListBlog from '../components/ListBlog';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
         
       <title>M.O</title>
       <meta name="description" content="Gestion Seguridad y Salud en el trabajo" />
       {/* <script src="https://kit.fontawesome.com/6df470b726.js" crossorigin="anonymous"></script> */}
      
       
       <link rel="icon" href="/favicon.ico" />
      </Head>
       <Featured/>
      <ListBlog/>
     
     
    </div>
  )
}

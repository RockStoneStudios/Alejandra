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
       <script src="https://kit.fontawesome.com/6df470b726.js" crossorigin="anonymous"></script>
       <link href="https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&family=Poppins:ital,wght@0,300;0,400;0,800;1,300;1,700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>
       <Featured/>
      <ListBlog/>
     
     
    </div>
  )
}

import React from 'react'
import styles from './Loader.module.scss'


const LoaderDownload = () => {
   return (
      <div 
         className={styles.loader_download} 
         onClick={(e)=>e.stopPropagation()}
      >
         <span className={styles.loader}></span>
         <h1>Завантаження файлу на сервер</h1>
         <h2>Може зайняти деякий час</h2>
         <h2>Зачекайте...</h2>
      </div>
   );
};
export default LoaderDownload
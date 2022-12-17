import React from 'react'
import styles from './Loader.module.scss'

const LoaderDownload = () => {
   return (
      <div className={styles.loader_download}>
         <span className={styles.loader}></span>
      </div>
   );
};
export default LoaderDownload
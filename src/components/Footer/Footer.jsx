import React from 'react'
import styles from './Footer.module.scss'
import {ChevronCompactUp} from 'react-bootstrap-icons'

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className='container'>
            <div className={styles.box}>
               <span>Bogdan Khmelnitsky Melitopol State Pedagogical University</span> 
               <span><a href="#up"><ChevronCompactUp/></a></span>
               <span>Developed by ICC</span>
            </div>
         </div>   
      </footer>
   );
};
export default Footer
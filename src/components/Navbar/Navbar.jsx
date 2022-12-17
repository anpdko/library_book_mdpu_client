import React from 'react'
import styles from './Navbar.module.scss'
import coverImg from '../../assets/images/cover.jpg'
import back_coverImg from '../../assets/images/back_cover.png'
import frot_coverImg from '../../assets/images/front_cover.png'
import { Search } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useMousePosition } from '../../hooks'

const Navbar = ({title}) => {
   const position = useMousePosition();

   const backAnimate = () => {
      return { 
         scale: 1, 
         x: position.x/window.innerWidth*(-40), 
         y: position.y / window.innerHeight*(-40)
      }
   }
   const frontAnimate = () => {
      return { 
         scale: 1, 
         x: position.x/window.innerWidth*(-20), 
         y: position.y / window.innerHeight*(-10)
      }
   }

   return (
      <AnimatePresence>
         <header id="up">
            <div className='container'>
               <nav className={styles.nav}>
                  <ul>
                     <li><Link className={styles.link_button} to="/">Головна</Link></li>
                     <li><Link className={styles.link_button} to="/">Про бібліотеку</Link></li>
                     <li><a className={styles.link_button} href="https://mdpu.org.ua/">На сайт МДПУ</a></li>
                     <li><Link className={styles.link_button} to="/admin">Адмін панель</Link></li>
                  </ul>
                  <div className={styles.box_input}>
                     <input type="text" id="search-text"/>
                     <label htmlFor="search-text" className={styles.box}>
                        <Search className={styles.search_icon}/>
                     </label>
                  </div>
               </nav>
            </div>
            <div className={styles.box_img}>
               <motion.img 
                  className={`${styles.img} ${styles.cover}`} 
                  src={coverImg} alt="cover"
                  initial={{ scale: 1.2 }}
                  animate={backAnimate()}
                  exit={{ scale: 1.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
               />
               <motion.img 
                  className={`${styles.img} ${styles.back_cover}`} 
                  src={back_coverImg} alt="cover"
                  initial={{ scale: 1.2 }}
                  animate={backAnimate()}
                  exit={{ scale: 1.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
               />
               <motion.img 
                  className={`${styles.img} ${styles.front_cover}`} 
                  src={frot_coverImg} alt="cover"
                  initial={{ scale: 1.2 }}
                  animate={frontAnimate()}
                  exit={{ scale: 1.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
               />
               <div className={styles.box}>
               <motion.h1 
                  className={styles.title}
                  initial={{ scale: 1.2 }}
                  animate={frontAnimate()}
                  exit={{ scale: 1.2 }}
                  transition={{ duration: 0.6, ease: "backOut" }}
               >
                  {!!title
                     ?title
                     :"Бібліотека Мелітопольського державного педагогічного університета імені Богдана Хмельницького"
                  }
               </motion.h1>
               </div>
            </div>
         </header>
      </AnimatePresence>
   );
};
export default Navbar
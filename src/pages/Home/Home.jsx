import React from 'react'
import styles from './Home.module.scss'
import books from '../../data/books'
import { subText } from '../../services/text.services'
import { Link } from 'react-router-dom'
import {Filter, Pagination} from '../../components'
import { AnimatePresence, motion } from 'framer-motion'

const Home = () => {

   return (
      <AnimatePresence>
         <section className='main'>
            <motion.div 
               initial={{ x: -30, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               exit={{ x: -30, opacity: 0 }}
               transition={{ duration: 0.4 }}
            >
               <Filter/>
            </motion.div>
            
            <div className={styles.home}>
               {/* <h1>Каталог книг</h1> */}
               <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3}}
               >
                  <div className={styles.books}>
                     {books.map((book) => 
                        <div key={book.id} className={styles.book}>
                           <div className={styles.box_img}>
                              <Link to={`book/${book.id}`}>
                                 <img src={book.img} alt="cover" />
                              </Link>
                           </div>
                           <div className={styles.box_text}>
                              <Link to={`book/${book.id}`}>
                                 <h3 className={styles.title}>{subText(book.title, 40)}</h3>
                              </Link>
                              <p className={styles.text_autor}>{subText(book.author, 20)}</p>
                           </div>
                        </div>
                     )}
                  </div>
               </motion.div>            
               <Pagination/>
            </div>
         </section>
      </AnimatePresence>
   );
};
export default Home
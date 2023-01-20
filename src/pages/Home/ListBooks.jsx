import React from 'react'
import styles from './Home.module.scss'
import { subText } from '../../services/text.services'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ImgBook } from '../../components/UI'


const imgUrl = process.env.REACT_APP_GOOGLE_DRIVE_IMG_URL 

const ListBooks = ({books}) => {

   return (
      <motion.div 
         className={styles.books}
         initial={{ y: -20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         exit={{ y: -20, opacity: 0 }}
         transition={{ duration: 0.3}}
      >
         {books.map((book) => 
            <div key={book._id} className={styles.book}>
               <div className={styles.box_img}>
                  <Link to={`book/${book._id}`}>
                     <ImgBook src={imgUrl + book.imgCover} className={styles.image} alt="cover"/>
                  </Link>
               </div>
               <div className={styles.box_text}>
                  <Link to={`book/${book.id}`}>
                     <h3 className={styles.title}>{subText(book.title, 32)}</h3>
                  </Link>
                  <p className={styles.text_autor}>{subText(book.author, 20)}</p>
               </div>
            </div>
         )}
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </motion.div>
   );
};
export default ListBooks
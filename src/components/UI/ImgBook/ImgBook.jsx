import React, {useState} from 'react'
import styles from './ImgBook.module.scss'
import loaderImg from '../../../assets/images/book.jpg'

const ImgBook = ({ src, className, ...props }) => {
   const [loadImg, setLoadImg] = useState(false)

   return (
      <div className={`${styles.image} ${className}`}>
         <img 
            src={loaderImg} 
            alt="loader-book" 
            className = {`${styles.loader} ${!loadImg?styles.anim:styles.active}`}
         />
         <img 
            {...props} 
            src={src} 
            alt="book" 
            className = {`${styles.img} ${loadImg?styles.active:styles.anim}`}
            onLoad = {()=> setLoadImg(true)}
         />
      </div>
   );
};
export default ImgBook
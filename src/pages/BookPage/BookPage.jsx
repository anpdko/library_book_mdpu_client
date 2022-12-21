import React, {useState, useEffect} from 'react'
import styles from './BookPage.module.scss'
import { useParams } from 'react-router-dom'
import { RatingStars } from '../../components'
import { ButtonApp, ImgBook, LoaderContent } from '../../components/UI'
import { EyeFill, CloudArrowDownFill, StopFill } from 'react-bootstrap-icons'
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../../store/books/booksSlice'

const imgUrl = process.env.REACT_APP_GOOGLE_DRIVE_IMG_URL 

const BookPage = () => {
   const [book, setBook] = useState([])
   const bookId = String(useParams().id)
   const { books } = useSelector(state => state.books)
   const dispatch = useDispatch()

   useEffect(()=>{
      if(!books.length && !!bookId){
         dispatch(getBook(bookId))
      }

      setBook(books.find(item => String(item._id) === bookId))
   }, [bookId, books, dispatch])


   if(!book?.title) {
      return (
         <div className={styles.loader_box}>
            <LoaderContent/>
         </div> 
      )
   }

   return (
      <AnimatePresence>
         <motion.div
            initial={{ y: 20, scale: 1.1, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20,  scale: 1.1, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={styles.book}
         >
            <ImgBook src={imgUrl + book.imgCover} className={styles.image}/>
            <motion.div 
               className={styles.book_info}
               initial={{ x: 100 }}
               animate={{ x: 0 }}
               exit={{ x: 100 }}
               transition={{ duration: 0.4}}
            >
               <h1>{book.title}</h1>
               <RatingStars rating={book.rating}/>
               <div className={styles.box_second}>
                  <p><StopFill/><strong>Автор:</strong> {book.author}</p>
                  <p><StopFill/><strong>Жанри:</strong> {book.genre.join(", ")}</p>
                  <p><StopFill/><strong>Категорії:</strong> {book.category.join(", ")}</p>
                  <p><StopFill/><strong>Мова:</strong> {book.language}</p>
                  <p><StopFill/><strong>Рік:</strong> {book.year}</p>
                  <p><StopFill/><strong>Кількість сторінок:</strong> {book.pageCount}</p>
               </div>
               <p><strong>Описание:</strong> {book.description}</p>
               <div className={styles.buttons}>
               <a href={`https://drive.google.com/uc?export=download&confirm=no_antivirus&id=${book.fileBook}`}>
                  <ButtonApp color="red"><CloudArrowDownFill size={20}/>
                  Скачать
                  </ButtonApp>
               </a>
               <a href={`https://drive.google.com/file/d/${book.fileBook}`} target="_blank" rel="noreferrer">
                  <ButtonApp color='blue'><EyeFill size={20}/>Посмотреть</ButtonApp>
               </a>
               </div>
            </motion.div>
         </motion.div>
      </AnimatePresence>
   );
};
export default BookPage
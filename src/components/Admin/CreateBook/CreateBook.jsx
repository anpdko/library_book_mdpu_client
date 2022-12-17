import React, {useState} from 'react'
import styles from './CreateBook.module.scss'
import { XLg, 
   Book, Person, CloudArrowUpFill,
   ListStars, CalendarDate, Hash, 
   GlobeAmericas, Image, PrinterFill } from 'react-bootstrap-icons'
import { ButtonApp, InputApp, InputFileApp, SelectApp, TextareaApp } from '../../UI'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { createBook } from '../../../store/books/booksSlice';

const CreateBook = ({setBox}) => {
   const [newBook, setNewBook] = useState({})
   const dispatch = useDispatch()

   //change
   const changeBook = (e) => {
      setNewBook({...newBook, [e.target.name]: e.target.value})
   }
   const changeArrBook = (e) => {
      let arr = e.target.value.split(',')
      arr = arr.map(item => item.trim())

      setNewBook({...newBook, [e.target.name]: arr})
   }
   const changeFileBook = (e) => {
      console.log(e.target.name)
      setNewBook({...newBook, [e.target.name]: e.target.files[0]})
   }

   // get data server
   const getNewBook = () => {
      if(!!newBook?.fileBook) {
         console.log(newBook)
         dispatch(createBook({body: newBook}))
      }
      else{
         alert("Додайте PDF файл!")
      }
   }

   return (
         <div className={styles.box_create} onClick={()=>setBox(false)}>
            <motion.div 
               className={styles.create} 
               onClick={(e)=>e.stopPropagation()}
               initial={{ y: -60, opacity: 0.3 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: -60, opacity: 0.3 }}
               transition={{ duration: 0.4, ease: 'backOut' }}
            >
               <div className={styles.menu}>
                  <div></div>
                  <h2>Додати книгу</h2>
                  <XLg className={styles.close} onClick={()=>setBox(false)}/>
               </div>
               <div className={styles.inps}>
                  <InputApp 
                     name = 'title'
                     onChange = {changeBook}
                     placeholder = 'Назва'
                  >
                     <Book/>
                  </InputApp>
                  <TextareaApp 
                     name = 'description'
                     onChange = {changeBook}
                     placeholder='Опис книги' 
                     className={styles.textarea}
                  />
                  <InputApp 
                     name = 'author'
                     onChange = {changeBook}
                     placeholder = 'Автор'
                  >
                     <Person/>
                  </InputApp>
                  <InputApp 
                     name = 'genre'
                     onChange = {changeArrBook}
                     placeholder = 'Жанри (через кому)'
                  >
                     <ListStars/>
                  </InputApp>
                  <InputApp 
                     name = 'category'
                     onChange = {changeArrBook}
                     placeholder = 'Категорії (через кому)'
                  >
                     <ListStars/>
                  </InputApp>
                  <InputApp 
                     name = 'publisher'
                     onChange = {changeBook}
                     placeholder = 'Видавець'
                  >
                     <PrinterFill/>
                  </InputApp>
                  <InputApp 
                     name = 'year'
                     type="number" 
                     onChange = {changeBook}
                     placeholder = 'Рік'
                  >
                     <CalendarDate/>
                  </InputApp>
                  <InputApp 
                     name = 'pageCount'
                     type="number" 
                     onChange = {changeBook}
                     placeholder = 'Кількість сторінок'
                  >
                     <Hash/>
                  </InputApp>
                  <SelectApp
                     name = 'language'
                     onChange = {changeBook}
                     list={['українська', 'англійська', 'російська']}
                  >
                     <GlobeAmericas/>
                  </SelectApp>
                  <InputFileApp 
                     name="imgCover"
                     onChange={changeFileBook} 
                     accept="image/png, image/jpeg"
                     placeholder = 'Виберіть обкладенку'>
                     <Image/>
                  </InputFileApp>
                  <InputFileApp 
                     name="fileBook"
                     accept="application/pdf"
                     onChange={changeFileBook}
                     placeholder = 'Виберіть книгу в PDF'
                  >
                     <CloudArrowUpFill/>
                  </InputFileApp>
               </div>
               <ButtonApp onClick = {getNewBook}>
                  Додати
               </ButtonApp>
            </motion.div>
         </div>
   );
};
export default CreateBook
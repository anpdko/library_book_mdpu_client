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
import { LoaderDownload } from '../../UI'

import { uploadImg, uploadFile } from '../../../services/upload.service'

const CreateBook = ({setBox}) => {
   const [newBook, setNewBook] = useState({})
   const [loader, setLoader] = useState(false)
   const dispatch = useDispatch()

   //change
   const changeTextBook = (e) => {
      setNewBook({...newBook, [e.target.name]: e.target.value})
   }

   const changeArrBook = (e) => {
      let arr = e.target.value.split(',')
      arr = arr.map(item => item.trim())

      setNewBook({...newBook, [e.target.name]: arr})
   }

   const changeAndUploadCover = (e) => {
      setLoader(true)
      uploadImg(e.target.files[0], e.target.name)
      .then(res => {
         console.log(res.data.fileId)
         setNewBook({...newBook, [e.target.name]: res.data.fileId})
         setLoader(false)
      })
      .catch(err => {
         console.log(err)
      })
   }
   const changeAndUploadFile = (e) => {
      setLoader(true)
      uploadFile(e.target.files[0], e.target.name)
      .then(res => {
         console.log(res.data.fileId)
         setNewBook({...newBook, [e.target.name]: res.data.fileId})
         setLoader(false)
      })
      .catch(err => {
         console.log(err)
      })
   }

   // get data server
   const getNewBook = () => {
      if(!!newBook?.fileBook && !!newBook?.imgCover) {
         console.log(newBook)
         dispatch(createBook({body: newBook}))
         setBox(false)
      }
      else{
         alert("Додайте PDF файл!")
      }
   }

   return (
         <div className={styles.box_create} onClick={()=>setBox(false)}>
            {loader && <LoaderDownload/>}
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
                     onChange = {changeTextBook}
                     placeholder = 'Назва'
                  >
                     <Book/>
                  </InputApp>
                  <TextareaApp 
                     name = 'description'
                     onChange = {changeTextBook}
                     placeholder='Опис книги' 
                     className={styles.textarea}
                  />
                  <InputApp 
                     name = 'author'
                     onChange = {changeTextBook}
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
                     onChange = {changeTextBook}
                     placeholder = 'Видавець'
                  >
                     <PrinterFill/>
                  </InputApp>
                  <InputApp 
                     name = 'year'
                     type="number" 
                     onChange = {changeTextBook}
                     placeholder = 'Рік'
                  >
                     <CalendarDate/>
                  </InputApp>
                  <InputApp 
                     name = 'pageCount'
                     type="number" 
                     onChange = {changeTextBook}
                     placeholder = 'Кількість сторінок'
                  >
                     <Hash/>
                  </InputApp>
                  <SelectApp
                     name = 'language'
                     onChange = {changeTextBook}
                     list={['українська', 'англійська', 'російська']}
                  >
                     <GlobeAmericas/>
                  </SelectApp>
                  <InputFileApp 
                     name="imgCover"
                     onChange={changeAndUploadCover} 
                     accept="image/png, image/jpeg"
                     placeholder = 'Виберіть обкладенку'>
                     <Image/>
                  </InputFileApp>
                  <InputFileApp 
                     name="fileBook"
                     accept="application/pdf"
                     onChange={changeAndUploadFile}
                     placeholder = 'Виберіть книгу в PDF'
                  >
                     <CloudArrowUpFill/>
                  </InputFileApp>
               </div>
               <ButtonApp onClick = {getNewBook}>
                  Додати книгу до бібліотеки
               </ButtonApp>
            </motion.div>
         </div>
   );
};
export default CreateBook
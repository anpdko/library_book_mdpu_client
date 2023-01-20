import React, {useState} from 'react'
import styles from './BoxBook.module.scss'
import { XLg, 
   Book, Person, CloudArrowUpFill,
   ListStars, CalendarDate, Hash, 
   GlobeAmericas, Image, PrinterFill } from 'react-bootstrap-icons'
import { ButtonApp, InputApp, InputFileApp, SelectApp, TextareaApp } from '../../UI'
import { motion } from 'framer-motion'

import { LoaderDownload } from '../../UI'
import { uploadImg, uploadFile } from '../../../services/upload.service'
import { useNavigate } from 'react-router-dom'


const BoxBook = ({settings, newBook, setNewBook, getNewBook}) => {
   const [loader, setLoader] = useState(false)
   const navigate = useNavigate()

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
         setLoader(false)
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
         setLoader(false)
      })
   }



   return (
      <div className={styles.box_create} onClick={()=>navigate('/admin/panel')}>
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
               <h2>{settings?.title}</h2>
               <XLg className={styles.close} onClick={()=>navigate('/admin/panel')}/>
            </div>
            <div className={styles.inps}>
               <InputApp 
                  name = 'title'
                  value={newBook.title || ''}
                  onChange = {changeTextBook}
                  placeholder = 'Назва'
               >
                  <Book/>
               </InputApp>
               <TextareaApp 
                  name = 'description'
                  onChange = {changeTextBook}
                  value={newBook.description || ''}
                  placeholder='Опис книги' 
                  className={styles.textarea}
               />
               <InputApp 
                  name = 'author'
                  onChange = {changeTextBook}
                  value={newBook.author || ''}
                  placeholder = 'Автор'
               >
                  <Person/>
               </InputApp>
               <InputApp 
                  name = 'genre'
                  onChange = {changeArrBook}
                  value={newBook.genre || ''}
                  placeholder = 'Жанри (через кому)'
               >
                  <ListStars/>
               </InputApp>
               <InputApp 
                  name = 'category'
                  onChange = {changeArrBook}
                  value={newBook.category || ''}
                  placeholder = 'Категорії (через кому)'
               >
                  <ListStars/>
               </InputApp>
               <InputApp 
                  name = 'publisher'
                  onChange = {changeTextBook}
                  value={newBook.publisher || ''}
                  placeholder = 'Видавець'
               >
                  <PrinterFill/>
               </InputApp>
               <InputApp 
                  name = 'year'
                  type="number" 
                  value={newBook.year || ''}
                  onChange = {changeTextBook}
                  placeholder = 'Рік'
               >
                  <CalendarDate/>
               </InputApp>
               <InputApp 
                  name = 'pageCount'
                  type="number" 
                  value={newBook.pageCount || ''}
                  onChange = {changeTextBook}
                  placeholder = 'Кількість сторінок'
               >
                  <Hash/>
               </InputApp>
               <SelectApp
                  name = 'language'
                  value={newBook.language || ''}
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
               {settings?.btn}
            </ButtonApp>
         </motion.div>
      </div>
   );
};
export default BoxBook
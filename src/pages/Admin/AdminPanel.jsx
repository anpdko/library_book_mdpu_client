import React, {useState, useEffect} from 'react'
import styles from './Admin.module.scss'
import { ButtonApp, InputApp, Loader } from '../../components/UI'
import { Dashboard } from '../../components'
import { PlusCircleFill, Search } from 'react-bootstrap-icons'
import dashboard from '../../data/dashboard'
import { TableList, CreateBook } from '../../components'
import { motion, AnimatePresence } from 'framer-motion'

import { useSelector, useDispatch } from 'react-redux'
import { getBooks } from '../../store/books/booksSlice'


const imgUrl = process.env.REACT_APP_GOOGLE_DRIVE_IMG_URL 

const AdminPanel = () => {
   const [isVisibleBox, setIsVisibleBox] = useState(false)
   const [listDashboard, setListDashboard] = useState([])

   const dispatch = useDispatch()
   const {books, loading} = useSelector((state) => state.books)

   useEffect(()=>{
      dispatch(getBooks())
      setListDashboard(dashboard)
   },[dispatch])

   const changeDataBooks = (list) => {
      list = list.map((book) => {
         const { _id, __v, comments, ...newBook} = book
         return {
            ...newBook,
            imgCover: <img 
               src={imgUrl + book.imgCover}
               alt="imgCover"
            />,
            fileBook: <a 
               href={imgUrl + book.fileBook}
               target="_blank" rel="noreferrer"
            >посилання на файл</a>
         }
      })
      
      return list
   }

   if(loading) {
      return <Loader/>
   }
   
   return (
      <AnimatePresence>
      <div className={styles.admin}>
         <motion.div
            initial={{ x: -10, opacity: 0.2 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
         >
            <Dashboard list={listDashboard}/>
         </motion.div>
         <div className={styles.panel}>
            <motion.div
               initial={{ y: -15, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: -15, opacity: 0 }}
               transition={{ duration: 0.3 }}
            >
               <div className={styles.filter}>
                  <div className={styles.inputs}>
                     <InputApp type="text" placeholder='Поиск'>
                        <Search/>
                     </InputApp>
                     <ButtonApp>Пошук</ButtonApp>
                  </div>
                  <div className={styles.buts}>
                     <ButtonApp color='green' onClick={()=>setIsVisibleBox(!isVisibleBox)}>
                        <PlusCircleFill/>
                        Додати Книгу
                     </ButtonApp>
                  </div>
               </div>
            </motion.div>
            <motion.div
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: 20, opacity: 0 }}
               transition={{ duration: 0.3 }}
            >
               <TableList 
                  list={changeDataBooks(books)}
               />
            </motion.div>
         </div>
         {isVisibleBox && <CreateBook setBox={setIsVisibleBox}/>}
      </div>
      </AnimatePresence>
   );
};
export default AdminPanel
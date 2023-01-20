import React, {useState, useEffect} from 'react'
import styles from './Admin.module.scss'
import { ButtonApp, InputApp, Loader } from '../../components/UI'
import { Dashboard } from '../../components'
import { PlusCircleFill, Search } from 'react-bootstrap-icons'
import dashboard from '../../data/dashboard'
import { TableList } from '../../components'
import { motion, AnimatePresence } from 'framer-motion'

import { useSelector, useDispatch } from 'react-redux'
import { getBooks } from '../../store/books/booksSlice'
import RouterBoxInputs from '../../router/RouterBoxInputs'
import { useNavigate } from 'react-router-dom'
import { Pagination } from '../../components'


const imgUrl = process.env.REACT_APP_GOOGLE_DRIVE_IMG_URL 

const AdminPanel = () => {
   const [listDashboard, setListDashboard] = useState([])
   const dispatch = useDispatch()
   const {books, totalPages, loading} = useSelector((state) => state.books)
   const navigate = useNavigate()

   useEffect(()=>{
      dispatch(getBooks(1))
      setListDashboard(dashboard)
   },[dispatch])

   const getPagination = (page) => {
      dispatch(getBooks({page}))
   }


   const changeDataBooks = (list) => {
      return list.map((book) => {
         const {__v, comments, ...newBook} = book
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
                     <ButtonApp color='green' onClick={()=>navigate('create')}>
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
               <div>      
                  {loading?<Loader/>:''}
                  <TableList 
                     list={changeDataBooks(books)}
                  />
                  <Pagination 
                     pagination={getPagination} 
                     totalPages={totalPages}
                  />
               </div>

            </motion.div>
         </div>

         <RouterBoxInputs/>
      </div>
      </AnimatePresence>
   );
};
export default AdminPanel
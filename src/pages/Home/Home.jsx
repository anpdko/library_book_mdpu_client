import React, { useEffect } from 'react'
import styles from './Home.module.scss'
import {Filter, Pagination} from '../../components'
import { LoaderContent } from '../../components/UI'
import { AnimatePresence, motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { getBooks } from '../../store/books/booksSlice'
import ListBooks from './ListBooks'

const Home = () => {
   const dispatch = useDispatch()
   const {books, totalPages, loading} = useSelector((state) => state.books)

   useEffect(()=>{
      dispatch(getBooks({page: 1}))
   }, [dispatch])

   const getPagination = (page) => {
      dispatch(getBooks({page}))
   }

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
               {loading || books.length < 0
                  ?<div className='loader_box'>
                     <LoaderContent/>
                  </div>
                  :<ListBooks books={books}/>   
               }   
               <Pagination pagination={getPagination} totalPages={totalPages}/>
            </div>
         </section>
      </AnimatePresence>
   );
};
export default Home
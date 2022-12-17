import React, {useState, useEffect} from 'react'
import styles from './Admin.module.scss'
import { ButtonApp, InputApp } from '../../components/UI'
import { Dashboard } from '../../components'
import { PlusCircleFill, Search } from 'react-bootstrap-icons'
import dashboard from '../../data/dashboard'
import books from '../../data/books'
import { TableList, CreateBook } from '../../components'
import { motion, AnimatePresence } from 'framer-motion'

const AdminPanel = () => {
   const [isCreateBox, setIsCreateBox] = useState(false)
   const [listDashboard, setListDashboard] = useState([])
   const [listBooks, setListBooks] = useState([])

   useEffect(()=>{
      setListDashboard(dashboard)
   }, [])

   useEffect(()=>{
      setListBooks(books)
   },[])
   
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
                     <ButtonApp color='green' onClick={()=>setIsCreateBox(!isCreateBox)}>
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
               <TableList list={listBooks}/>
            </motion.div>
         </div>
         {isCreateBox && <CreateBook setBox={setIsCreateBox}/>}
      </div>
      </AnimatePresence>
   );
};
export default AdminPanel
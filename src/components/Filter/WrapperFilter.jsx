import React, {useState} from 'react'
import styles from './Filter.module.scss'
import {CaretRightFill, CaretDownFill} from 'react-bootstrap-icons'
import { motion, AnimatePresence } from 'framer-motion'

const WrapperFilter = ({title="тип", children}) => {
   const [visibility, serVisibility] = useState(true)

   return(
      <div className={styles.wrapper_filter}>
         <h3 
            onClick={() => serVisibility(!visibility)} 
            className={styles.title}
         >
            {visibility
               ?<CaretDownFill/>
               :<CaretRightFill/>
            }
            {title}
         </h3>
         <AnimatePresence initial={false}>
            {visibility &&
               <motion.div 
                  className={styles.filter_box}
                  initial={{ scaleY: 0.5, height: 0, opacity: 0 }}
                  animate={{ scaleY: 1, height: 'auto', opacity: 1 }}
                  exit={{ scaleY: 0.5, height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
               >
                  {children}
               </motion.div>
            }
         </AnimatePresence>
      </div>
   )
}

export default WrapperFilter
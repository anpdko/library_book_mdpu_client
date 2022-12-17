import React from 'react'
import styles from './Loader.module.scss'
import { motion, AnimatePresence } from "framer-motion";

const LoaderContent = () => {
   return (
      <AnimatePresence>
         <motion.div
            initial={{opacity: 0 }}
            animate={{opacity: 1 }}
            exit={{opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.loader_content}
         >
            <span className={styles.loader}></span>
         </motion.div>
      </AnimatePresence>
   );
};
export default LoaderContent
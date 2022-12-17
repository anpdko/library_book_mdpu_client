import React from 'react'
import styles from './ButtonLittleApp.module.scss'

const ButtonLittleApp = ({children, className, color = "blue", ...props}) => {
   return (
      <button {...props} 
         className={`
            ${styles.btn} 
            ${styles[color]}
            ${className}
      `}>
         {children}
      </button>
   );
};
export default ButtonLittleApp
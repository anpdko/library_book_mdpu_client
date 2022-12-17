import React from 'react'
import styles from './TextareaApp.module.scss'

const TextareaApp = ({className, placeholder, ...props}) => {
   return (
      <textarea 
         className={`${styles.textarea} ${className}`} 
         placeholder={placeholder} {...props}
      >   
      </textarea>
   );
};
export default TextareaApp
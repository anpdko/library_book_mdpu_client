import React from 'react'
import styles from './ButtonApp.module.scss'

const ButtonApp = (props) => {
   const {
      children, 
      className, 
      color = "blue", 
      anim ="transition", 
   } = props

   let padding = ""
   if(typeof(children) !== "string"){
      padding = "icon"
   }
   // color = blue, green, red
   // anim = diagonal, transition

   return (
      <button {...props} 
         className={`
            ${styles.btn} 
            ${styles[color]}
            ${styles[anim]}  
            ${styles[padding]}
            ${className}
      `}>
         {children}
      </button>
   );
};
export default ButtonApp
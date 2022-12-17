import React from 'react'
import styles from './InputApp.module.scss'

const InputApp = ({children, ...props}) => {
   return (
      <div className = {styles.box_input}>
         {children}
         <input {...props}/>
      </div>
   );
};
export default InputApp
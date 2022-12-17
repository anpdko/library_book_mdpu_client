import React from 'react'
import styles from './SelectApp.module.scss'

const SelectApp = ({children, list, ...props}) => {
   return (
      <label htmlFor="select" className={styles.select}>
         <div className={styles.box_icon}>
            {children}
         </div>
         <select id="select" {...props}>
            {list.map((item, index) => 
               <option key={index}>{item}</option>
            )}
         </select>
      </label>
   );
};
export default SelectApp
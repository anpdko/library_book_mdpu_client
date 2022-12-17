import React from 'react'
import styles from './CheckboxApp.module.scss'

const CheckboxApp = ({id, name, ...props}) => {
   return (
      <div className={styles.checkbox}>
         <input {...props} type="checkbox" id={id} name="genre"/>
         <label htmlFor={id}>
            {name}
         </label>
      </div>
   );
};
export default CheckboxApp
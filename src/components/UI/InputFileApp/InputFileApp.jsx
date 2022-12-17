import React, {useState} from 'react'
import styles from './InputFileApp.module.scss'
import { subText } from '../../../services/text.services'

const InputFileApp = ({placeholder, name, onChange, children, ...props}) => {
   const [nameFile, setNameFile] = useState('')
   return (
      <div className={styles.file}>
         {children}
         <label htmlFor={name}>{!!nameFile?subText(nameFile, 17):placeholder}</label>
         <input 
            onChange={(e)=> {
               onChange(e)
               setNameFile(e.target.files[0]?.name)
            }} 
            {...props} 
            name={name} 
            className={styles.input} 
            type="file" 
            id={name} 
         />
      </div>
   );
};
export default InputFileApp
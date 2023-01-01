import React from 'react'
import styles from './TableItem.module.scss'
import { ButtonLittleApp } from '../../UI'
import { TrashFill, PencilFill } from 'react-bootstrap-icons'
import { subText } from '../../../services/text.services'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteBook } from '../../../store/books/booksSlice'

const TableItem = ({id, obj}) => {
   const dispatch = useDispatch()
   const regexp = /<[^<>]+>/g;
   return (
      <tr>
         {Object.values(obj).map((item, index) => 
            Array.isArray(item)
               ?<td key={index}>{item.join(", ")}</td>
               :<td key={index}>

                  {regexp.test(String(item))
                     ?item
                     :subText(item, 70)
                  }
               </td> 
         )}
         <td className={styles.btns}>
            <Link to={`edit/${id}`}>
               <ButtonLittleApp color='blue'>
                  <PencilFill/>
               </ButtonLittleApp>
            </Link>
            <ButtonLittleApp color='red' onClick={
               () => dispatch(deleteBook({id}))
            }>
               <TrashFill/>
            </ButtonLittleApp>
         </td>
      </tr>
   );
};
export default TableItem
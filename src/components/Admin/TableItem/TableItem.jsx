import React from 'react'
import styles from './TableItem.module.scss'
import { ButtonLittleApp } from '../../UI'
import { TrashFill, PencilFill } from 'react-bootstrap-icons'
import { subText } from '../../../services/text.services'

const TableItem = ({obj}) => {

   return (
      <tr>
         {Object.values(obj).map((item, index) => 
            Array.isArray(item)
               ?<td key={index}>{item.join(", ")}</td>
               :<td key={index}>{subText(item, 70)}</td> 
         )}
         <td className={styles.btns}>
            <ButtonLittleApp color='blue'>
               <PencilFill/>
            </ButtonLittleApp>
            <ButtonLittleApp color='red'>
               <TrashFill/>
            </ButtonLittleApp>
         </td>
      </tr>
   );
};
export default TableItem
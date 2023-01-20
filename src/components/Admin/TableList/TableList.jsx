import React from 'react'
import styles from './TableList.module.scss'
import TableItem from '../TableItem/TableItem';

const TableList = ({list}) => {
   return (
      <div className={styles.table}>
         <div className={styles.table_scroll}>
            <table>
               <thead>
                  <tr>
                     {!!list.length && 
                        Object.keys(list[0]).map(title => 
                           title !== "_id" && <th key={title}>{title}</th>
                        )
                     }
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {!!list.length && 
                     list.map((obj, index) => {
                           const {_id, ...newObj} = obj
                           return <TableItem key={_id} id={_id} obj={newObj}/>  
                        }
                     )
                  }
               </tbody>
            </table>
         </div>
      </div>
   );
};
export default TableList
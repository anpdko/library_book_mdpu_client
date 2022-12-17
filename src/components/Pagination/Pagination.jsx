import React, {useState} from 'react'
import styles from './Pagination.module.scss'

const Pagination = () => {
   const [pageActive, setPageActive] = useState(1)
   const pages = 5;

   const getPagination = () => {
      const elems = [];
      if(pageActive > 1){
         elems.push(<li key='<<'>{"<<"}</li>)
         elems.push(<li key='<'>{"<"}</li>)
      }
      for (let i=1; i<=pages; i++) {
         elems.push(<li 
            key={i}
            className={pageActive === i?styles.active:''}
            onClick={() => setPageActive(i)}
         >{i}</li>)
      }
      if(pageActive < pages){
         elems.push(<li key='>'>{">"}</li>)
         elems.push(<li key='>>'>{">>"}</li>)
      }
      return elems
   }


   return (
      <div className={styles.pagination}>
         <ul>
            {getPagination()}
         </ul>
      </div>
   );
};
export default Pagination
import React, {useState} from 'react'
import styles from './Pagination.module.scss'
const Pagination = ({pagination, totalPages = 1}) => {
   const [pageActive, setPageActive] = useState(1)

   const pag = (i) => {
      if(i > 0 && i <= totalPages){
         setPageActive(i)
         pagination(i)
      }
   }

   const getPagination = () => {
      const elems = [];
      if(pageActive > 1){
         elems.push(<li 
            onClick={() => pag(1)} 
            key='<<'
         >{"<<"}
         </li>)
         elems.push(<li 
            onClick={() => pag(pageActive-1)} 
            key='<'
         >{"<"}
         </li>)
      }
      for (let i=1; i<=totalPages; i++) {
         elems.push(<li 
            key={i}
            className={pageActive === i?styles.active:''}
            onClick={() => pag(i)}
         >{i}</li>)
      }
      if(pageActive < totalPages){
         elems.push(<li 
            onClick={() => pag(pageActive+1)} 
            key='>'
         >{">"}
         </li>)
         elems.push(<li 
            onClick={() => pag(totalPages)} 
            key='>>'
         >{">>"}
         </li>)
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
import React from 'react'
import styles from './Dashboard.module.scss'
import { Link } from 'react-router-dom';
import { adminLogout } from '../../../store/admin/adminSlice'
import { useDispatch } from 'react-redux'
import { BoxArrowLeft } from 'react-bootstrap-icons'

const Dashboard = ({list}) => {
   const dispatch = useDispatch();

   return (
      <nav className={styles.dashboard}>
         <h2>Admin Panel</h2>
         <ul>
            {list.map((item, i) => 
               <li key={i}>
                  <Link to={item.link}>
                     {item.icon}
                     <span className={i === 0?styles.active:''}>
                        {item.title}
                     </span>
                  </Link>
               </li>
            )}
            <li onClick = {() => dispatch(adminLogout())}>
               <BoxArrowLeft/>
               <span>Выйти</span>
            </li>
         </ul>
      </nav>
   );
};
export default Dashboard
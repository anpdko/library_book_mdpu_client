import React, {useState, useEffect} from 'react'
import styles from './Admin.module.scss'
import {InputApp, ButtonApp, Loader} from '../../components/UI'
import {PersonFill, LockFill} from 'react-bootstrap-icons'
import {Navbar} from '../../components';
import {adminLogin, clearMessage} from '../../store/admin/adminSlice'
import { useDispatch, useSelector } from "react-redux";

const AdminAuth = () => {
   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')
 
   const { loading, message } = useSelector((state) => state.admin);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(clearMessage());
   }, [dispatch]);

   const onSubmit = () => {
      dispatch(adminLogin({ login, password }))
   }
   

   return (
      <React.Fragment>
         <div className={styles.auth_container}>
         <Navbar title=" Aдмін панель Бібліотеки МДПУ ім. Б. Хмельницького"/>
         <div className={styles.auth}>
            <h1>Вхід</h1>
            <div className={styles.inputs}>
               <InputApp onChange={(e) => setLogin(e.target.value)} value={login} type="text" placeholder='логін'>
                  <PersonFill/>
               </InputApp>
               <span className={styles.error}>{message?.login}</span>
               <InputApp onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='пароль'>
                  <LockFill/>
               </InputApp>
               <span className={styles.error}>{message?.password}</span>
            </div>
            <ButtonApp onClick={onSubmit}>
               Увійти
            </ButtonApp>
         </div>
      </div>
      {loading && <Loader/>}
      </React.Fragment>
   );
};
export default AdminAuth;
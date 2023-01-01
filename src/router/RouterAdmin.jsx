import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AdminAuth, AdminPanel, Eror404 } from '../pages'
import { useSelector } from "react-redux";

const RouterAdmin = () => {
   const isLoggedIn = useSelector((state)=> state.admin.isLoggedIn)

   // if(!isLoggedIn){
   //    return (
   //       <Routes>
   //          <Route path='/auth' element={<AdminAuth/>}/>
   //          <Route path="*" element={<Navigate to={'auth'}/>} />
   //       </Routes>
   //    );
   // }

   return (
      <React.Fragment>
         {isLoggedIn
            ?<Routes>
               <Route path='/panel/*' element={<AdminPanel/>}/>
               <Route path="/error" element={<Eror404/>}/>
               <Route path="*" element={<Navigate to={'/admin/panel'}/>} />
            </Routes>
            :<Routes>
               <Route path='/auth' element={<AdminAuth/>}/>
               <Route path="*" element={<Navigate to={'auth'}/>} />
            </Routes>
         }
      </React.Fragment> 
   );
};
export default RouterAdmin
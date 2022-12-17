import React from 'react'
import {Navigate, Routes, Route } from 'react-router-dom'
import {Home, BookPage} from '../pages'

const RouterApp = () => {
   const isLogin = true;
   
   if(isLogin){
      return (
         <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/book/:id' element={<BookPage/>}/>
            <Route path="*" element={<Navigate to={'/'}/>} />
         </Routes>
      );
   }
};
export default RouterApp
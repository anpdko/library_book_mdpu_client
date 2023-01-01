import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { CreateBook, EditBook } from '../components'

const RouterBoxInputs = () => {
   return (
      <Routes>
         <Route path='create' element={<CreateBook/>}/>
         <Route path='edit/:id' element={<EditBook/>}/>
      </Routes>
   );
};
export default RouterBoxInputs
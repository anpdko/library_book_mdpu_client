import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './admin/adminSlice'
import boolsSlice from './books/booksSlice'

export default configureStore({
   reducer: {
      admin: adminSlice,
      books: boolsSlice
   }
})
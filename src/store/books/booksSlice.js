import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"
import authHeader from '../../services/Admin/header.service'
import { adminLogout } from '../admin/adminSlice'

const API_URL = process.env.REACT_APP_API_URL 

const initialState = {
   books: [],
   loading: null,
   message: null
}


export const createBook = createAsyncThunk(
   'books/createBook',
   async (data, thunkAPI) => {
      try{
         const res = await axios.post(
            API_URL + 'api/books', 
            data.body, 
            {headers: authHeader()}
         )
         if(res.statusText !== 'OK'){
            throw new Error('Server error');
         }
         thunkAPI.dispatch(addBooks(res.data))
      }
      catch(error){
         if(error.response.status === 401){
            alert(error.response.data.message)
            thunkAPI.dispatch(adminLogout())
         }
         return thunkAPI.rejectWithValue(error.message)
      }
   }
)



export const booksSlice = createSlice({
   name: 'books',
   initialState,
   reducers: {
      setPosts: (state, action) => {
         state.books = action.payload.books
      },
      addBooks: (state, action) => {
         state.books = [...state.books, ...action.payload.book]
      },
   },
   extraReducers: {
      //createBook
      [createBook.pending]: (state) => {
         state.loading = true
         state.message = null
      },
      [createBook.fulfilled]: (state) => {
         state.loading = false
      },
      [createBook.rejected]: (state, action) => {
         state.loading = false;
         state.message = action.payload
      },

   }
})



export const { addBooks } = booksSlice.actions

export default booksSlice.reducer
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

export const getBooks = createAsyncThunk(
   'bokks/getBooks',
   async ({page}, thunkAPI) => {
      try{
         const res = await axios.get(`${API_URL}api/books?page=${page}`)
         if(res.status !== 200){
            console.log('Server error')
            throw new Error('Server error');
         }
         thunkAPI.dispatch(setBooks({books: res.data}));
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


export const createBook = createAsyncThunk(
   'books/createBook',
   async (data, thunkAPI) => {
      try{
         const res = await axios.post(
            `${API_URL}api/books`, 
            data.body, 
            {headers: authHeader()}
         )
         if(res.status !== 200){
            console.log('Server error')
            throw new Error('Server error');
         }
         thunkAPI.dispatch(addBooks({book: res.data}))
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

export const getBook = createAsyncThunk(
   'bokks/getBook',
   async (bookId, thunkAPI) => {
      try{
         const res = await axios.get(
            `${API_URL}api/books/${bookId}`,
            {headers: authHeader()}
         )
         if(res.status !== 200){
            console.log('Server error')
            throw new Error('Server error');
         }
         thunkAPI.dispatch(setBooks({books: [res.data]}));
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
      setBooks: (state, action) => {
         state.books = action.payload.books
      },
      addBooks: (state, action) => {
         state.books = [...state.books, ...action.payload.book]
      },
   },
   extraReducers: {
      //getBooks
      [getBooks.pending]: (state) => {
         state.loading = true
         state.message = null
      },
      [getBooks.fulfilled]: (state) => {
         state.loading = false
      },
      [getBooks.rejected]: (state, action) => {
         state.loading = false;
         state.message = action.payload
      },

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



export const { addBooks, setBooks } = booksSlice.actions

export default booksSlice.reducer
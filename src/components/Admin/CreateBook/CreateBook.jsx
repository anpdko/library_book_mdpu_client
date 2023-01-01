import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { createBook } from '../../../store/books/booksSlice';
import  BoxBook from  '../BoxBook/BoxBook'
import { useNavigate } from 'react-router-dom'


const CreateBook = () => {
   const [newBook, setNewBook] = useState({})
   const dispatch = useDispatch()
   const navigate = useNavigate()


   // get data server
   const getNewBook = () => {
      if(!!newBook?.fileBook && !!newBook?.imgCover) {
         console.log(newBook)
         dispatch(createBook({body: newBook}))
         navigate('admin/panel')
      }
      else{
         alert("Додайте PDF файл!")
      }
   }

   return <BoxBook 
      settings={{
         title:"Додати книгу",
         btn:'Додати книгу до бібліотеки'
      }}
      newBook={newBook} 
      setNewBook={setNewBook} 
      getNewBook={getNewBook} 
   />;
};
export default CreateBook
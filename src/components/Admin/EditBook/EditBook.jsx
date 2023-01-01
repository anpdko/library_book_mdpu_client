import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { putBook } from '../../../store/books/booksSlice';
import  BoxBook from  '../BoxBook/BoxBook'
import { useNavigate, useParams } from 'react-router-dom'

const EditBook = () => {
   const [newBook, setNewBook] = useState({})
   const {books} = useSelector((state) => state.books)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const bookId = useParams().id

   useEffect(() => {
      setNewBook(books.find(book => book._id === bookId))
   }, [books, bookId])


   // get data server
   const getNewBook = () => {
      dispatch(putBook({id: bookId, body: newBook}))
      navigate('admin/panel')
   }

   return <BoxBook 
      settings={{
         title:"Редагування книги",
         btn:'Зберегти відредаговану книгу'
      }}
      newBook={newBook} 
      setNewBook={setNewBook} 
      getNewBook={getNewBook} 
   />;
};
export default EditBook
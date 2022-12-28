import axios from 'axios';
import React, {useState} from 'react'

const TestUpload = () => {
   const [file, setFile] = useState({})

   const onSubmit = () => {
      console.log(file)

      axios.post('http://localhost:5000/api/file/upload', file)
      .then(res => {
         console.log(res.data)
      })
      .catch(err => {
         console.log(err)
      })
   }

   return (
      <div>
         <input 
            onChange={(e) => 
               setFile(e.target.files[0])
            } 
            type="file"
         />
         <button onClick={onSubmit}>отправить</button>
      </div>
   );
};
export default TestUpload
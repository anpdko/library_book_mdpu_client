import axios from 'axios';
import authHeader from './Admin/header.service'
import imageCompression from 'browser-image-compression';

const API_URL = process.env.REACT_APP_API_URL


const uploadImg = async (img, name, size=860) => {
   const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: size,
      useWebWorker: true
    }
    const imgResizer = await imageCompression(img, options);
    if(!!imgResizer){
      try{
         const data = new FormData()
         data.append(name, imgResizer)
         const res = await axios.post(API_URL + 'api/file/upload/img', data, {
            headers: {
               'content-type': 'mulpipart/form-data',
               ...authHeader()
            }
         })
         return res;
      }catch(err) {
         console.log(err)
         if(err?.response?.status === 401){
            alert("Пользователь, не авторизован. Повторите вход.")
         }
         else{
            alert("Ошибка загрузки картинки на сервер, попробуйте позже!")
         }
      }
    }
}

const uploadFile = async (file, name) => {

    if(!!file){
      try{
         const data = new FormData()
         data.append(name, file)
         const res = await axios.post(API_URL + 'api/file/upload/file', data, {
            headers: {
               'content-type': 'mulpipart/form-data',
               ...authHeader()
            }
         })
         return res;
      }catch(err) {
         console.log(err)
         alert("Ошибка загрузки картинки на сервер, попробуйте позже!")
      }
    }
}

export { uploadImg, uploadFile }
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;


const login = async(login, password) => {
   return axios.post(API_URL + "api/admin/login", {
      login,
      password,
   })
   .then((res) => {
      if (res.data.token) {
         localStorage.setItem("admin", JSON.stringify(res.data));
      }
      return res.data;
   })
};

const logout = () => {
   localStorage.removeItem("admin");
};

const isAuth = (status) => {
   if(status === 401 && localStorage.getItem('admin') !== null){
      logout()
      alert("Время аторизации истекло!")
      return true;
   }
   return false;
}

const adminService = {
  login,
  logout,
  isAuth
};


export default adminService;
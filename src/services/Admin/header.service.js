
//проверяет локальное хранилище на наличие admin элемента
export default function authHeader() {
   const user = JSON.parse(localStorage.getItem('admin'));

   if (user && user.token) {
      return { Authorization: 'Bearer ' + user.token };
   } else {
      return {};
   }
}
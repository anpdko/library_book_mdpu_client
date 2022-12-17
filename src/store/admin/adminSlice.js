import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from '../../services/Admin/admin.service'

const admin = JSON.parse(localStorage.getItem("admin"));

const initialState = admin
? { 
   admin,
   isLoggedIn: true, 
   loading: false,
   message: null
}
: { 
   admin: null,
   isLoggedIn: false, 
   loading: false,
   message: null
};

export const adminLogin = createAsyncThunk(
   'admin/adminLogin',
   async({login, password}, thunkAPI) => {
      try {
         const data = await adminService.login(login, password);
         return { admin: data };
      } 
      catch (error) {
         const message =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();
         thunkAPI.dispatch(setMessage(message));
         return thunkAPI.rejectWithValue();
     }
   }
)

export const adminLogout = createAsyncThunk(
   "admin/adminLogout", 
   async (_, thunkAPI) => {
      await adminService.logout();
      thunkAPI.dispatch(clearAdmin());
      return thunkAPI.rejectWithValue();
   }
);

const adminSlice = createSlice({
   name: "admin",
   initialState,
   reducers: {
      setMessage: (state, action) => {
         state.message = action.payload
      },
      clearMessage: (state) => {
         state.message = ""
      },
      clearAdmin: () => {
         return {
            admin: null,
            isLoggedIn: false,
            loading: false,
            message: null
         }
      }
   },
   extraReducers: {
      [adminLogin.pending]: (state, action) => {
         state.isLoggedIn = false;
         state.loading = true;
         state.admin = null;
         state.message = null;
      },
      [adminLogin.fulfilled]: (state, action) => {
         state.isLoggedIn = true;
         state.loading = false;
         state.admin = action.payload.admin;
      },
      [adminLogin.rejected]: (state) => {
         state.isLoggedIn = false;
         state.loading = false;
         state.admin = null;
      },
   }
})


export const { setMessage, clearMessage, clearAdmin } = adminSlice.actions
export default adminSlice.reducer;


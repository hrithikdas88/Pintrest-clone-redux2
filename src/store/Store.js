import { configureStore  } from "@reduxjs/toolkit";
import photoReducer from '../store/PhotoSlice';
import FavoriteSlice from "./FavoriteSlice";



const store=configureStore({
    reducer:{
      photos:photoReducer,
      favorite:FavoriteSlice,
    
    }
})

export default store;
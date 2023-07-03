import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const FavoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
   
  },
});
export const { add, remove } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;

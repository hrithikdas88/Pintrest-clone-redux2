import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
  const response = await fetch(
    "https://api.pexels.com/v1/curated?page=2&per_page=40",
    {
      headers: {
        Authorization:
          "z7WLXSZGpoTzrzcOctxFmJVdTHxdG8dbpO98Oz5XIdwAPFykjDADHNl0",
      },
    }
  );

  const data = await response.json();
  return data.photos;
});

const photoSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.loading = false;
        state.photos = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default photoSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import profileData from '../../profileData.json';

export const fetchUserProfileData = createAsyncThunk(
  'profile/fetchUserProfileData',
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return profileData;
  }
);

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserProfileData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUserProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;

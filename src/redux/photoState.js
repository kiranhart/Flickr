import { createSlice } from '@reduxjs/toolkit';

export const photoSlice = createSlice({
    name: 'photos',
    initialState: {
        photos: [],
        loading: false,
    },
    reducers: {
        getPhotosFetch: (state) => {
            state.loading = true;
        },
        getPhotosSuccess: (state, action) => {
            state.photos = action.payload;
            state.loading = false;
        }
    }
});

export const { getPhotosFetch, getPhotosSuccess } = photoSlice.actions;
export default photoSlice.reducer;
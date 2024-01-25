import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: []
}

export const getCategories = createAsyncThunk('category', async() => {
    const response = await fetch('https://65b260c39bfb12f6eafd9a4b.mockapi.io/api/shopping/categories')
    const data = response.json();
    return data;
})

const categorySlcie = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
        })
    }
})

export default categorySlcie.reducer
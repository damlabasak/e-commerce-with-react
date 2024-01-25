import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productDetail: [],
    productDetailStatus: STATUS.IDLE
}

export const getProducts = createAsyncThunk('getproducts', async() => {
    const response = await fetch('https://65b260c39bfb12f6eafd9a4b.mockapi.io/api/shopping/products')
    const data = await response.json();
    return data;
})

export const getDetailProduct = createAsyncThunk('getdetialproduct', async(id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json();
    return data;
})

const productSlice = createSlice ({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.productsStatus = STATUS.LOADING
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.productsStatus = STATUS.SUCCESS
            state.products = action.payload
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.productsStatus = STATUS.FAIL
        })
        .addCase(getDetailProduct.pending, (state, action) => {
            state.productDetailStatus = STATUS.LOADING
        })
        .addCase(getDetailProduct.fulfilled, (state, action) => {
            state.productDetailStatus = STATUS.SUCCESS
            state.productDetail = action.payload
        })
        .addCase(getDetailProduct.rejected, (state, action) => {
            state.productDetailStatus = STATUS.FAIL
        })
    }
})

export default productSlice.reducer
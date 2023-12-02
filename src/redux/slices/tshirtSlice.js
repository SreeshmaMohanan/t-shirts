import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//apicall
export const fetchShirts=createAsyncThunk('tshirts/fetchShirts',()=>{
   return axios.get('/shirts.json').then(response=>response.data.tshirts)

})

const tshirtSlice=createSlice({
    name:"tshirts",
    initialState:{
        loading:false,
        allTshirts:[],
        error:""
    }, reducers:{
        searchShirts:(state,action)=>{
            state.allTshirts=state.TshirtContainer.filter(item=>item.category.toLowerCase().includes(action.payload))

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchShirts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchShirts.fulfilled, (state, action) => {
            state.loading = false;
            state.allTshirts = action.payload
            state.TshirtContainer=action.payload
            state.error = ""
        })
        builder.addCase(fetchShirts.rejected, (state, action) => {
            state.loading = false;
            state.allTshirts=[]

            state.error = action.error.message
            })
    }
})
export const {searchShirts}=tshirtSlice.actions
export default tshirtSlice.reducer;


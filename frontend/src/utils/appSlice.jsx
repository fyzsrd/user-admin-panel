import { createSlice } from "@reduxjs/toolkit";

const appSlice =createSlice({
    name:'counter',
    initialState: {
        counter: 0
    },
    reducers:{
        addCounter: (state)=>{
            state.counter += 1 ;    

        },
        substractCounter: (state)=>{
            state.counter -= 1 ;
        }
        
    }
})

export const {addCounter,substractCounter}=appSlice.actions;

export default appSlice.reducer
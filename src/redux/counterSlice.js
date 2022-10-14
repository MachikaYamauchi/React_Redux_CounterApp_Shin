import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter", // the name of slice
    initialState: {
        value:0,
    },
    
    // reducerが作成されると、自動的にaction creatorも生成される
    reducers: {
        // The Reducer of increment
        increment:(state) => {// ここでの"state"は,初期状態のことも指すし、+1ずつされていったそのときどきの状態
            state.value += 1;
        },
        decrement:(state) => {
            state.value -= 1;
        },
        incrementByAmount:(state, action) => {
            state.value += action.payload;
        }
    }
});

// Export the action creators so that any component can use these action creators
export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
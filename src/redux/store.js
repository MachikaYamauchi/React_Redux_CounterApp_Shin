import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// Hold the state which tells the counter value is 2? 3? 6?....
export const store =configureStore({
    reducer: {
        counter:counterReducer,
    },
})
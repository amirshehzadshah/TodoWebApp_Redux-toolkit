import { configureStore } from "@reduxjs/toolkit";
import  todoSlices  from "./todoSlices"; // Import your reducer

const store = configureStore({
    reducer: {
        todoSlices // Add your reducer to the store
    }
})

export default store;
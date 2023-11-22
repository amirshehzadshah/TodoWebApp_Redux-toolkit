import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  todos: [] // Initial state as an empty array
};

const todoSlices = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action) => {
      // console.log(action.payload)
      state.todos.push(action.payload); // Push the new value to the array
    },
    deleteTodos: (state, action) => {
      const indexToRemove = action.payload;
      state.todos.splice(indexToRemove, 1);
    },
    removeAllTodos: (state) => {
      state.todos = [];
    }
  },
})

export const { addTodos, deleteTodos, removeAllTodos } = todoSlices.actions;
export default todoSlices.reducer;
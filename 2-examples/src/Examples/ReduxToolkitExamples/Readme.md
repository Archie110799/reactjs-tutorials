# https://redux-toolkit.js.org/api/createAsyncThunk

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Đầu tiên, tạo thunk
export const fetchToDoList = createAsyncThunk(
 'todo/fetchList', 
 async (userId) => {
    const response = await fetchById(userId)
    return response.data
 });

// Tiếp thep xử lý các actions trong reducers.
const todoSlice = createSlice({
  name: 'todo',
  initialState: { todos: [], loading: 'idle' },
  reducers: {
    
  },
  extraReducers: {
    [fetchToDoList.pending]: (state, action) => {
      state.loading = 'pending'
    },
    [fetchToDoList.fulfilled]: (state, action) => {
     state.loading = 'success';
      state.todos.push(action.payload)
    },
    [fetchToDoList.rejected]: (state, action) => {
        state.loading = 'error'
        state.error = action.error
    }
  }
})

// Cuối cùng, dispatch thunk trên
dispatch(fetchToDoList(1))

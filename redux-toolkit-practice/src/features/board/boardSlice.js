import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const axiosGetBoards = createAsyncThunk(
  'member/axiosGetBoards',
  async () => {
    return axios({
      method: 'get',
      url: 'http://13.209.252.39:8080/board',
    }).then((res) => res.data);
  },
);

export const axiosPostBoard = createAsyncThunk(
  'member/axiosPostBoard',
  async (newBoard) => {
    return axios({
      method: 'post',
      url: 'http://13.209.252.39:8080/board',
      data: newBoard,
    }).then((res) => res.data);
  },
);

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    boards: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(axiosGetBoards.fulfilled, (state, action) => {
      state.boards = action.payload;
    })
    .addCase(axiosPostBoard.fulfilled, (state, action) => {
      console.log(action.payload);
    })    
  },
});

export default boardSlice.reducer;

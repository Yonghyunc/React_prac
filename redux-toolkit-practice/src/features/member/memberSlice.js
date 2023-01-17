import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const axiosGetMembers = createAsyncThunk(
  'member/axiosGetMembers',
  async () => {
    return axios({
      method: 'get',
      url: 'http://13.209.252.39:8080/member',
    }).then((res) => res.data);
  },
);

export const axiosPostNewMember = createAsyncThunk(
  'member/axiosPostNewMember',
  async (newMember) => {
    return axios({
      method: 'post',
      url: 'http://13.209.252.39:8080/member',
      data: newMember,
    }).then((res) => res.data)
  }
);

export const axiosDeleteMember = createAsyncThunk(
  'member/axiosPostNewMember',
  async(id) => {
    return axios({
      method: 'delete',
      url: `http://13.209.252.39:8080/member/${id}`,
    })
  }
)

export const memberSlice = createSlice({
  name: 'member',
  initialState: {
    members: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(axiosGetMembers.fulfilled, (state, action) => {
      state.members = action.payload;
    })
    .addCase(axiosPostNewMember.fulfilled, (state, action) => {
      // state.members = action.payload;
      console.log(action.payload);
    })
    .addCase(axiosDeleteMember, (state, action) => {
      console.log(action.payload)
    })
    
  },
});

export default memberSlice.reducer;

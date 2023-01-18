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
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Credentials': 'true',
      //   'x-cors-api-key': 'temp_277acf6c31ce66b998efabf8d35e7231',
      // },
    }).then((res) => res.data);
  },
);

export const axiosDeleteMember = createAsyncThunk(
  'member/axiosPostNewMember',
  async (id) => {
    return axios({
      method: 'delete',
      url: `http://13.209.252.39:8080/member/${id}`,
    });
  },
);

export const axiosPutMember = createAsyncThunk(
  'member/axiosPutMember',
  async (payload) => {
    return axios({
      method: 'put',
      url: `http://13.209.252.39:8080/member/${payload[0]}`,
      data: payload[1],
    }).then((res) => res.data);
  },
);

export const memberSlice = createSlice({
  name: 'member',
  initialState: {
    members: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(axiosGetMembers.fulfilled, (state, action) => {
      console.log('dl', action.payload);
      state.members = action.payload;
    });
    // .addCase(axiosPostNewMember.fulfilled, (state, action) => {})
    // .addCase(axiosDeleteMember, (state, action) => {
    //   console.log(action.payload);
    // });
    // .addCase(axiosPutMember.fulfilled, (state, action) => {
    //   console.log('ht', action.payload);
    //   console.log(state.members);
    // });
  },
});

export default memberSlice.reducer;

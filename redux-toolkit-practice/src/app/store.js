import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import memberReducer from '../features/member/memberSlice';
import boardReducer from '../features/board/boardSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    member: memberReducer,
    board: boardReducer,
  },
});

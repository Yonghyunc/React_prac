import { handleActions } from "redux-actions";
import * as api from '../lib/api';
import createRequestThunk from "./createRequestThunk";


const GET_MEMBER = 'member/GET_MEMBER';
const GET_MEMBER_SUCCESS = 'member/GET_MEMBER_SUCCESS';

export const getMember = createRequestThunk(GET_MEMBER, api.Member);

const initialState = {
  member: []
};

const member = handleActions(
  {
    [GET_MEMBER]: (state, action) => ({
      ...state,
      member: action.payload
    })
  },
  initialState
)

export default member;
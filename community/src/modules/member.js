import { handleActions } from 'redux-actions';
import * as membersAPI from '../api/member';
// import createRequestThunk from './createRequestThunk';

// Action
const GET_MEMBERS = 'member/GET_MEMBER';
const GET_MEMBERS_SUCCESS = 'member/GET_MEMBER_SUCCESS';
const GET_MEMBERS_FAILURE = 'member/GET_MEMBER_FAILURE';

const ADD_MEMBER = 'member/ADD_MEMBER';
const ADD_MEMBER_SUCCESS = 'member/ADD_MEMBER_SUCCESS';
const ADD_MEMBER_FAILURE = 'member/ADD_MEMBER_FAILURE';


// Middleware == dispatch(action)
export const getMember = () => async (dispatch) => {
  dispatch({ type: GET_MEMBERS });
  try {
    const members = await membersAPI.getMembersAxios();
    console.log('try', members);
    dispatch({ type: GET_MEMBERS_SUCCESS, members });
  } catch (e) {
    dispatch({ type: GET_MEMBERS_FAILURE, error: e });
  }
};

export const addMember = (newMember) => async (dispatch) => {
  console.log('여긴 오니..?');
  console.log(newMember);
  dispatch({ type: ADD_MEMBER });
  try {
    const newMembers = await membersAPI.addMemberAxios(newMember);
    console.log('newMembers', newMembers);
    dispatch({ type: ADD_MEMBER_SUCCESS, newMembers })
  } catch (e) {
    console.log('mi', e);
    dispatch({ type: ADD_MEMBER_FAILURE});
  }
};

const initialState = {
  members: [],
  newMembers: '',
};

// Reducer
const member = handleActions(
  {
    [GET_MEMBERS_SUCCESS]: (state, action) => ({
      ...state,
      members: action.members,
    }),
    [ADD_MEMBER_SUCCESS]: (state, action) => ({
      ...state,
      newMembers: action.newMembers,
    }),
  },
  initialState,
);

export default member;

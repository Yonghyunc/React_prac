import { combineReducers } from "redux";
import member from './member';
import article from './article';

const rootReducer = combineReducers({
  member,
  article
});

export default rootReducer;
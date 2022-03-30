import { combineReducers } from 'redux';
import job from './job';
import { list } from "./list";

const rootReducer = combineReducers({
  job,
  list,
});

export default rootReducer;

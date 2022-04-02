import { combineReducers } from 'redux';
import job from './job';
import { CreateJob} from "./CreateJob";

const rootReducer = combineReducers({
  job,
  CreateJob,
});

export default rootReducer;

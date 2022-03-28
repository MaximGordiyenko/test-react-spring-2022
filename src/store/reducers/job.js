import { actionTypes } from 'common/enums';

const defaultState = {
  list: [],
  result: [],
};

function job(state = defaultState, { type, payload }) {
  switch (type) {
    case actionTypes.GET_ALL_JOBS_SUCCESS: {
      return {
        ...state,
        list: payload
      };
    }
    case actionTypes.JOB_SEARCH: {
      return {
        ...state,
        result: state.list.filter(({ user_name, category, description }) => {
          payload = payload.toLowerCase();
          category = category.toLowerCase();
          user_name = user_name.toLowerCase();
          description = description.toLowerCase();

          return payload === user_name || payload === category || payload === description;
        })
      };
    }
    default:
      return state;
  }
}

export default job;

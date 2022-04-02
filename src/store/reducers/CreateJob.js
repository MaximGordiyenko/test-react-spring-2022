import { actionTypes } from "../../common/enums";

const listState = {
  id: '',
  status: '',
  date_created: '',
  user_name: "",
  category: "",
  description: "",
};

export const CreateJob = (state = listState, { type, payload }) => {
  switch (type) {
    case actionTypes.CREATE_JOB: {
      return {
        ...state,
        id: payload.id,
        status: payload.status,
        date_created: payload.date_created,
        user_name: payload.user_name,
        category: payload.category,
        description: payload.description,
      };
    }
    default:
      return state;
  }
};

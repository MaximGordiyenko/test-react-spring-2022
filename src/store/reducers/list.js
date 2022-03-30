import { actionTypes } from "../../common/enums";

const listState = {
  isEdit: false
};

export const list = (state = listState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_LIST_TITLE: {
      return {
        ...state,
        isEdit: payload,
      };
    }
    default:
      return state;
  }
};

import { GET_MILESTONES_SUCCESS, GET_MILESTONES_FAIL } from "./actionTypes";

const INIT_STATE = {
  milestones: [],
  error: {},
};

const milestones = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_MILESTONES_SUCCESS:
      return {
        ...state,
        milestones: action.payload,
      };

    case GET_MILESTONES_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default milestones;

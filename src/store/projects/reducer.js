import { GET_PROJECTS_SUCCESS, GET_PROJECTS_FAIL } from "./actionTypes";

const INIT_STATE = {
  projects: [],
  error: {},
};

const projects = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
      };

    case GET_PROJECTS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default projects;

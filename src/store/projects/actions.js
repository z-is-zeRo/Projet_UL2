import {
  GET_PROJECTS,
  GET_PROJECTS_FAIL,
  GET_PROJECTS_SUCCESS,
} from "./actionTypes";

export const getProjects = () => ({
  type: GET_PROJECTS,
});

export const getProjectsSuccess = (projects) => ({
  type: GET_PROJECTS_SUCCESS,
  payload: projects,
});

export const getProjectsFail = (error) => ({
  type: GET_PROJECTS_FAIL,
  payload: error,
});

import {
  GET_MILESTONES,
  GET_MILESTONES_FAIL,
  GET_MILESTONES_SUCCESS,
} from "./actionTypes";

export const getMilestones = () => ({
  type: GET_MILESTONES,
});

export const getMilestonesSuccess = (milestones) => ({
  type: GET_MILESTONES_SUCCESS,
  payload: milestones,
});

export const getMilestonesFail = (error) => ({
  type: GET_MILESTONES_FAIL,
  payload: error,
});

import { call, put, takeEvery } from "redux-saga/effects";

// Crypto Redux States
import { GET_PROJECTS } from "./actionTypes";
import { getProjectsSuccess, getProjectsFail } from "./actions";

//Include Both Helper File with needed methods
import { getProjects } from "../../helpers/fakebackend_helper";

function* fetchProjects() {
  try {
    const response = yield call(getProjects);
    yield put(getProjectsSuccess(response));
  } catch (error) {
    yield put(getProjectsFail(error));
  }
}

function* projectsSaga() {
  yield takeEvery(GET_PROJECTS, fetchProjects);
}

export default projectsSaga;

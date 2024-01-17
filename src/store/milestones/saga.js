import { call, put, takeEvery } from "redux-saga/effects";

// Crypto Redux States
import { GET_MILESTONES } from "./actionTypes";
import { getMilestonesSuccess, getMilestonesFail } from "./actions";

//Include Both Helper File with needed methods
import { getMilestones } from "../../helpers/fakebackend_helper";

function* fetchMilestones() {
  try {
    const response = yield call(getMilestones);
    yield put(getMilestonesSuccess(response));
  } catch (error) {
    yield put(getMilestonesFail(error));
  }
}

function* milestonesSaga() {
  yield takeEvery(GET_MILESTONES, fetchMilestones);
}

export default milestonesSaga;

import { takeLatest, put, getContext } from 'redux-saga/effects';
import { actionTypes } from "../../../common/enums";
import { getAllJobsError, getAllJobsSuccess } from "../../actions";

function* createJob(data) {
  const jobService = yield getContext('jobService');

  try {
    const response = yield jobService.create(data);

    yield put(getAllJobsSuccess(response));
  } catch (error) {
    yield put(getAllJobsError(error));
  }
}

export default function* watchCreateJob() {
  yield takeLatest(actionTypes.CREATE_JOB, createJob());
}

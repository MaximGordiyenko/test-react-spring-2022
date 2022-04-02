import { takeLatest, put, getContext } from 'redux-saga/effects';
import { actionTypes } from "../../../common/enums";
import { getAllJobsError, getAllJobsSuccess } from "../../actions";

function* deleteJobById(id) {
  const jobService = yield getContext('jobService');

  try {
    const response = yield jobService.delete(id);

    yield put(getAllJobsSuccess(response));
  } catch (error) {
    yield put(getAllJobsError(error));
  }
}

export default function* watchDeleteJob() {
  yield takeLatest(actionTypes.DELETE_JOB_BY_ID, deleteJobById);
}

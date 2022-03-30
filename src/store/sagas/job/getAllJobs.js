import { takeLatest, put, getContext } from 'redux-saga/effects';
import { actionTypes } from '../../../common/enums';
import { getAllJobsSuccess, getAllJobsError } from '../../actions';

function* getAllJobs() {
  const jobService = yield getContext('jobService');

  try {
    const response = yield jobService.getAll();

    yield put(getAllJobsSuccess(response));
  } catch (error) {
    yield put(getAllJobsError(error));
  }
}

export default function* watchGetAllJobs() {
  yield takeLatest(actionTypes.GET_ALL_JOBS_FETCH, getAllJobs);
}

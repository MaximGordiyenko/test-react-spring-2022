import { all, fork } from 'redux-saga/effects';
import { watchGetAllJobs, watchDeleteJob, watchCreateJob } from './job';

export default function* rootSaga() {
  yield all([
    fork(watchGetAllJobs),
    fork(watchDeleteJob),
    fork(watchCreateJob),
  ]);
}

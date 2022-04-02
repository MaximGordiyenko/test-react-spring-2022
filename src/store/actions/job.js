import { actionTypes } from '../../common/enums';

export const getInputValue = payload => ({
  type: actionTypes.JOB_SEARCH,
  payload
});

export const getAllJobsFetch = () => ({
  type: actionTypes.GET_ALL_JOBS_FETCH
});

export const getAllJobsSuccess = payload => ({
  type: actionTypes.GET_ALL_JOBS_SUCCESS,
  payload
});

export const getAllJobsError = payload => ({
  type: actionTypes.GET_ALL_JOBS_ERROR,
  payload
});

export const createJob = payload => ({
  type: actionTypes.CREATE_JOB,
  payload
});

export const deleteJobId = payload => ({
  type: actionTypes.DELETE_JOB_BY_ID,
  payload
});

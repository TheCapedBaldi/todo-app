import {
  ACTION_START_RECORDING,
  ACTION_STOP_RECORDING,
  ACTION_ADD_CREATE,
  ACTION_ADD_DELETE,
  ACTION_DELETE_TOP,
} from "./constants";

/**
 * ============================================
 * ============= Action Creators ==============
 * ============================================
 */
export const actionStartRecording = (payload) => ({
  type: ACTION_START_RECORDING,
  payload,
});

export const actionStopRecording = (payload) => ({
  type: ACTION_STOP_RECORDING,
  payload,
});

export const actionAddCreate = (payload) => ({
  type: ACTION_ADD_CREATE,
  payload,
});

export const actionAddDelete = (payload) => ({
  type: ACTION_ADD_DELETE,
  payload,
});

export const actionDeleteTop = (payload) => ({
  type: ACTION_DELETE_TOP,
  payload,
});

/**
 * ============================================
 * =========== Action Dispatchers  ============
 * ============================================
 */
export const startRecording = (data) => (dispatch) =>
  dispatch(actionStartRecording(data));

export const stopRecording = (data) => (dispatch) =>
  dispatch(actionStopRecording(data));

export const addCreateToStack = (data) => (dispatch) =>
  dispatch(actionAddCreate(data));

export const addRemoveToStack = (data) => (dispatch) =>
  dispatch(actionAddDelete(data));

export const popStack = (id) => (dispatch) => dispatch(actionDeleteTop(id));

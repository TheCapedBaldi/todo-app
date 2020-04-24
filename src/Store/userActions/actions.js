import {
  IS_RECORDING,
  NOT_RECORDING,
  ACTION_CREATE,
  ACTION_DELETE,
  REMOVE_TOP,
} from "./constants";

/**
 * ============================================
 * ============= Action Creators ==============
 * ============================================
 */
export const isRecording = (payload) => ({
  type: IS_RECORDING,
  payload,
});

export const notRecording = (payload) => ({
  type: NOT_RECORDING,
  payload,
});

export const create = (payload) => ({
  type: ACTION_CREATE,
  payload,
});

export const remove = (payload) => ({
  type: ACTION_DELETE,
  payload,
});

export const removeTopAction = (payload) => ({
  type: REMOVE_TOP,
  payload,
});

/**
 * ============================================
 * =========== Action Dispatchers  ============
 * ============================================
 */
export const startRecording = (data) => (dispatch) =>
  dispatch(isRecording(data));

export const stopRecording = (data) => (dispatch) =>
  dispatch(notRecording(data));

export const addCreateAction = (data) => (dispatch) => dispatch(create(data));

export const addRemoveAction = (data) => (dispatch) => dispatch(remove(data));

export const removeTop = (id) => (dispatch) => dispatch(removeTopAction(id));

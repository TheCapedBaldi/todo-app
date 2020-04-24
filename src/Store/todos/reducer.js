import {
  SUBMIT_TODO,
  FETCH_TODOS,
  DELETE_TODO,
  DELETE_TODOS,
} from "./constants";

/**
 *
 * @param {Object} state - the entire app state
 * @param {Object} args - an object that describes the action
 */
const todos = (state = {}, { type, payload }) => {
  switch (type) {
    case SUBMIT_TODO:
      return {
        ...state,
        [payload.id]: { ...payload },
      };
    case FETCH_TODOS:
      return {
        ...payload,
      };
    case DELETE_TODO:
      return Object.keys(state).reduce((obj, k) => {
        if (k !== payload) {
          obj[k] = state[k];
        }
        return obj;
      }, {});
    case DELETE_TODOS:
      return {};
    default:
      return state;
  }
};

export default todos;

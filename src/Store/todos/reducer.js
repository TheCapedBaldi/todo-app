import {
  TODO_ADD,
  TODO_FETCH_ALL,
  TODO_EDIT,
  TODO_DELETE,
  TODO_DELETE_ALL,
} from "./constants";

/**
 *
 * @param {Object} state - the entire app state
 * @param {Object} args - an object that describes the action
 */
const todos = (state = {}, { type, payload }) => {
  switch (type) {
    case TODO_ADD:
      return {
        ...state,
        [payload.id]: { ...payload },
      };
    case TODO_FETCH_ALL:
      return {
        ...payload,
      };
    case TODO_DELETE:
      return Object.keys(state).reduce((obj, k) => {
        if (k !== payload) {
          obj[k] = state[k];
        }
        return obj;
      }, {});
    case TODO_DELETE_ALL:
      return {};
    default:
      return state;
  }
};

export default todos;

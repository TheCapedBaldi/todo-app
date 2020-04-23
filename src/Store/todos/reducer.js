import { SUBMIT_TODO, FETCH_TODOS } from "./constants";

/**
 *
 * @param {Object} state - the entire app state
 * @param {Object} args - an object that describes the action
 */
const todos = (state = {}, { type, payload }) => {
  switch (type) {
    case SUBMIT_TODO:
      return { ...state, payload };
    case FETCH_TODOS:
      return {
        ...payload,
      };
    default:
      return state;
  }
};

export default todos;

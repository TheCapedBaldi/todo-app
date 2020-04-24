import { SUBMIT_TODO, FETCH_TODOS, DELETE_TODO } from "./constants";

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
    case DELETE_TODO:
      return {
        ...Object.values(state).filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
};

export default todos;

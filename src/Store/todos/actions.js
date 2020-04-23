import { SUBMIT_TODO, FETCH_TODOS } from "./constants";

/**
 * ============================================
 * ============= Action Creators ==============
 * ============================================
 * creator = payload => ({
 *  type: Action,
 *  payload
 * })
 */
export const todo = (payload) => ({
  type: SUBMIT_TODO,
  payload,
});

export const FetchTodos = (payload) => ({
  type: FETCH_TODOS,
  payload,
});

/**
 * ============================================
 * =========== Action Dispatchers  ============
 * ============================================
 */

/**
 * Will create a new todo object in our app state and in localStorage
 * @param {Object} data
 */
export const createTodo = (data) => (dispatch) => dispatch(todo(data));

/**
 * Will retrieve all todos stored within localStorage.
 */
export const getAllTodos = () => (dispatch) =>
  dispatch(FetchTodos(JSON.parse(localStorage.getItem("todos")) || []));

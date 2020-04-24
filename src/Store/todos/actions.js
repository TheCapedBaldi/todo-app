import { SUBMIT_TODO, FETCH_TODOS, EDIT_TODO, DELETE_TODO } from "./constants";

/**
 * ============================================
 * ============= Action Creators ==============
 * ============================================
 */
export const submitTodo = (payload) => ({
  type: SUBMIT_TODO,
  payload,
});

export const FetchTodos = (payload) => ({
  type: FETCH_TODOS,
  payload,
});

export const editTodo = (payload) => ({
  type: EDIT_TODO,
  payload,
});

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
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
export const createTodo = (data) => (dispatch) => {
  // fetch the todos list from localstorage
  const db = JSON.parse(localStorage.getItem("todos")) || [];

  // append the data to the localStorage
  localStorage.setItem("todos", JSON.stringify([...db, data]));

  return dispatch(submitTodo(data));
};

/**
 * Will retrieve all todos stored within localStorage.
 */
export const getAllTodos = () => (dispatch) =>
  dispatch(FetchTodos(JSON.parse(localStorage.getItem("todos")) || []));

/**
 * Will edit todo task
 * @param {Object} data
 */
export const editTodoDispatch = (data) => (dispatch) =>
  dispatch(editTodo(data));

/**
 * Will delete the todo task from localstorage and app state
 * @param {String} id
 */
export const deleteTodoDispatch = (id) => (dispatch) => {
  let db = JSON.parse(localStorage.getItem("todos")) || [];

  let removeIdx = db.map((todo) => todo.id).indexOf(id);

  db.splice(removeIdx, 1);

  localStorage.setItem("todos", JSON.stringify([...db]));

  return dispatch(deleteTodo(id));
};

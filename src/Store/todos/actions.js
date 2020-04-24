import {
  SUBMIT_TODO,
  FETCH_TODOS,
  EDIT_TODO,
  DELETE_TODO,
  DELETE_TODOS,
} from "./constants";

import { removeTop } from "../userActions/actions";

/**
 * ============================================
 * ============= Action Creators ==============
 * ============================================
 */
export const submitTodo = (payload) => ({
  type: SUBMIT_TODO,
  payload,
});

export const fetchTodos = (payload) => ({
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

export const deleteTodos = (payload) => ({
  type: DELETE_TODOS,
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
  const db = JSON.parse(localStorage.getItem("todos")) || {};

  // append the data to the localStorage
  localStorage.setItem(
    "todos",
    JSON.stringify({ ...db, [data.id]: { ...data } })
  );

  return dispatch(submitTodo(data));
};

/**
 * Will retrieve all todos stored within localStorage.
 */
export const getAllTodos = () => (dispatch) =>
  dispatch(fetchTodos(JSON.parse(localStorage.getItem("todos")) || {}));

/**
 * Will delete all todos from our app state
 */
export const clearAllTodos = () => (dispatch) => dispatch(deleteTodos());

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
  let todos = JSON.parse(localStorage.getItem("todos")) || {};

  // return a new collection with the selected todo removed
  const newTodos = Object.keys(todos).reduce((obj, k) => {
    if (k !== id) obj[k] = todos[k];
    return obj;
  }, {});

  // localStorage.setItem("todos", JSON.stringify({ ...newTodos }));

  return dispatch(deleteTodo(id));
};

export const playbackRecord = (data) => (dispatch) => {
  const todos = JSON.parse(localStorage.getItem("todos")) || {};

  let startPlaying = setInterval(() => {
    // destucture our actions
    const { actions } = data;

    // get the top element of our stack
    const top = actions && actions.length > 0 ? actions[0] : false;

    // get the id of the top element
    const id = top ? top.id : false;

    // if id is valid
    if (id) {
      console.log(top);

      if (top.action === "CREATE") {
        dispatch(createTodo(todos[id]));
        dispatch(removeTop(id));
      }

      if (top.action === "DELETE") dispatch(deleteTodoDispatch(id));
    }

    // cleanup
    clearInterval(startPlaying);
  }, 1000);
};

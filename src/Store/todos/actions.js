import {
  TODO_ADD,
  TODO_FETCH_ALL,
  TODO_EDIT,
  TODO_DELETE,
  TODO_DELETE_ALL,
} from "./constants";

import { popStack } from "../userActions/actions";

/**
 * ============================================
 * ============= Action Creators ==============
 * ============================================
 */
export const todoAdd = (payload) => ({
  type: TODO_ADD,
  payload,
});

export const todoFetchAll = (payload) => ({
  type: TODO_FETCH_ALL,
  payload,
});

export const todoEdit = (payload) => ({
  type: TODO_EDIT,
  payload,
});

export const todoDelete = (payload) => ({
  type: TODO_DELETE,
  payload,
});

export const todoDeleteAll = (payload) => ({
  type: TODO_DELETE_ALL,
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
export const addTodo = (data) => (dispatch) => {
  // fetch the todos list from localstorage
  const db = JSON.parse(localStorage.getItem("todos")) || {};

  // append the data to the localStorage
  localStorage.setItem(
    "todos",
    JSON.stringify({ ...db, [data.id]: { ...data } })
  );

  return dispatch(todoAdd(data));
};

/**
 * Will retrieve all todos stored within localStorage.
 */
export const fetchAllTodos = () => (dispatch) =>
  dispatch(todoFetchAll(JSON.parse(localStorage.getItem("todos")) || {}));

/**
 * Will delete all todos from our app state
 */
export const deleteAllTodos = () => (dispatch) => dispatch(todoDeleteAll());

/**
 * Will edit todo task
 * @param {Object} data
 */
export const editTodo = (data) => (dispatch) => dispatch(todoEdit(data));

/**
 * Will delete the todo task from localstorage and app state
 * @param {String} id
 */
export const deleteTodo = (id) => (dispatch) => {
  let todos = JSON.parse(localStorage.getItem("todos")) || {};

  // return a new collection with the selected todo removed
  const newTodos = Object.keys(todos).reduce((obj, k) => {
    if (k !== id) obj[k] = todos[k];
    return obj;
  }, {});

  // localStorage.setItem("todos", JSON.stringify({ ...newTodos }));

  return dispatch(todoDelete(id));
};

export const playbackRecord = (data) => (dispatch) => {
  const todos = JSON.parse(localStorage.getItem("todos")) || {};

  let startPlaying = setInterval(() => {
    // destucture our actions
    const { actions } = data;

    const actionsCopy = actions;

    // get the top element of our stack
    const top = actions && actions.length > 0 ? actions[0] : false;

    // get the id of the top element
    const id = top ? top.id : false;

    // if id is valid
    if (id) {
      console.log(top);

      if (top.action === "ADD") {
        dispatch(addTodo(todos[id]));
        dispatch(popStack(id));
      }

      if (top.action === "DELETE") {
        dispatch(deleteTodo(id));
        dispatch(popStack(id));
      }
    }

    // cleanup
    clearInterval(startPlaying);
  }, 1000);
};

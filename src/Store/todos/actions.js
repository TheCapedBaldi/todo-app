import {
  TODO_ADD,
  TODO_FETCH_ALL,
  TODO_EDIT,
  TODO_DELETE,
  TODO_DELETE_ALL,
} from "./constants";

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
export const deleteAllTodos = (deleteFromLocalstorage) => (dispatch) => {
  if (deleteFromLocalstorage) localStorage.removeItem("todos");
  dispatch(todoDeleteAll());
};

/**
 * Will edit todo task
 * @param {Object} data
 */
export const editTodo = (data) => (dispatch) => dispatch(todoEdit(data));

/**
 * Will delete the todo task from the app state
 * @param {String} id
 */
export const deleteTodo = (id) => (dispatch) => dispatch(todoDelete(id));

/**
 * Action which will replay the users actions from the initial
 * state of the app where user starts to record, until where user stoped
 * the record
 * @param {*} data - the 'userAction' reducer from redux
 * @param {*} cb - callback to passback to the component
 */
export const playbackRecord = (data, cb) => (dispatch) => {
  const todos = JSON.parse(localStorage.getItem("todos")) || {};

  // destucture our actions
  const { actions } = data;

  /**
   * important: clone the actions array (with spread), as to not affect
   * the redux ations stack, since js is call-by-reference. That way
   * the user can replay again without refresh.
   **/
  const cacheActions = [...(actions || [])];

  let startPlaying = setInterval(() => {
    // get the top element of our stack
    const top =
      cacheActions && cacheActions.length > 0 ? cacheActions[0] : false;

    // i.e. stack has no more actions
    if (!top) {
      // send a callback to indicate that the stack is empty, and toggle play again
      cb(false);

      // cleanup
      clearInterval(startPlaying);
    }

    // get the id of the top element
    const id = top ? top.id : false;

    // if id is valid
    if (id) {
      // dispatch action respectively
      switch (top.action) {
        case "ADD":
          dispatch(addTodo(todos[id]));
          break;
        case "DELETE":
          dispatch(deleteTodo(id));
          break;
        case "EDIT":
          dispatch(editTodo({ id, data: top?.data }));
          break;
      }

      cacheActions.shift();
    }
  }, 1000);
};

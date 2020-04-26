import { useState, useCallback, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

// local components
import { usePreventWindowUnload } from "src/hooks/usePreventWindowUnload";
import {
  deleteAllTodos,
  fetchAllTodos,
  playbackRecord,
} from "src/Store/todos/actions";

/**
 * Custom hook which abstracts the side-effects from the component.
 */
export const useTodos = () => {
  // keep track of the play state
  const [play, setPlay] = useState(false);

  // get the two reducers from redux
  const { todos, userActions } = useSelector(({ todos, userActions }) => ({
    todos,
    userActions,
  }));

  // needed to dispatch actions in redux
  const dispatch = useDispatch();

  // func. to toggle the state of play
  const togglePlay = useCallback(() => setPlay((p) => !p), []);

  // func. to dispatch a deleteAllTodos action
  const onDelete = () => dispatch(deleteAllTodos(true));

  // which will retrieve latest todos from localStorage on component mount only
  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

  // clean all todos if play btn was pressed
  useEffect(() => {
    if (play) {
      // delete call todos, without deleting it from localstorage
      dispatch(deleteAllTodos(false));
    }
  }, [play]);

  // On play, remove from stack, and add to todos state, with 1s delay
  useEffect(() => {
    if (play) {
      // start replaying user actions. Once done, toggle the play state
      dispatch(playbackRecord(userActions, (cb) => togglePlay(cb)));
    }
  }, [play, userActions]);

  /**
   * The first element of array is to tell the hook the browser
   * is allowed to unload. Second element is to update when todos is
   * updated.
   */
  usePreventWindowUnload([true, todos], (e) => {
    localStorage.setItem("todos", JSON.stringify({ ...todos }));
  });

  return { play, togglePlay, todos, userActions, onDelete };
};

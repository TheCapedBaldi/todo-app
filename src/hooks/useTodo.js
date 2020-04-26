import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteTodo, editTodo } from "src/Store/todos/actions";
import {
  addRemoveToStack,
  addEditToStack,
} from "src/Store/userActions/actions";

/**
 * Will format the date and return a new string with month & date
 * @param {String} date
 */
const formatDate = (date) => {
  if (date) {
    const [, month, dateNum] = date.split(" ");
    return `${month} ${dateNum}`;
  }
};

/**
 * Custom hook which abstracts many operations away from the component
 * @param {*} id - the id of the todo
 * @param {*} name - the name of the todo
 * @param {*} description - the description of the todo
 * @param {*} date - the date it was created/modified
 */
export const useTodo = (id, name, description, date) => {
  // local state to determine if its editable
  const [editable, setEditable] = useState(false);

  // local state of todo for tracking changes from user input
  const [todo, updateTodo] = useState({
    id,
    name,
    description,
    date,
  });

  // retrieve userActions stack from redux
  const { userActions } = useSelector(({ userActions }) => ({ userActions }));

  // needed to dispatch actions to redux
  const dispatch = useDispatch();

  const toggleEditable = (v) => setEditable(v);

  /**
   * onChange func. which will update our local state when user is typing
   * @param {*} e
   */
  const onChange = (e) =>
    updateTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });

  /**
   * func. which will submit the form, thereby updating redux and register
   * the action into our stack
   * @param {*} e
   */
  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...todo,
      date: new Date().toString(),
    };

    // update our redux with the new values for respective todo
    dispatch(
      editTodo({
        id,
        data,
      })
    );

    // if user is recording, then also register the action
    if (userActions.isRecording) {
      dispatch(
        addEditToStack({
          id,
          data,
          action: "EDIT",
        })
      );
    }

    // toggle the form back to readable
    setEditable(false);
  };

  /**
   * func. which will delete the todo from redux
   * @param {*} e
   */
  const onDelete = (e) => {
    e.preventDefault();

    dispatch(deleteTodo(id));

    if (userActions.isRecording) {
      dispatch(
        addRemoveToStack({
          id,
          action: "DELETE",
        })
      );
    }
  };

  return {
    editable,
    todo,
    toggleEditable,
    formatDate,
    onChange,
    onDelete,
    onSubmit,
  };
};

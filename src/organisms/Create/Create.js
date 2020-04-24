import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { createTodo } from "src/Store/todos/actions";
import Input from "src/atoms/Input";
import TextArea from "src/atoms/TextArea";
import Button from "src/atoms/Button";
import {
  StyledForm,
  StyledInputContainer,
  StyledTextAreaContainer,
} from "./Create.style";

const Create = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [date, setDate] = React.useState("");
  const [name, setName] = React.useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        return;
      case "description":
        setDesc(e.target.value);
        return;
    }
  };

  /**
   * Basic form validation to ensure all the fields are populated.
   * TODO: improve on the validation of the inputs with regex and
   * string rules.
   */
  const validateForm = () => {
    if (desc === "" || name === "") return false;
    return true;
  };

  const clearForm = () => {
    setId("");
    setDesc("");
    setDate("");
    setName("");
  };

  /**
   * Will submit the form. i.e. if successful, store the values to localStorage
   * @param {*} e
   */
  const onSubmitForm = (e) => {
    e.preventDefault();

    // is it a controlled component? This checks that.
    if (typeof onSubmit === "function") {
      onSubmit({
        id: uuidv4(),
        name,
        description: desc,
        date: new Date().toString(),
      });
      return;
    }

    if (validateForm()) {
      dispatch(
        createTodo({
          id: uuidv4(),
          name,
          description: desc,
          date: new Date().toString(),
        })
      );
    }
    clearForm();
  };

  return (
    <StyledForm onSubmit={onSubmitForm}>
      <h1>Create new Todo task</h1>
      <StyledInputContainer>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
        />
      </StyledInputContainer>
      <StyledTextAreaContainer>
        <label htmlFor="description">Description</label>
        <TextArea
          type="text"
          name="description"
          id="description"
          value={desc}
          onChange={handleChange}
        />
      </StyledTextAreaContainer>

      <Button type="submit" value="submit">
        Submit
      </Button>
    </StyledForm>
  );
};

export default Create;

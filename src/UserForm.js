import React, { useReducer } from "react";

const UserForm = () => {
  // Initial State
  const userState = {
    username: "",
    email: "",
    password: "",
    age: 0,
    student: false,
  };

  // Reducer
  const formReducer = (state, action) => {
    switch (action.type) {
      case "HANDLE_INPUT":
        return {
          ...state,
          [action.field]: action.payload,
        };
      case "HANDLE_BOOL_INPUT":
        console.log("HANDLE_BOOL_INPUT");
        return {
          ...state,
          student: action.payload,
        };
      default:
        return state;
    }
  };

  // useReducer
  const [formState, dispatch] = useReducer(formReducer, userState);

  // dispatch functions
  const handleTextChange = (e) => {
    dispatch({
      type: "HANDLE_INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleNumberChange = (e) => {
    dispatch({
      type: "HANDLE_INPUT",
      field: e.target.name,
      payload: Number(e.target.value),
    });
  };

  const handleBool = () => {
    console.log("handlebool");
    dispatch({
      type: "HANDLE_BOOL_INPUT",
      field: "student",
      payload: !formState.student,
    });
  };

  // Form Submission
  const handleFormSubmit = (e) => {
    console.log("handle form submit");
    e.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label name="name">
        Name:
        <br />
        <input
          type="text"
          value={formState.username}
          name="username"
          onChange={handleTextChange}
        />
      </label>
      <br />

      <label name="email">
        Email:
        <br />
        <input
          type="text"
          value={formState.email}
          name="email"
          onChange={handleTextChange}
        />
      </label>
      <br />

      <label name="password">
        Password:
        <br />
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleTextChange}
        />
      </label>
      <br />

      <label name="age">
        Age:
        <br />
        <input
          type="text"
          name="age"
          value={formState.age}
          onChange={handleNumberChange}
        />
      </label>
      <br />
      <label name="student">
        Student:
        <br />
        <input
          type="checkbox"
          name="student"
          checked={formState.student}
          onChange={handleBool}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;

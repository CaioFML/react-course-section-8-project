import React from "react";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor='username'>UserName</label>
      <input type='text' id='username' />

      <label htmlFor='age'>Age (years)</label>
      <input type='number' id='age' />

      <button type='submit'>Add User</button>
    </form>
  );
};

export default AddUser;

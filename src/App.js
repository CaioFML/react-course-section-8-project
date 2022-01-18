import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => [
      ...prevUsersList,
      { id: Math.random().toString(), name: userName, age: userAge },
    ]);
  };

  return (
    <div>
      <AddUser onAddUser={addUsersHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;

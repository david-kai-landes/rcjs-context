import { useState } from "react";
import "./App.css";
import AddUser from "./Components/AddUser";
import User from "./Components/User";
import UserList from "./Components/UserList";
import { AppContext } from "./Components/context";

const userList = [
  {
    id: 1,
    name: "David",
    age: 29,
    bio: "Full time software enginner at Banyan Air",
  },
];

function App() {
  const [users, setUsers] = useState(userList);

  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_USER":
        setUsers([...users, payload.newUser]);
        return;
      case "REMOVE_USER":
        setUsers(users.filter((user) => user.id !== payload.userId));
        return;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <AppContext.Provider value={{ users, dispatchUserEvent }}>
        <AddUser />
        <UserList />
      </AppContext.Provider>
    </div>
  );
}

export default App;

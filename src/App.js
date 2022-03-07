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
    
  }

  return (
    <div className="App">
      <AppContext.Provide value={{ users }}>
        <AddUser />
        <UserList />
        <User />
      </AppContext.Provide>
    </div>
  );
}

export default App;
